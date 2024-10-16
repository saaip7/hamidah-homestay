import Image from "next/image";
import Link from "next/link";

import {Button} from "@/components/button";
import {Carousel, CarouselApi, CarouselPrevious, CarouselNext, CarouselContent, CarouselItem} from "@/components/carousel";

export default function Home() {

  const galeriCarousel = [
    "/galeri/1.JPG",
    "/galeri/2.JPG",
    "/galeri/3.JPG",
    "/galeri/4.JPG",
    "/galeri/5.JPG",
  ];

return (
    <div>
      <header className="px-2rem lg:px-[6rem] xl:px-[10rem] py-4 h-[14] flex items-center bg-white">
        <div className="flex items-center font-['Geist']">
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
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white font-['Geist']">
              <h1 className="text-3xl font-semibold mb-2 font-['Geist']">
                Hamidah Homestay
              </h1>
              <h2 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-medium">
                Liburan Dimulai Dari Sini
              </h2>
              <p className="mt-2 max-w-[500px] text-sm sm:text-lg md:text-xl mx-auto">
                Semua yang Anda butuhkan untuk liburan yang sempurna ada di sini.
              </p>              
              <div className="mt-6"> 
                <Button variant="default" className="mr-auto">Hubungi Kami</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="galeri" className="w-full py-10 md:py-16 lg:py-24 bg-white">
          <div className="container px-4 md:px-6 text-color-black font-['Geist'] justify-center items-center flex mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl ">
                Gallery Homestay
              </h2>
              <p className="text-center mt-2 text-color-gray">
                Jelajahi setiap sudut homestay kami melalui galeri foto
              </p>
              <Carousel className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto mt-8">
                <CarouselContent>
                  {galeriCarousel.map((imageSrc, index) => (
                    <CarouselItem key={index} className="h-[450px]"> 
                      <Image
                        src={imageSrc}
                        alt={`Homestay Image ${index + 1}`}
                        width={1000}   
                        height={600}   
                        className="rounded-lg object-cover w-full h-full" 
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      </main>
    </div>
);
}
