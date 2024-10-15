import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/button";

export default function Home() {
return (
  <>
    <head>
      <title>Hamidah Homestay</title>
      <link rel="icon" href="/logoRed.ico" />
    </head>
    <div>
      <header className="px-2rem lg:px-[6rem] py-4 h-[14] flex items-center bg-white">
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
        <Button variant="default" className="ml-auto">Hubungi Kami</Button>
      </header>
    </div>
  </>
);
}
