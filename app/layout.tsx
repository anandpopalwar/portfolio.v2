import type { Metadata, Viewport } from "next";
import { Google_Sans_Code, Google_Sans_Flex } from "next/font/google";
import "./globals.css";
// import opengraph from "@/app/opengraph-image.jpeg"

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
  preload: true, // Ensure this is true for core branding fonts
});

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

// Separate Viewport for Next.js 14/15 standards
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Anand Popalwar | Fullstack Developer",
    template: "%s | Anand Popalwar",
  },
  description:
    "Fullstack Developer with 2+ years of experience at Ease My AI, specializing in real-time AI dashboards, WebSockets, and high-performance UI architecture.",
  keywords: [
    "Anand Popalwar",
    "Ease My AI Frontend Developer",
    "Fullstack Developer Navi Mumbai",
    "React AI Dashboard Expert",
    "Next.js Performance Optimization",
    "Enterprise WebSocket Integration",
    "RBAC Architecture",
    "Real-time Monitoring Systems",
  ],
  authors: [{ name: "Anand Popalwar" }],
  creator: "Anand Popalwar",
  openGraph: {
    type: "website",
    locale: "en_US",
    // // Replace with your actual domain
    // url: "https://yourportfolio.com",
    title: "Anand Popalwar | Fullstack Developer Ex easemyai",
    description:
      "Reduced initial bundle load times by 97% and led frontend architecture for AI-integrated enterprise dashboards at ex easemyai.",
    siteName: "Anand Popalwar Portfolio",
    images: [
      {
        // url: "/opengraph-image.png",
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Anand Popalwar Portfolio - Fullstack Developer Ex easemyai",
      },
    ],
  },
  //replace
  alternates: {
    canonical: "https://anandpopalwar.com", // Essential for SEO
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Anand Popalwar | Fullstack Developer",
  //   description:
  //     "Building high-performance, Al-integrated enterprise systems Ex easemyai",
  //   images: ["/opengraph-image.png"],
  // },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${googleSansCode.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anand Popalwar",
              jobTitle: "Fullstack Developer",
              //replace
              url: "https://anandpopalwar.com",
              sameAs: [
                "https://www.linkedin.com/in/anandpopalwar",
                "https://github.com/anandpopalwar",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Ease My AI",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "WebSockets",
                "Real-time AI Dashboards",
                "RBAC Architecture",
                "Enterprise UI Architecture",
              ],
              description:
                "Fullstack Developer with 2+ years of experience specializing in real-time AI dashboards, WebSockets, and high-performance UI architecture.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Anand Popalwar Portfolio",
              //replace
              url: "https://anandpopalwar.com",
              description:
                "Portfolio of Anand Popalwar — Fullstack Developer specializing in real-time AI dashboards and enterprise web architecture.",
              author: {
                "@type": "Person",
                name: "Anand Popalwar",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.google.com/search?q=site:anandpopalwar.com+{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-blue-500 selection:text-neutral-50">
        {children}
      </body>
    </html>
  );
}
