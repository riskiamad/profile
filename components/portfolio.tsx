import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  featured: boolean
}

interface PortfolioProps {
  items: PortfolioItem[]
}

export default function Portfolio({ items }: PortfolioProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Portfolio</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in building scalable digital solutions across various
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-slate-100 relative">
                  <Image src={item.image || "/xlsmart-logo.png"} alt={item.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{item.category}</span>
                    {item.featured && (
                      <span className="text-xs bg-slate-900 text-white px-2 py-1 rounded">Featured</span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="text-xs text-slate-400">+{item.technologies.length - 3} more</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/portfolio/${item.id}`}>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
