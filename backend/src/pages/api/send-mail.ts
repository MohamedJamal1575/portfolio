import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from "resend";

type ResponseData = {
  success: boolean;
  message: string;
};


const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  try {

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL as string],
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="background-color:#f5f7fb;padding:24px">
          <div style="
            max-width:600px;
            margin:0 auto;
            background:#ffffff;
            border-radius:8px;
            overflow:hidden;
            font-family:Arial, Helvetica, sans-serif;
            box-shadow:0 4px 12px rgba(0,0,0,0.08);
          ">

            <div style="
              background:#0f172a;
              color:#ffffff;
              padding:20px 24px;
              font-size:20px;
              font-weight:bold;
            ">
              📩 New Portfolio Contact
            </div>

            <div style="padding:24px;color:#334155;font-size:14px;line-height:1.6">
              <p>You have received a new message from your portfolio contact form.</p>

              <table style="width:100%;margin-top:16px">
                <tr>
                  <td style="color:#64748b;width:100px">Name</td>
                  <td style="font-weight:600">${name}</td>
                </tr>
                <tr>
                  <td style="color:#64748b">Email</td>
                  <td style="font-weight:600">${email}</td>
                </tr>
              </table>

              <div style="margin-top:24px">
                <div style="color:#64748b;font-size:13px">Message</div>
                <div style="
                  background:#f8fafc;
                  border:1px solid #e5e7eb;
                  border-radius:6px;
                  padding:16px;
                  margin-top:6px;
                  white-space:pre-line;
                ">
                  ${message}
                </div>
              </div>
            </div>

            <div style="
              background:#f1f5f9;
              padding:16px;
              font-size:12px;
              color:#64748b;
              text-align:center;
            ">
              Sent from your portfolio contact form
            </div>

          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Mail Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
    });
  }
}
