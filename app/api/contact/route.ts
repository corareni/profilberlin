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

    // Formspree AJAX submission - see https://help.formspree.io/hc/en-us/articles/360013470814
    const formspreePayload = {
      vorname: body.vorname,
      nachname: body.nachname,
      email: body.email,
      telefon: body.telefon ?? "",
      thema: body.thema,
      nachricht: body.nachricht ?? "",
      _subject: `Kontaktanfrage: ${body.thema}`,
      _replyto: body.email,
      name: `${body.vorname} ${body.nachname}`,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formspreePayload),
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
