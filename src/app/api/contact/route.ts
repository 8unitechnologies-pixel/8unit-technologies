import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json();
    const key = process.env.RESEND_API_KEY;
    console.log('API key present:', https://github.com/JuiCer-BscIT/CiviSoilLabDB_2.gitkey);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: '8unitechnologies@gmail.com',
        subject: 'New Project Inquiry: ' + type,
        html: '<div style="font-family:sans-serif;padding:20px;"><h2 style="color:#3B82F6;">New Inquiry from 8 Unit Website</h2><p><strong>Name:</strong> ' + name + '</p><p><strong>Email:</strong> ' + email + '</p><p><strong>Type:</strong> ' + type + '</p><p><strong>Message:</strong></p><p style="background:#f5f5f5;padding:16px;border-radius:8px;">' + message + '</p></div>',
      }),
    });
    const data = await res.json();
    console.log('Resend response:', res.status, JSON.stringify(data));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}