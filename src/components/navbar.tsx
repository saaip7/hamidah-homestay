'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return(
    //Old Navbar
    //     <header className="px-2rem lg:px-[6rem] xl:px-[10rem] py-4 h-[14] flex items-center bg-white justify-between">
    //     <div className="flex items-center font-['Geist']">
    //       <Link href="#" className="flex items-center justify-center mr-4">
    //         <div className="hover:scale-110 transition-transform duration-300 will-change-transform">
    //           <Image src="/img/Logo2.png" alt="Logo" width={40} height={40} />
    //         </div>
    //       </Link>
    //       <nav className="px-[16px] lg:px-[20px] flex gap-4 sm:gap-6">
    //         <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#galeri">
    //           Galeri
    //         </Link>
    //         <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#fasilitas">
    //           Fasilitas
    //         </Link>
    //         <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#lokasi">
    //           Lokasi
    //         </Link>
    //         <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#review">
    //           Review
    //         </Link>
    //         <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#peraturan">
    //           Peraturan
    //         </Link>
    //       </nav>
    //     </div>
    //     <a href="https://wa.me/62817379195" target="_blank" rel="noopener noreferrer" >
    //       <Button variant="default" className="ml-auto">Kontak Kami</Button>
    //     </a>
    //   </header>
      
        // New Navbar
        <header className={`fixed top-0 left-0 right-0 z-50 x-2rem lg:px-[6rem] xl:px-[10rem] py-4 h-[14] flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white shadow-md bg-opacity-90' : 'bg-transparent'}`}>
        <div className="flex items-center font-['Geist']">
          <Link href="#" className="flex items-center justify-center mr-4">
            <div className={`hover:scale-110 transition-transform duration-300 will-change-transform ${isScrolled ? '' : 'filter invert'}`}>
              <Image src="/img/Logo2.png" alt="Logo" width={40} height={40} />
            </div>
          </Link>
          <nav className="px-[16px] lg:px-[20px] flex gap-4 sm:gap-6">
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
        <a href="https://wa.me/62817379195" target="_blank" rel="noopener noreferrer" >
          <Button variant={`${isScrolled ? 'default' : 'outline'}`} className={`ml-auto ${isScrolled ? '' : 'hover:bg-color-red hover:border-color-red'}`}>Kontak Kami</Button>
        </a>
      </header>
    );
};
