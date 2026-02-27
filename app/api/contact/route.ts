import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend
// In a real scenario, this would be an environment variable: process.env.RESEND_API_KEY
// Fallback to a placeholder if not found during build/dev
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_123456');

// Define validation schema for the incoming request
const contactSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
    company: z.string().optional(),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    budget: z.string().min(1, "Bütçe aralığı seçiniz"),
    message: z.string().min(10, "Proje detayları en az 10 karakter olmalıdır"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate request body
        const validatedData = contactSchema.parse(body);

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'FutmindAI Website <onboarding@resend.dev>', // Should be a verified domain in production like no-reply@futmind.ai
            to: ['hello@futmind.ai'], // Your destination email
            subject: `Yeni Proje Talebi: ${validatedData.name} - ${validatedData.company || 'Bireysel'}`,
            html: `
        <h2>Yeni Bir İletişim Formu Dolduruldu!</h2>
        <p><strong>Ad Soyad:</strong> ${validatedData.name}</p>
        <p><strong>Şirket:</strong> ${validatedData.company || 'Belirtilmedi'}</p>
        <p><strong>E-Posta:</strong> ${validatedData.email}</p>
        <p><strong>Bütçe:</strong> ${validatedData.budget}</p>
        <br />
        <h3>Proje Detayları:</h3>
        <p>${validatedData.message.replace(/\n/g, '<br />')}</p>
      `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: 'Mail gönderilirken bir hata oluştu.' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
        }
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
    }
}
