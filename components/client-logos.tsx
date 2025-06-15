"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ClientLogos() {
  const [isPaused, setIsPaused] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const speedRef = useRef(0.1) // pixels per millisecond
  const clients = [
    { name: "XL Smart", logo: "/xlsmart-logo.png", link: "https://xlsmart.co.id" },
    { name: "Namea Kreasi Teknologi", logo: "/namea.png", link: "https://nameatech.com" },
    { name: "Aladinmall", logo: "/aladinmall.webp", link: "https://misteraladin.com" },
    { name: "Edenfarm", logo: "/edenfarm.png", link: "https://www.instagram.com/edenfarm_id/" },
    { name: "HSI", logo: "/hsi.png", link: "https://home.hsi.id/" },
    { name: "Kodingworks", logo: "/kodingworks.png", link: "https://kodingworks.io/" },
    { name: "Remark", logo: "/remark.png", link: "https://remark.co.id" },
    { name: "Wika Gedung", logo: "/wikagedung.png", link: "https://www.wikagedung.co.id" },
  ]

  const itemWidth = 166 // 150px + 16px margin
  const totalWidth = clients.length * itemWidth

  const animate = (currentTime: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = currentTime
    }

    const deltaTime = currentTime - lastTimeRef.current
    lastTimeRef.current = currentTime

    if (!isPaused) {
      setTranslateX((prev) => {
        const newTranslateX = prev + speedRef.current * deltaTime
        // Reset when we've moved one full set
        return newTranslateX >= totalWidth ? 0 : newTranslateX
      })
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, isPaused])

  const moveLeft = () => {
    setTranslateX((prev) => {
      const newTranslateX = prev - itemWidth
      return newTranslateX < 0 ? totalWidth - itemWidth : newTranslateX
    })
  }

  const moveRight = () => {
    setTranslateX((prev) => {
      const newTranslateX = prev + itemWidth
      return newTranslateX >= totalWidth ? 0 : newTranslateX
    })
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Trusted by Companies</h2>
          <p className="text-lg text-slate-600 mb-16 text-center max-w-2xl mx-auto">
            I&#39;ve had the privilege to work with amazing companies and help them build exceptional digital solutions.
          </p>

          <div className="relative overflow-hidden group">
            {/* Left Arrow */}
            <button
              onClick={moveLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous clients"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={moveRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next clients"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>

            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${translateX}px)` }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-2 flex items-center justify-center"
                  style={{ minWidth: "150px" }}
                >
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative group">
                      <Link href={client.link? client.link : "#"} target="_blank">
                        <Image
                          src={client.logo || "/xlsmart-logo.png"}
                          alt={client.name}
                          className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                          width={180}
                          height={90}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
