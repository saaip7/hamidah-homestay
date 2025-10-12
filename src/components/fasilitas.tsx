"use client"

import CardFasilitas from "./cardFasilitas"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Bed, Wifi, Utensils, Tv, ParkingSquare, ShowerHead } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import Image from "next/image"


const facilities = [
  {
    name: "2 Kamar Tidur",
    icon: <Bed className="w-full h-full" />,
    description: "Comfortable bedrooms with cozy beds and fresh linens.",
    images: [
      "/fasilitas/kamar.jpg?height=200&width=300&text=kamar+tidur",
      "/fasilitas/kamar.jpg?height=200&width=300&text=kamar+tidur",
    ]
  },
  {
    name: "Wi-Fi",
    icon: <Wifi className="w-full h-full" />,
    description: "High-speed internet access throughout the homestay.",
    images: [
      "/fasilitas/wifi.jpg?height=200&width=300&text=Wi-Fi",
      "/fasilitas/wifi.jpg?height=200&width=300&text=Wi-Fi",
    ]
  },
  {
    name: "Dapur & Ruang Makan",
    icon: <Utensils className="w-full h-full" />,
    description: "Fully equipped kitchen and spacious dining area.",
    images: [
      "/fasilitas/dapur.jpg?height=200&width=300&text=Kitchen+and+Dining",
      "/fasilitas/dapur.jpg?height=200&width=300&text=Kitchen+and+Dining",
    ]
  },
  {
    name: "Ruang Tamu",
    icon: <Tv className="w-full h-full" />,
    description: "Comfortable living room with entertainment system.",
    images: [
      "/fasilitas/rtamu.jpg?height=200&width=300&text=Living+Room",
      "/fasilitas/rtamu.jpg?height=200&width=300&text=Living+Room",
    ]
  },
  {
    name: "Lahan Parkir",
    icon: <ParkingSquare className="w-full h-full" />,
    description: "Secure parking area for your vehicles.",
    images: [
      "/fasilitas/parkir.jpg?height=200&width=200&text=Parking",
      "/fasilitas/parkir.jpg?height=200&width=200&text=Parking",
    ]
  },
  {
    name: "Kamar Mandi",
    icon: <ShowerHead className="w-full h-full" />,
    description: "Clean and modern bathroom facilities.",
    images: [
      "/fasilitas/kmandi.jpg?height=200&width=300&text=Bathroom",
      "/fasilitas/kmandi.jpg?height=200&width=300&text=Bathroom",
    ]
  },
]

export default function FacilitiesSection() {
  return (
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
                  {facilities.map((facility) => (
                    <Dialog key={facility.name}>
                      <DialogTrigger asChild>
                        <div>
                          <CardFasilitas icon={facility.icon} title={facility.name} />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-[360px] md:max-w-[560px] lg:max-w-[640px] mx-auto rounded">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-xl">
                            <div className="w-6 h-6 text-pink-600">{facility.icon}</div>
                            {facility.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <Carousel 
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full mx-auto">
                            <CarouselContent>
                              {facility.images.map((image, index) => (
                                <CarouselItem key={index}>
                                  <div className="p-1">
                                    <Image
                                      src={image}
                                      alt={`${facility.name} image ${index + 1}`}
                                      width={300}
                                      height={200}
                                      className="w-full h-auto rounded-lg"
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext />
                          </Carousel>
                          <DialogDescription className="text-base mt-4">
                            {facility.description}
                          </DialogDescription>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}