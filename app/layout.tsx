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

// export const metadata: Metadata = {
//   title: {
//     default: "Anand Popalwar | Fullstack Developer",
//     template: "%s | Anand Popalwar",
//   },
//   description:
//     "Fullstack Developer, specializing in real-time AI dashboards, WebSockets, and high-performance UI architecture.",
//   keywords: [
//     "Anand Popalwar",
//     "Ease My AI Frontend Developer",
//     "Fullstack Developer Navi Mumbai",
//     "React AI Dashboard Expert",
//     "Next.js Performance Optimization",
//     "Enterprise WebSocket Integration",
//     "RBAC Architecture",
//     "Real-time Monitoring Systems",
//   ],
//   authors: [{ name: "Anand Popalwar" }],
//   creator: "Anand Popalwar",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.anandpopalwar.in",
//     title: "Anand Popalwar | Fullstack Developer Portfolio",
//     description:
//       "Fullstack Developer, specializing in real-time AI dashboards, WebSockets, and high-performance UI architecture.",

//     siteName: "Anand Popalwar Portfolio",
//     images: [
//       {
//         url: "/opengraph-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Anand Popalwar | Fullstack Developer Portfolio",
//       },
//     ],
//   },
//   alternates: {
//     canonical: "https://anandpopalwar-portfolio-v2.vercel.app", // Essential for SEO
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Anand Popalwar | Fullstack Developer",
//     description:
//       "Fullstack Developer, specializing in real-time AI dashboards, WebSockets, and high-performance UI architecture.",

//     images: ["/opengraph-image.png"],
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anandpopalwar.in"),
  title: {
    default: "Anand Popalwar | Fullstack Developer",
    template: "%s | Anand Popalwar",
  },

  description:
    "Fullstack Developer specializing in real-time AI dashboards, WebSockets, and high-performance UI systems.",

  keywords: [
    "Anand Popalwar",
    "anand",
    "Anand",
    "popalwar",
    "Popalwar",
    "Fullstack Developer Mumbai",
    "Fullstack Developer Navi Mumbai",
    "React Developer India",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "AI Dashboard Developer",
    "WebSocket Expert",
    "Frontend Performance Optimization",
    "Real-time Systems Engineer",
  ],

  authors: [{ name: "Anand Popalwar" }],
  creator: "Anand Popalwar",

  alternates: {
    canonical: "https://www.anandpopalwar.in",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.anandpopalwar.in",
    siteName: "Anand Popalwar Portfolio",
    title: "Anand Popalwar | Fullstack Developer Portfolio",
    description:
      "Fullstack Developer specializing in real-time AI dashboards, WebSockets, and high-performance UI systems.",

    images: [
      {
        url: "/images/og/linkedin-og.jpg", // ✅ LinkedIn + WhatsApp will use this
        width: 1200,
        height: 630,
        alt: "Anand Popalwar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Popalwar | Fullstack Developer",
    description:
      "Fullstack Developer specializing in real-time AI dashboards, WebSockets, and high-performance UI systems.",

    images: ["/images/og/twitter-og.jpg"], // ✅ Twitter uses this
    creator: "@FakeAnand", // optional but recommended
  },
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
              url: "https://www.anandpopalwar.in",
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
                "Fullstack Developer specializing in real-time AI dashboards, WebSockets, and high-performance UI systems.",
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
              url: "https://www.anandpopalwar.in",
              description:
                "Fullstack Developer specializing in real-time AI dashboards, WebSockets, and high-performance UI systems.",
              author: {
                "@type": "Person",
                name: "Anand Popalwar",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.google.com/search?q=site:anandpopalwar.in+{search_term_string}",
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
