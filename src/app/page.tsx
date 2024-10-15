import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/button";
import Head from "next/head"; 

export default function Home() {
return (
    <div>
      <header className="px-2rem lg:px-[6rem] xl:px-[10rem] py-4 h-[14] flex items-center bg-white">
        <div className="flex items-center">
          <Link href="#" className="flex items-center justify-center mr-4">
            <div className="hover:scale-110 transition-transform duration-300 will-change-transform">
              <Image src="/img/logo2.png" alt="Logo" width={40} height={40} />
            </div>
          </Link>
          <nav className="px-[16px] lg:px-[20px] flex gap-4 sm:gap-6">
            <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#galeri">
              Galeri
            </Link>
            <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#fasilitas">
              Fasilitas
            </Link>
            <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#lokasi">
              Lokasi
            </Link>
            <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#review">
              Review
            </Link>
            <Link className="text-sm font-semibold hover:underline underline-offset-4 text-color-black hover:text-color-red" href="#peraturan">
              Peraturan
            </Link>
          </nav>
        </div>
        <Button variant="default" className="ml-auto">Kontak Kami</Button>
      </header>
      {/* Main Page */}
      <main className="flex-1">
      <section className="relative w-full h-[720px]">
          <Image
            src="/img/hero.JPG?height=1080&width=1920&text=Homestay+Hero+Image"
            alt="Homestay Hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Liburan dimulai dari sini
              </h1>
              <p className="mt-4 max-w-[600px] text-lg sm:text-xl md:text-2xl mx-auto">
                Selamat datang di homestay kami. Nikmati kenyamanan seperti di rumah sendiri.
              </p>
              <div className="mt-6"> 
                <Button variant="default" className="mr-auto">Hubungi Kami</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
);
}
