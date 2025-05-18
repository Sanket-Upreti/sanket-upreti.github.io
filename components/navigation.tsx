"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Sanket Upreti Logo" width={32} height={32} />
          <span className="text-lg font-semibold">Sanket Upreti</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/") ? "text-black font-medium" : "text-gray-600 hover:text-black"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`transition-colors ${
                  isActive("/projects") || pathname.startsWith("/projects/")
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/notes"
                className={`transition-colors ${
                  isActive("/notes") || pathname.startsWith("/notes/")
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Notes
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col py-4 border-t">
            <li>
              <Link
                href="/"
                className={`block px-4 py-2 ${isActive("/") ? "bg-gray-100 font-medium" : "hover:bg-gray-50"}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block px-4 py-2 ${
                  isActive("/projects") || pathname.startsWith("/projects/")
                    ? "bg-gray-100 font-medium"
                    : "hover:bg-gray-50"
                }`}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/notes"
                className={`block px-4 py-2 ${
                  isActive("/notes") || pathname.startsWith("/notes/") ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                }`}
                onClick={toggleMenu}
              >
                Notes
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
