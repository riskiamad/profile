import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Portfolio from "@/components/portfolio"
import ClientLogos from "@/components/client-logos"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import { getLatestPosts } from "@/lib/rss"
import { getPortfolioItems } from "@/lib/portfolio"

export const metadata: Metadata = {
  title: "Achmad Rizky Syahrani - Software Engineer & Web Developer",
  description:
    "Experienced Software Engineer specializing in digital solutions, third-party integrations, and software architecture. Expert in Go, PHP, Node.js, Laravel, Next.js, and cloud technologies.",
  keywords:
    "Software Engineer, Web Developer, Digital Solutions, Third Party Integration, Software Architecture, Go, PHP, Node.js, Laravel, Next.js, AWS",
  authors: [{ name: "Achmad Rizky Syahrani" }],
  openGraph: {
    title: "Achmad Rizky Syahrani - Software Engineer & Web Developer",
    description:
      "Experienced Software Engineer specializing in digital solutions, third-party integrations, and software architecture.",
    url: "https://rizkyachmadsyah.com",
    siteName: "Achmad Rizky Syahrani",
    type: "website",
  },
}

export default async function Home() {
  const blogPosts = await getLatestPosts()
  const portfolioItems = await getPortfolioItems()

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Portfolio items={portfolioItems.slice(0, 6)} />
      <ClientLogos />
      <BlogPreview posts={blogPosts} />
      <Contact />
    </main>
  )
}
