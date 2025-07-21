import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY!);

export async function POST(req: Request) {
    try {
        const { name, email, projectType, description } = await req.json();
        console.log({ name, email, projectType, description });
        const msg = {
            to: "edwin.d899@gmail.com", // Ton email ou celui de ton équipe
            from: email, // L'email de l'expéditeur
            replyTo: email, // Pour que tu puisses répondre directement
            subject: `Nouveau projet de ${name} pour ${projectType.join(", ")}`,
            text: description,
            //   html: `
            //     <p><strong>Nom:</strong> ${name}</p>
            //     <p><strong>Email:</strong> ${email}</p>
            //     <p><strong>Type de projet:</strong> ${projectType.join(", ")}</p>
            //     <p><strong>Description:</strong><br/>${description}</p>
            //   `,
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de l'envoi du message." },
            { status: 500 }
        );
    }
}
