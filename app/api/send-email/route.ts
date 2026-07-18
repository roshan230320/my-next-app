import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
console.log(body);

    const { date, time, location, message } = body;

    if (!date || !time || !location) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Our Little Sunflower 🌻" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      cc: "rajashtami38@gmail.com",
      subject: "🌻 New Meeting Request",
      html: `
      <div style="font-family:Arial;padding:25px">

      <h2 style="color:#2563eb">
      🌻 New Meeting Response
      </h2>

      <hr/>

      <p><b>Date:</b> ${date}</p>

      <p><b>Time:</b> ${time}</p>

      <p><b>Place:</b> ${location}</p>

      <p><b>Message:</b></p>

      <p>${message || "No Message"}</p>

      <br/>

      <small>
      Sent from Our Little Sunflower ❤️
      </small>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send email.",
      },
      {
        status: 500,
      }
    );
  }
}