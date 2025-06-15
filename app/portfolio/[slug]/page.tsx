import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPortfolioItem, getPortfolioItems } from "@/lib/portfolio"
import PortfolioDetail from "@/components/portfolio-detail"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const items = await getPortfolioItems()
  return items.map((item) => ({
    slug: item.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = await getPortfolioItem(slug)

  if (!item) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${item.title} - Portfolio`,
    description: item.description,
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const item = await getPortfolioItem(slug)

  if (!item) {
    notFound()
  }

  return <PortfolioDetail item={item} />
}
