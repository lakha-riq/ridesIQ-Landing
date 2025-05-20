import { NextRequest, NextResponse } from 'next/server';
import {
  SESv2Client,
  CreateContactCommand,
  CreateContactListCommand,
  ListContactListsCommand,
  GetContactCommand,
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

    // 1️⃣ Check/Create contact list if not exists
    const contactLists = await sesClient.send(new ListContactListsCommand({}));
    const listExists = contactLists?.ContactLists?.some(
      (list) => list.ContactListName === CONTACT_LIST_NAME
    );

    if (!listExists) {
      await sesClient.send(
        new CreateContactListCommand({
          ContactListName: CONTACT_LIST_NAME,
          Topics: [],
        })
      );
    }

    try {
      await sesClient.send(
        new GetContactCommand({
          ContactListName: CONTACT_LIST_NAME,
          EmailAddress: email,
        })
      );

      return NextResponse.json(
        { message: 'Email already subscribed..' },
        { status: 409 }
      );
    } catch (err: any) {
      if (err.name !== 'NotFoundException') {
        console.error('Error checking contact existence:', err);
        return NextResponse.json(
          { message: 'Error checking contact in SES' },
          { status: 500 }
        );
      }
    }

    // 3️⃣ Send welcome email
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
                                 <hr
              style="width:100%;border:none;border-top:1px solid #eaeaea;margin-top:32px;margin-bottom:32px" />
            <h1
              style="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:12px;text-align:left;color:#111827;font-size:36px;line-height:40px;font-weight:800">
              RIDES IQ.
            </h1>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:100%;text-align:left;margin-bottom:20px">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <a
                      href="https://ridesiq.com/unsub"
                      style="line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;color:#ffffff;background-color:#00affc;border-color:#00affc;border-width:2px;border-style:solid;font-size:14px;font-weight:500;border-radius:6px;padding:8px 24px 8px 24px"
                      target="_blank"
                      ><span
                        ><!--[if mso]><i style="mso-font-width:400%;mso-text-raise:12" hidden>&#8202;&#8202;&#8202;</i><![endif]--></span
                      ><span
                        style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:6px"
                        >unsubscribe</span
                      ><span
                        ><!--[if mso]><i style="mso-font-width:400%" hidden>&#8202;&#8202;&#8202;&#8203;</i><![endif]--></span
                      ></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
             <p style="font-size:12px;text-align:center;color:#6B7280;margin-top:32px;border-top:1px solid #eaeaea;padding-top:20px">
              This is an automated message. Unsubscribe link for compliance: <a href="https://ridesiq.com/unsub" style="color:#678FCA;text-decoration:underline">unsubscribe</a>
            </p>
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

    // 4️⃣ Add contact to the list
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

    return NextResponse.json({
      message:
        'Subscribed successfully! Please check your email for confirmation.',
    });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
