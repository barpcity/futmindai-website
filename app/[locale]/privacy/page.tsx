import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Futmind",
  description: "Futmind Privacy Policy - How we collect, use, and protect your data",
};

export default function PrivacyPolicy() {
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
          <Link href="/tos" style={{ color: "#a0a0a0", textDecoration: "none", fontSize: "0.9rem" }}>
            Terms of Service
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
          Privacy Policy
        </h1>
        <p style={{ color: "#888", marginBottom: "2.5rem", fontSize: "0.9rem" }}>
          Last updated: February 22, 2026
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            1. Introduction
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            Futmind (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website futmind.ai and our services.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            2. Information We Collect
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0", marginBottom: "1rem" }}>
            We may collect the following types of information:
          </p>
          <ul style={{ lineHeight: 1.7, color: "#c0c0c0", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Personal Information:</strong> Name, email address, phone number, and other contact details you provide.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Account Data:</strong> Username, password, and account preferences.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Usage Data:</strong> Information about how you interact with our services, including pages visited, features used, and time spent.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Social Media Data:</strong> When you connect third-party social media accounts (such as TikTok, Instagram, or YouTube), we may access certain information from those platforms as authorized by you.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            3. How We Use Your Information
          </h2>
          <ul style={{ lineHeight: 1.7, color: "#c0c0c0", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>To provide, maintain, and improve our services</li>
            <li style={{ marginBottom: "0.5rem" }}>To process transactions and send related information</li>
            <li style={{ marginBottom: "0.5rem" }}>To send technical notices, updates, and support messages</li>
            <li style={{ marginBottom: "0.5rem" }}>To respond to your comments, questions, and requests</li>
            <li style={{ marginBottom: "0.5rem" }}>To monitor and analyze trends, usage, and activities</li>
            <li style={{ marginBottom: "0.5rem" }}>To detect, investigate, and prevent fraudulent transactions and abuse</li>
            <li style={{ marginBottom: "0.5rem" }}>To personalize and improve your experience</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            4. Third-Party Services and Social Media Integrations
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            Our services may integrate with third-party platforms including TikTok, Instagram, YouTube, and other social media services. When you authorize these integrations, we access only the data necessary to provide our services. We handle all third-party data in accordance with the respective platform&apos;s data policies and guidelines. You can revoke access to any third-party integration at any time through your account settings.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            5. Data Sharing and Disclosure
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0", marginBottom: "1rem" }}>
            We do not sell your personal information. We may share your data only in the following circumstances:
          </p>
          <ul style={{ lineHeight: 1.7, color: "#c0c0c0", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>With service providers who assist in operating our services</li>
            <li style={{ marginBottom: "0.5rem" }}>When required by law or to respond to legal process</li>
            <li style={{ marginBottom: "0.5rem" }}>To protect the rights, property, or safety of Futmind, our users, or the public</li>
            <li style={{ marginBottom: "0.5rem" }}>In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            6. Data Security
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            7. Data Retention
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            8. Your Rights
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0", marginBottom: "1rem" }}>
            Under applicable data protection laws (including KVKK - Turkish Personal Data Protection Law), you have the right to:
          </p>
          <ul style={{ lineHeight: 1.7, color: "#c0c0c0", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Access and receive a copy of your personal data</li>
            <li style={{ marginBottom: "0.5rem" }}>Request correction of inaccurate data</li>
            <li style={{ marginBottom: "0.5rem" }}>Request deletion of your personal data</li>
            <li style={{ marginBottom: "0.5rem" }}>Object to or restrict processing of your data</li>
            <li style={{ marginBottom: "0.5rem" }}>Data portability</li>
            <li style={{ marginBottom: "0.5rem" }}>Withdraw consent at any time</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            9. Cookies and Tracking
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You can manage cookie preferences through your browser settings. Essential cookies required for service functionality cannot be disabled.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            10. Children&apos;s Privacy
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child, we will take steps to delete such information promptly.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            11. Changes to This Policy
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
            12. Contact Us
          </h2>
          <p style={{ lineHeight: 1.7, color: "#c0c0c0" }}>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
            This Privacy Policy is governed by the laws of the Republic of Turkey, including the Personal Data Protection Law No. 6698 (KVKK). For any disputes, the courts of Istanbul, Turkey shall have exclusive jurisdiction.
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
