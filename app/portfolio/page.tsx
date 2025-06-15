import type { Metadata } from "next"
import { getPortfolioItems } from "@/lib/portfolio"
import PortfolioGrid from "@/components/portfolio-grid"

export const metadata: Metadata = {
  title: "Portfolio - Achmad Rizky Syahrani",
  description:
    "Explore my portfolio of software development projects including marketplace platforms, e-commerce solutions, and digital applications.",
}

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems()

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Portfolio</h1>
            <p className="text-xl text-slate-600">
              A comprehensive showcase of my software development projects, from marketplace platforms to enterprise
              solutions.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid items={portfolioItems} />
    </main>
  )
}
