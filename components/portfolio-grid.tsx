"use client"

import { useState } from "react"
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

interface PortfolioGridProps {
  items: PortfolioItem[]
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))]
  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-slate-900" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
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
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={`/portfolio/${item.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
