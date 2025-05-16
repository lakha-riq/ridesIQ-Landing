import { NextRequest, NextResponse } from 'next/server';
import {
  SESv2Client,
  CreateContactCommand,
  CreateContactListCommand,
  ListContactListsCommand,
  SendEmailCommand,
} from '@aws-sdk/client-sesv2';

const sesClient = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const CONTACT_LIST_NAME = 'ridesiq-sub';

const subscribedEmails = new Set<string>();

export async function GET() {
  return NextResponse.json({
    message: 'API is working! Send a POST request with an email to subscribe.',
  });
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (subscribedEmails.has(email)) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // 1️⃣ Check/Create contact list if not exists
    const contactLists = await sesClient.send(new ListContactListsCommand({}));
    const listExists = contactLists?.ContactLists?.some(
      (list) => list.ContactListName === CONTACT_LIST_NAME
    );

    if (!listExists) {
      await sesClient.send(
        new CreateContactListCommand({
          ContactListName: CONTACT_LIST_NAME,
          Topics: [], // Optional: Can define topics for preferences
        })
      );
    }

    // 2️⃣ Send welcome email
    await sesClient.send(
      new SendEmailCommand({
        FromEmailAddress: 'info@ridesiq.com',
        Destination: { ToAddresses: [email] },
        Content: {
          Simple: {
            Subject: { Data: 'Confirm your subscription to RidesIQ' },
            Body: {
              Html: {
                Data: `
                  <html>
                    <body>
                      <h1>Thanks for Subscribing</h1>
                      <p>We’ll keep you posted with updates and features.</p>
                    </body>
                  </html>
                `,
              },
              Text: { Data: 'Thank you for subscribing to RidesIQ!' },
            },
          },
        },
      })
    );

    // 3️⃣ Add contact to the list
    try {
      await sesClient.send(
        new CreateContactCommand({
          ContactListName: CONTACT_LIST_NAME,
          EmailAddress: email,
          UnsubscribeAll: false,
        })
      );
    } catch (err: any) {
      if (err.name !== 'AlreadyExistsException') {
        console.error('Failed to add to contact list:', err);
        return NextResponse.json(
          { message: 'Subscribed but failed to add to contact list.' },
          { status: 500 }
        );
      }
    }

    subscribedEmails.add(email);

    return NextResponse.json({
      message:
        'Subscription successful! Please check your email for confirmation.',
    });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
