import "server-only"

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";


const sesClient = new SESClient({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
});


interface SendEmailParams {
	to: string[];
	from: string;
	subject: string;
	html?: string;
	text?: string;
}

export async function sendEmail({ to, from, subject, html, text }: SendEmailParams) {
	try {
		const command = new SendEmailCommand({
			Destination: {
				ToAddresses: to,
			},
			Message: {
				Body: {
					...(html && {
						Html: {
							Charset: "UTF-8",
							Data: html,
						},
					}),
					...(text && {
						Text: {
							Charset: "UTF-8",
							Data: text,
						},
					}),
				},
				Subject: {
					Charset: "UTF-8",
					Data: subject,
				},
			},
			Source: from,
		});

		const response = await sesClient.send(command);
		return { success: true, messageId: response.MessageId };
	} catch (error) {
		console.error("Error sending email:", error);
		return { success: false, error };
	}
}