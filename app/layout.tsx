import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: 'favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  title: {
    default: "Achmad Rizky Syahrani - Software Engineer & Web Developer",
    template: "%s | Achmad Rizky Syahrani",
  },
  description:
    "Experienced Software Engineer specializing in digital solutions, third-party integrations, and software architecture. Expert in Go, PHP, Node.js, Laravel, Next.js, and cloud technologies.",
  keywords:
    "Software Engineer, Web Developer, Digital Solutions, Third Party Integration, Software Architecture, Go, PHP, Node.js, Laravel, Next.js, AWS",
  authors: [{ name: "Achmad Rizky Syahrani" }],
  creator: "Achmad Rizky Syahrani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rizkyachmadsyah.com",
    title: "Achmad Rizky Syahrani - Software Engineer & Web Developer",
    description:
      "Experienced Software Engineer specializing in digital solutions, third-party integrations, and software architecture.",
    siteName: "Achmad Rizky Syahrani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Rizky Syahrani - Software Engineer & Web Developer",
    description:
      "Experienced Software Engineer specializing in digital solutions, third-party integrations, and software architecture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Header />
    {children}
    <Footer />
    </body>
    </html>
  )
}
