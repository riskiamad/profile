import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  description: string
  pubDate: string
  link: string
  category?: string
}

interface BlogPreviewProps {
  posts: BlogPost[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sharing knowledge about software development, architecture patterns, and industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.slice(0, 6).map((post, index) => (
              <article
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.description}</p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-900 hover:text-slate-600 transition-colors text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button size="lg" variant="outline">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
