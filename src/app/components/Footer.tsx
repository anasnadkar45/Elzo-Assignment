import Link from "next/link"
import { MapPin, Linkedin } from 'lucide-react'

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contact us", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="bg-[#212529] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <Link href="/" className="block">
              <span className="text-2xl font-bold">ELZ⚡</span>
            </Link>
            
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">
                San Francisco, US / Bengalure, India
              </span>
            </div>
            
            <div className="text-sm text-gray-400">
              © Eduscanner, Inc. All rights reserved
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

