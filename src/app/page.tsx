"use client"

import Image from "next/image";

import {Button} from "@/components/button";
import {Carousel, CarouselPrevious, CarouselNext, CarouselContent, CarouselItem} from "@/components/carousel";
import CardFasilitas from "@/components/cardFasilitas";
import { Bed, CircleParking , Utensils , Wifi, TvMinimal, ShowerHead, Star   } from 'lucide-react'; 
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/card"; 
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import dynamic from 'next/dynamic';

const BackToTop = dynamic(() => import('@/components/backToTop'), { ssr: false });
const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

export default function Home() {
  useEffect(() => {
		AOS.init({
			duration: 1500,
      once: false
		});
	}, []);


  const galeriCarousel = [
    "/galeri/1.JPG",
    "/galeri/2.JPG",
    "/galeri/3.JPG",
    "/galeri/4.JPG",
    "/galeri/5.JPG",
  ];

  const facilities = [
    { icon: <Bed className="w-10 h-10 "/>, title: "2 Kamar Tidur" },
    { icon: <Wifi className="w-10 h-10 " />, title: "Wi-Fi" },
    { icon: <Utensils className="w-10 h-10 " />, title: "Dapur & Ruang Makan" },
    { icon: <TvMinimal  className="w-10 h-10 "/>, title: "Ruang Tamu" },
    { icon: <CircleParking className="w-10 h-10 " />, title: "Lahan Parkir" },
    { icon: <ShowerHead className="w-10 h-10"/>, title: "Kamar Mandi" }
  ];

return (
    <div className="relative overflow-hidden">
      <main className="flex-1 w-100%">
      <section className="relative w-full h-[640px] md:h-[900px]">
          <Image 
            src="/img/hero.JPG?height=1080&width=1920&text=Homestay+Hero+Image" 
            fill 
            style={{ objectFit: 'cover' }} 
            alt="Homestay Hero Image" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white font-['Geist'] md:block px-6">
              <div data-aos="fade-down" className="aos-init aos-animate">
                <h1 className="text-xl md:text-3xl font-semibold mb-0 md:mb-2 font-['Geist']">
                    Hamidah Homestay
                  </h1>
                  <h2 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-medium">
                    Liburan Dimulai Dari Sini
                  </h2>
                  <p className="mt-2 max-w-[500px] text-sm sm:text-lg md:text-xl mx-auto">
                    Semua yang Anda butuhkan untuk liburan yang sempurna ada di sini.
                  </p>              
                  <div className="mt-6">
                  <a href="https://wa.me/62817379195" target="_blank" rel="noopener noreferrer" >
                    <Button variant="default" className="mr-auto hover:scale-[102%] transition-all duration-700 ease-in-out">Hubungi Kami</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeri */}
        <section id="galeri" className="w-[100%] py-10 md:py-16 lg:py-24 bg-white">
          <div className="container px-4 md:px-6 text-color-black font-['Geist'] justify-center items-center flex mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl ">
                Gallery Homestay
              </h2>
              <p className="text-center mt-2 text-color-gray">
                Jelajahi setiap sudut homestay kami melalui galeri foto
              </p>
              <Carousel data-aos="fade-up" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto mt-8 aos-init aos-animate">
                <CarouselContent>
                  {galeriCarousel.map((imageSrc, index) => (
                    <CarouselItem key={index} className="h-[450px]"> 
                      <Image
                      src={imageSrc}
                      alt={`Homestay Image ${index + 1}`}
                      width={1000}   
                      height={600}   
                      className="rounded-3xl object-cover w-full h-full" 
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

        {/* Fasilitas */}
        <section id= "fasilitas" className="flex overflow-hidden flex-col justify-center items-center px-16 py-24 bg-color-pink max-md:px-5 font-['Geist']">
          <div className="w-full max-w-[1091px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div data-aos="fade-right" className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full aos-init aos-animate">
                <div className="flex flex-col mt-3.5 max-md:mt-10">
                  <h2 className="self-start text-3xl md:text-4xl font-bold text-color-black">
                    Dilengkapi dengan fasilitas terbaik
                  </h2>
                  <p className="mt-2 text-base leading-6 text-color-gray">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                  </p>
                </div>
              </div>
              <div data-aos="fade-left" className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full aos-init aos-animate">
                <div className="flex flex-wrap grow gap-6 justify-between items-start max-md:mt-10">
                  {facilities.map((facility, index) => (
                    <CardFasilitas key={index} icon={facility.icon} title={facility.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lokasi */}
        <section id="lokasi" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="w-full max-w-[1091px] max-md:max-w-full mx-auto font-['Geist'] ">
            <div className="flex gap-5 max-md:flex-col px-4 md:px-8">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl text-color-black">
                  Lokasi Kami
                </h2>
                <div className="mt-2">
                  <h3 className="text-xl font-medium text-color-red">Hamidah Homestay Sungailiat</h3>
                  <p className="text-color-gray mt-0.5">
                    Sungailiat, Sungai Liat, Bangka Regency, Bangka Belitung Islands 33211, Indonesia
                  </p>
                </div>
                <a href="https://maps.app.goo.gl/KBrZEsX84y8dJre79" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="mr-auto mt-4 hover:scale-[102%] transition-all duration-700 ease-in-out">
                    Lihat Lokasi
                  </Button>
                </a>
              </div>
              <div data-aos="fade-right" className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full height-[1000px] aos-init aos-animate">
                <div className="rounded-xl overflow-hidden">
                <Map
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Review */}
        <section id="review" className="w-full py-12 md:py-20 lg:py-28 bg-color-pink font-['Geist']">
          <div className="container max-w-[1280px] max-md:max-w-full mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-8 text-center text-color-black">Apa kata mereka</h2>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6 aos-init aos-animate">
              {[
                {
                  name: "Isabella Chavez",
                  comment: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
                  role: "Product Designer",
                  rating: 5
                },
                {
                  name: "Curtis Rhodes",
                  comment: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
                  role: "Front-end Developer",
                  rating: 5
                },
                {
                  name: "Lucas Mann",
                  comment: "Must have tool for all, who want to be Product Designer or Interaction Designer",
                  role: "UX Designer",
                  rating: 4
                }
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-color-black mb-4">{review.comment}</p>
                    <div>
                      <p className="font-semibold text-color-red">{review.name}</p>
                      <p className="text-sm text-color-gray">{review.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Peraturan */}
        <section id="peraturan" className="w-full py-12 md:py-22 lg:py-28 bg-white font-['Geist']">
          <div className="container max-w-[1091px] max-md:max-w-full mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-8 text-center text-color-black">
              Ketentuan dan Peraturan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card data-aos="fade-right" className="aos-init aos-animate">
                <CardHeader>
                  <CardTitle className="text-color-red">Ketentuan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-color-gray">
                    <li>Check-in time: 2:00 PM</li>
                    <li>Check-out time: 11:00 AM</li>
                    <li>No smoking inside the property</li>
                    <li>Pets are not allowed</li>
                    <li>Quiet hours: 10:00 PM - 7:00 AM</li>
                  </ul>
                </CardContent>
              </Card>
              <Card data-aos="fade-left" className="aos-init aos-animate">
                <CardHeader>
                  <CardTitle className="text-color-red">Peraturan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-color-gray">
                    <li>Respect the property and neighbors</li>
                    <li>Keep the homestay clean and tidy</li>
                    <li>Report any damages or issues promptly</li>
                    <li>Do not invite unregistered guests</li>
                    <li>Follow local laws and regulations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full md:h-[8.802vw] py-24 md:aspect-ratio[1920/1080] aspect-ratio[430/226] p-8 flex flex-col justify-center items-center bg-color-pink relative font-['Geist']">
          <div className="w-[fit-content] flex md:flex-row flex-col items-center justify-center mx-auto">
            <h1 data-aos="fade-right"  className="aos-init aos-animate text-[6vw] md:text-3xl text-center font-bold md:mr-[1.5vw] text-color-black">
              Ingin liburan yang pas?
            </h1>
            <a data-aos="fade-left" className="aos-init aos-animate" href="https://wa.me/62817379195" target="_blank" rel="noopener noreferrer" >
              <Button variant="default" className="mr-auto hover:scale-[102%] transition-all duration-700 ease-in-out">
                Hubungi Kami
              </Button>
            </a>
          </div>
        </section>
        
      </main>
    <BackToTop />
    </div>
);
}
