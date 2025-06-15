interface BlogPost {
  title: string
  description: string
  pubDate: string
  link: string
  category?: string
}

// RSS parsing function for Medium feed
async function parseRSSFeed(rssUrl: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; RSS Reader)",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const xmlText = await response.text()

    // Parse XML manually (simple approach for RSS)
    const posts: BlogPost[] = []

    // Extract items using regex (basic XML parsing)
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let itemMatch

    while ((itemMatch = itemRegex.exec(xmlText)) !== null) {
      const itemContent = itemMatch[1]

      // Extract title
      const titleMatch =
        itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || itemContent.match(/<title>(.*?)<\/title>/)
      const title = titleMatch ? titleMatch[1].trim() : "Untitled"

      // Extract description/content
      const descMatch =
        itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) ||
        itemContent.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/) ||
        itemContent.match(/<description>(.*?)<\/description>/)
      let description = descMatch ? descMatch[1] : ""

      // Clean HTML tags from description and limit length
      description =
        description
          .replace(/<[^>]*>/g, "") // Remove HTML tags
          .replace(/&[^;]+;/g, " ") // Remove HTML entities
          .trim()
          .substring(0, 200) + (description.length > 200 ? "..." : "")

      // Extract link
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/) || itemContent.match(/<guid[^>]*>(.*?)<\/guid>/)
      const link = linkMatch ? linkMatch[1].trim() : "#"

      // Extract publication date
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/)
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toISOString()

      // Extract category if available
      const categoryMatch =
        itemContent.match(/<category><!\[CDATA\[(.*?)\]\]><\/category>/) ||
        itemContent.match(/<category>(.*?)<\/category>/)
      const category = categoryMatch ? categoryMatch[1].trim() : undefined

      posts.push({
        title,
        description,
        pubDate,
        link,
        category,
      })
    }

    // Sort by publication date (newest first)
    return posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
  } catch (error) {
    console.error("Error fetching RSS feed:", error)

    // Return fallback data if RSS fails
    return getFallbackPosts()
  }
}

// Fallback posts in case RSS feed fails
function getFallbackPosts(): BlogPost[] {
  return [
    {
      title: "Building Scalable Microservices with Go",
      description:
        "Learn how to design and implement microservices architecture using Go, focusing on performance and maintainability. This comprehensive guide covers best practices, patterns, and real-world examples.",
      pubDate: "2024-01-15T00:00:00Z",
      link: "https://medium.com/@riskiamad/building-scalable-microservices-go",
      category: "Architecture",
    },
    {
      title: "Next.js 14 App Router: Complete Guide",
      description:
        "A comprehensive guide to Next.js 14 App Router, covering routing, data fetching, and performance optimization. Discover the latest features and how to migrate from Pages Router.",
      pubDate: "2024-01-10T00:00:00Z",
      link: "https://medium.com/@riskiamad/nextjs-14-app-router-guide",
      category: "Frontend",
    },
    {
      title: "Payment Gateway Integration Best Practices",
      description:
        "Essential patterns and security considerations when integrating payment gateways in modern applications. Learn about PCI compliance, error handling, and user experience optimization.",
      pubDate: "2024-01-05T00:00:00Z",
      link: "https://medium.com/@riskiamad/payment-gateway-integration",
      category: "Integration",
    },
    {
      title: "AWS Lambda vs Container Services: When to Use What",
      description:
        "Comparing serverless functions and containerized services for different use cases and workloads. Understand the trade-offs, costs, and performance implications of each approach.",
      pubDate: "2023-12-28T00:00:00Z",
      link: "https://medium.com/@riskiamad/aws-lambda-vs-containers",
      category: "Cloud",
    },
    {
      title: "Database Design for E-commerce Platforms",
      description:
        "Key considerations and patterns for designing robust database schemas for e-commerce applications. Cover inventory management, order processing, and performance optimization.",
      pubDate: "2023-12-20T00:00:00Z",
      link: "https://medium.com/@riskiamad/ecommerce-database-design",
      category: "Database",
    },
    {
      title: "API Security: JWT vs Session-based Authentication",
      description:
        "Comparing different authentication strategies and their security implications in modern web applications. Learn when to use each approach and implementation best practices.",
      pubDate: "2023-12-15T00:00:00Z",
      link: "https://medium.com/@riskiamad/api-security-jwt-sessions",
      category: "Security",
    },
  ]
}

export async function getLatestPosts(): Promise<BlogPost[]> {
  const posts = await parseRSSFeed("https://medium.com/feed/@riskiamad")
  return posts.slice(0, 3)
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return await parseRSSFeed("https://medium.com/feed/@riskiamad")
}

// Alternative implementation using a more robust XML parser
// You can uncomment this if you want to use a proper XML parsing library
/*
import { XMLParser } from 'fast-xml-parser'

async function parseRSSFeedWithLibrary(rssUrl: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(rssUrl)
    const xmlText = await response.text()

    const parser = new XMLParser({
      ignoreAttributes: false,
      parseAttributeValue: true,
      trimValues: true,
    })

    const result = parser.parse(xmlText)
    const items = result.rss?.channel?.item || []

    return items.map((item: any) => ({
      title: item.title || 'Untitled',
      description: (item.description || item['content:encoded'] || '')
        .replace(/<[^>]*>/g, '')
        .substring(0, 200) + '...',
      pubDate: item.pubDate || new Date().toISOString(),
      link: item.link || item.guid || '#',
      category: item.category || undefined,
    }))
  } catch (error) {
    console.error('Error parsing RSS feed:', error)
    return getFallbackPosts()
  }
}
*/
