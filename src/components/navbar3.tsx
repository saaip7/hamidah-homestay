'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from './button'

export default function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('resize', handleResize)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed flex top-0 left-0 right-0 z-[9999999] px-[1rem] md:px-[4rem] lg:px-[6rem] xl:px-[10rem] py-4 h-[14] items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white shadow-md bg-opacity-90' : 'bg-transparent'}`}>
      <div className="flex items-center font-['Geist'] w-[100%] justify-between ">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="#" className="flex items-center justify-center mr-4">
              <div className={`hover:scale-110 transition-transform duration-300 will-change-transform ${isScrolled ? '' : 'filter invert'}`}>
                <Image src="/img/Logo2.png" alt="Logo" width={40} height={40} />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden px-[16px] lg:px-[20px] md:flex md:space-x-2 gap-4 sm:gap-6">
              <Link className={`text-sm font-medium hover:underline underline-offset-4 ${isScrolled ? 'text-color-black' : 'text-color-white'}`} href="#galeri">
                Galeri
              </Link>
              <Link className={`text-sm font-medium hover:underline underline-offset-4 ${isScrolled ? 'text-color-black' : 'text-color-white'}`} href="#fasilitas">
                Fasilitas
              </Link>
              <Link className={`text-sm font-medium hover:underline underline-offset-4 ${isScrolled ? 'text-color-black' : 'text-color-white'}`} href="#lokasi">
                Lokasi
              </Link>
              <Link className={`text-sm font-medium hover:underline underline-offset-4 ${isScrolled ? 'text-color-black' : 'text-color-white'}`} href="#review">
                Review
              </Link>
              <Link className={`text-sm font-medium hover:underline underline-offset-4 ${isScrolled ? 'text-color-black' : 'text-color-white'}`} href="#peraturan">
                Peraturan
              </Link>
            </nav>
          </div>

          {/* Button */}
          <a href="https://wa.me/62817379195" target="_blank" rel="noopener noreferrer" >
            <Button variant={`${isScrolled ? 'default' : 'outline'}`} className={`hidden md:flex items-center ml-auto ${isScrolled ? '' : 'hover:bg-color-red hover:border-color-red'}`}>Kontak Kami</Button>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-color-white hover:text-color-white hover:bg-color-red"
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

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/services" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Services
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}