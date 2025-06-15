import type { Metadata } from "next"
import { getAllPosts } from "@/lib/rss"
import BlogGrid from "@/components/blog-grid"

export const metadata: Metadata = {
  title: "Blog - Achmad Rizky Syahrani",
  description: "Read my latest thoughts on software development, architecture patterns, and technology trends.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Blog</h1>
            <p className="text-xl text-slate-600">
              Insights on software development, architecture patterns, and industry best practices.
            </p>
          </div>
        </div>
      </section>

      <BlogGrid posts={posts} />
    </main>
  )
}
