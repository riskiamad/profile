import { Calendar, ArrowRight } from "lucide-react"

interface BlogPost {
  title: string
  description: string
  pubDate: string
  link: string
  category?: string
}

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
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
        </div>
      </div>
    </section>
  )
}
