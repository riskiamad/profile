import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PortfolioItem {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  category: string
  featured: boolean
  demoUrl?: string
  githubUrl?: string
  duration: string
  teamSize: string
  role: string
  challenges: string[]
  solutions: string[]
}

interface PortfolioDetailProps {
  item: PortfolioItem
}

export default function PortfolioDetail({ item }: PortfolioDetailProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="mb-8">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">{item.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">{item.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{item.longDescription}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {item.demoUrl && (
                <Button asChild>
                  <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {item.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src={item.image || "/xlsmart-logo.png"}
                alt={item.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.longDescription}</p>
                </div>

                {/* Challenges */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Challenges</h2>
                  <ul className="space-y-3">
                    {item.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Solutions</h2>
                  <ul className="space-y-3">
                    {item.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Images */}
                {item.images && item.images.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Gallery</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {item.images.map((image, index) => (
                        <div key={index} className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                          <Image
                            src={image || "/xlsmart-logo.png"}
                            alt={`${item.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Project Info */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-slate-500 mr-3" />
                      <div>
                        <span className="text-sm text-slate-500">Duration</span>
                        <p className="text-slate-900">{item.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-slate-500 mr-3" />
                      <div>
                        <span className="text-sm text-slate-500">Team Size</span>
                        <p className="text-slate-900">{item.teamSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-4 w-4 text-slate-500 mr-3" />
                      <div>
                        <span className="text-sm text-slate-500">My Role</span>
                        <p className="text-slate-900">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
