"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="relative inline-block w-24 h-24 mb-6 overflow-hidden bg-gray-100 rounded-full">
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-gray-700">SU</div>
      </div>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Sanket Upreti</h1>

      <div className="h-8 mt-4">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">
          {typedText}
          <span className="animate-blink">|</span>
        </h2>
      </div>

      <p className="max-w-md mt-6 text-gray-600">
        Building elegant, performant web applications with JavaScript, React, and Node.js.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <Link href="/projects">
          <Button className="gap-2">
            View Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link href="/notes">
          <Button variant="outline" className="gap-2">
            Read Notes <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
