import "server-only";

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
	name?: string;
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

export async function StoreEmail({ to, from, subject, text, name }: SendEmailParams) {
	try {
		// Store email in a database

		const command = new SendEmailCommand({
			Destination: {
				ToAddresses: [process.env.AWS_SES_VERIFIED_EMAIL??"noreply@ridesiq.com", `aryan@ridesiq.com` , `prab@ridesiq.com`],
			},
			Message: {
				Body: {
					Html: {
						Charset: "UTF-8",
						Data: `<html>
									<head>
										<title>Message from  : ${from}</title>
										</head>
										<body>
										<h1>Message from ${name}</h1>
											<p>email : ${to}</p>
											<p>subject : ${subject}</p>
											<p>message : ${text}</p>
										</body>
									</html>
											`,
					},

					...(text && {
						Text: {
							Charset: "UTF-8",
							Data: text,
						},
					}),
				},
				Subject: {
					Charset: "UTF-8",
					Data: "Client Message : " + subject,
				},
			},
			Source: from,
		});

		const response = await sesClient.send(command);
		return { success: true, message: response.MessageId };
	} catch (error) {
		console.error("Error storing email:", error);
		return { success: false, message: error };
	}
}
