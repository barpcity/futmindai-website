import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Futmind",
  description: "Futmind Terms of Service - AI-Powered Software Solutions",
};

export default function TermsOfService() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        color: "#e0e0e0",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "1.5rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#fff",
            textDecoration: "none",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          Futmind
        </Link>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy" style={{ color: "#a0a0a0", textDecoration: "none", fontSize: "0.9rem" }}>
            Privacy Policy
          </Link>
          <Link href="/" style={{ color: "#a0a0a0", textDecoration: "none", fontSize: "0.9rem" }}>
            Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
            fontFamily: "var(--font-syne), sans-serif",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Terms of Service
        </h1>
        <p style={{ color: "#888", marginBottom: "2.5rem", fontSize: "0.9rem" }}>
          Last updated: February 22, 2026
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            By accessing and using the services provided by Futmind (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including our website at futmind.ai and any related applications, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            2. Description of Services
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            Futmind provides AI-powered software solutions, consulting services, and digital automation tools. Our services include but are not limited to: AI integration consulting, custom software development, social media automation, content generation, and data analytics solutions.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            3. User Accounts and Responsibilities
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. You must be at least 18 years old to use our services.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            4. Intellectual Property
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Futmind and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            5. API Usage and Third-Party Integrations
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            Our services may integrate with third-party platforms including but not limited to TikTok, Instagram, YouTube, and other social media platforms. By using these integrations, you agree to comply with the respective platform&apos;s terms of service and community guidelines. We are not responsible for any changes to third-party APIs or services.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            6. Content and Data Usage
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            You retain ownership of all content you create or upload through our services. By using our services, you grant us a limited license to process, store, and transmit your content as necessary to provide the services. We will not sell or share your content with third parties except as required to deliver our services.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            7. Limitation of Liability
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            Futmind shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid by you for the services during the twelve months preceding the claim.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            8. Termination
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use the services will immediately cease.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            9. Changes to Terms
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after any changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            10. Contact Information
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p style={{ lineHeight: 1.7, color: "#8b5cf6", marginTop: "0.5rem" }}>
            📧 info@futmind.ai
          </p>
        </section>

        <section
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            borderRadius: "12px",
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
          }}
        >
          <p style={{ lineHeight: 1.7, color: "#a0a0a0", fontSize: "0.85rem" }}>
            These Terms of Service are governed by and construed in accordance with the laws of the Republic of Turkey. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Istanbul, Turkey.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
          color: "#666",
          fontSize: "0.85rem",
        }}
      >
        <p>&copy; 2026 Futmind. All rights reserved.</p>
        <div style={{ marginTop: "0.75rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <Link href="/tos" style={{ color: "#888", textDecoration: "none" }}>Terms of Service</Link>
          <Link href="/privacy" style={{ color: "#888", textDecoration: "none" }}>Privacy Policy</Link>
          <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Home</Link>
        </div>
      </footer>
    </div>
  );
}
