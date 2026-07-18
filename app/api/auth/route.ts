import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const password = body.password;

  if (!password) {
    return NextResponse.json(
      {
        success: false,
        message: "Password required",
      },
      { status: 400 }
    );
  }

  if (password !== process.env.WEBSITE_PASSWORD) {
    return NextResponse.json(
      {
        success: false,
        message: "Incorrect Password",
      },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
  });
}