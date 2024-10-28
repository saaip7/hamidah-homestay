'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from './button'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2 font-[`Geist`]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="#" className="flex items-center justify-center mr-4">
              <div className={`hover:scale-110 transition-transform duration-300 will-change-transform`}>
                <Image src="/img/Logo2.png" alt="Logo" width={40} height={40} />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <Link href="#galeri" className="text-color-black hover:text-color-red px-3 py-2 rounded-md text-sm font-medium">
                Galeri
              </Link>
              <Link href="#fasilitas" className="text-color-black hover:text-color-red px-3 py-2 rounded-md text-sm font-medium">
                Fasilitas
              </Link>
              <Link href="#lokasi" className="text-color-black hover:text-color-red px-3 py-2 rounded-md text-sm font-medium">
                Lokasi
              </Link>
              <Link href="#review" className="text-color-black hover:text-color-red px-3 py-2 rounded-md text-sm font-medium">
                Review
              </Link>
              <Link href="#peraturan" className="text-color-black hover:text-color-red px-3 py-2 rounded-md text-sm font-medium">
                Peraturan
              </Link>
            </div>
          </div>

          {/* Button - visible only on desktop */}
          <div className="hidden md:flex items-center">
            <a href="https://wa.me/62817379195" target="_blank" rel="noopener noreferrer" >
              <Button variant={`default`} className={`hidden md:flex items-center ml-auto`}>Kontak Kami</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-color-black hover:text-color-red hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-color-red"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <Link href="#galeri" className="text-color-black hover:text-color-red block px-3 py-2 rounded-md text-base font-medium">
            Galeri
          </Link>
          <Link href="#fasilitas" className="text-color-black hover:text-color-red block px-3 py-2 rounded-md text-base font-medium">
            Fasilitas
          </Link>
          <Link href="#lokasi" className="text-color-black hover:text-color-red block px-3 py-2 rounded-md text-base font-medium">
            Lokasi
          </Link>
          <Link href="#review" className="text-color-black hover:text-color-red block px-3 py-2 rounded-md text-base font-medium">
            Review
          </Link>
          <Link href="#peraturan" className="text-color-black hover:text-color-red block px-3 py-2 rounded-md text-base font-medium">
            Peraturan
          </Link>

          {/* Sign Up button added to mobile menu */}
            <div className="w-full text-center py-2">
              <a href="https://wa.me/62817379195" target="_blank" rel="noopener noreferrer" >
            <Button variant={`default`} className={`flex w-full justify-center`}>Kontak Kami</Button>
              </a>
            </div>
        </div>
      </div>
    </nav>
  )
}