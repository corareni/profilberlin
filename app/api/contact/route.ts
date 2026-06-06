import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json(
      { error: "Formular ist nicht konfiguriert." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Übermittlung fehlgeschlagen." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Übermittlung fehlgeschlagen." },
      { status: 500 }
    );
  }
}
