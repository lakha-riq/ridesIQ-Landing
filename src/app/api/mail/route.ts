import { NextResponse } from "next/server";
import { sendEmail, StoreEmail } from "@/actions/smtp";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { firstName, lastName, email, companyName, phone, interest, vehicleCount, trackingType, features, region, existingCustomer } = body;

		const html = ` <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
		<head>
		<!--[if gte mso 9]>
		<xml>
		  <o:OfficeDocumentSettings>
			<o:AllowPNG/>
			<o:PixelsPerInch>96</o:PixelsPerInch>
		  </o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
		  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta name="x-apple-disable-message-reformatting">
		  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
		  <title></title>
		  
		    <style type="text/css">
		      
		      @media only screen and (min-width: 720px) {
		        .u-row {
		          width: 700px !important;
		        }

		        .u-row .u-col {
		          vertical-align: top;
		        }

		        
		            .u-row .u-col-100 {
		              width: 700px !important;
		            }
		          
		      }

		      @media only screen and (max-width: 720px) {
		        .u-row-container {
		          max-width: 100% !important;
		          padding-left: 0px !important;
		          padding-right: 0px !important;
		        }

		        .u-row {
		          width: 100% !important;
		        }

		        .u-row .u-col {
		          display: block !important;
		          width: 100% !important;
		          min-width: 320px !important;
		          max-width: 100% !important;
		        }

		        .u-row .u-col > div {
		          margin: 0 auto;
		        }


	}
    
body{margin:0;padding:0}table,td,tr{border-collapse:collapse;vertical-align:top}p{margin:0}.ie-container table,.mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}


table, td { color: #ffffff; } </style>
		  
		  

	</head>

	<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #000000;color: #ffffff">
	  <!--[if IE]><div class="ie-container"><![endif]-->
	  <!--[if mso]><div class="mso-container"><![endif]-->
	  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #000000;width:100%" cellpadding="0" cellspacing="0">
	  <tbody>
	  <tr style="vertical-align: top">
		<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #000000;"><![endif]-->
		
	  
	  
	<div class="u-row-container" style="padding: 0px;background-color: transparent">
	  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
		<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif]-->
		  
	<!--[if (mso)|(IE)]><td align="center" width="700" style="width: 700px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
	<div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
	  <div style="height: 100%;width: 100% !important;">
	  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	  
	<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	  <tbody>
		<tr>
		  <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:helvetica,sans-serif;" align="left">
			
	  <!--[if mso]><table width="100%"><tr><td><![endif]-->
		<h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 48px; font-weight: 400;"><span>RidesIQ</span></h1>
	  <!--[if mso]></td></tr></table><![endif]-->

	  </td>
	</tr>
	  </tbody>
	</table>

	<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	  <tbody>
		<tr>
		  <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:helvetica,sans-serif;" align="left">
			
	  <!--[if mso]><table width="100%"><tr><td><![endif]-->
		<h2 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 28px; font-weight: 400;"><span>Hey there!</span></h2>
	  <!--[if mso]></td></tr></table><![endif]-->

	  </td>
	</tr>
	  </tbody>
	</table>

	<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	  <tbody>
		<tr>
		  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:helvetica,sans-serif;" align="left">
			
	  <div style="font-size: 17px; line-height: 140%; text-align: center; word-wrap: break-word;">
		<p style="line-height: 140%;">What's Up! thank you for reaching out to RidesIQ team!</p>
	<p style="line-height: 140%;">We&nbsp; recieved your email and will reach out as soon as we can.</p>
	<p style="line-height: 140%;">&nbsp;</p>
	<p style="line-height: 140%;">&nbsp;</p>
	<p style="line-height: 140%;">&nbsp;</p>
	<p style="line-height: 140%;">cheers!</p>
	<p style="line-height: 140%;">&nbsp;</p>
	<p style="line-height: 140%;">&nbsp;</p>
	<p style="line-height: 140%;">&nbsp;</p>
	  </div>

	  </td>
	</tr>
	  </tbody>
	</table>

	  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td><![endif]-->
	  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	  


	  
	  
	<div class="u-row-container" style="padding: 10px 10px 50px;background-color: #1d1d1f">
	  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
		<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 10px 10px 50px;background-color: #1d1d1f;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif]-->
		  
	<!--[if (mso)|(IE)]><td align="center" width="700" style="width: 700px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
	<div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
	  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
	  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
	  
	<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	  <tbody>
		<tr>
		  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:helvetica,sans-serif;" align="left">
			
	<table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #424245;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
	  <tbody>
		<tr style="vertical-align: top">
		  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
			<span>&#160;</span>
		  </td>
		</tr>
	  </tbody>
	</table>

	  </td>
	</tr>
	  </tbody>
	</table>

	  </td>
	</tr>
	  </tbody>
	</table>

	  </td>
	</tr>
	  </tbody>
	</table>

	  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	</td>
	</tr>
	</tbody>
	</table>
	<!--[if mso]></div><![endif]-->
	<!--[if IE]></div><![endif]-->
	</body>

	</html>`;

		// Format the text for RidesIQ team email
		const text = `
	Quote Request Details:\n
	-------------------\n
	Name: ${firstName} ${lastName}\n
	Email: ${email}\n
	Company: ${companyName}\n
	Phone: ${phone}\n
	Region: ${region}\n
	Existing Customer: ${existingCustomer}\n

	Fleet Information:\n
	----------------\n
	Interest: ${interest} \n
	Vehicle Count: ${vehicleCount} \n
	Vehicle Types: ${JSON.stringify(trackingType)} \n
	Required Features: ${JSON.stringify(features)} \n
		`;

		// Send to RidesIQ team
		const StoreEmailResult = await StoreEmail({
			to: [email],
			from: process.env.AWS_SES_VERIFIED_EMAIL!,
			subject: `Quote Request from ${firstName} ${lastName}`,
			name: `${firstName} ${lastName}`,
			text,
		});
		if (!StoreEmailResult.success) {
			return NextResponse.json({ error: "Failed to store email" }, { status: 500 });
		}

		// Send confirmation to client with original template
		const SendToContacterResult = await sendEmail({
			to: [email],
			from: process.env.AWS_SES_VERIFIED_EMAIL!,
			subject: "Thank you for contacting RidesIQ",
			html,
			text: "Thank you for contacting RidesIQ. We'll get back to you soon!",
		});

		if (!SendToContacterResult.success) {
			return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
		}

		return NextResponse.json({ success: true, messageId: SendToContacterResult.messageId });
	} catch (error) {
		console.error("Error in email API route:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
