"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/button"
import { Card, CardContent } from "@/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Star } from "lucide-react"

// This would be your reviews data
const reviews = [
  {
    id: 1,
    name: "Thomas",
    avatar: "/avatar/Thomas.webp?height=40&width=40",
    date: "June 2021",
    rating: 5,
    comment: "The space is well-designed, makes it looks spacy and comfortable. The host assistance was great. Will definitely comeback in the future."
  },
  {
    id: 2,
    name: "Ricard",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "March 2021",
    rating: 5,
    comment: "Bersih, aman, nyaman stay 3 hari disini... rekomended"
  },
  {
    id: 3,
    name: "Timotius",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "December 2020",
    rating: 5,
    comment: "its way much better than any other hotels in town. the bed sheets is clean, smells good.the house is very clean with loft style. cozy for me. the amenities is complete the housekeeper is polite and fast respond.they also serve small breakfast. coffee tea sugar in house water dispenser ac all works good nearby cafe within 1KM walk it just all perfectly nice this make my trip. definitely will visit here again. thanks."
  },
  {
    id: 4,
    name: "Zara ",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "August 2020",
    rating: 5,
    comment: "Ibu nya baik banget, rela nelpon nanya keadaan aman gak? Dan lain lain. Terus semuanya dah disiapin, mulai dari air gallon sampai handuk sikat gigi. Nanti semoga bisa nginep di homestay ini bareng temen temen."
  },
  {
    id: 5,
    name: "Mochamad ",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "January 2020",
    rating: 5,
    comment: "Housekeeper: friendly & understanding, very helpful with laundry & local tips. The house is close to the location very quick to respond in case of need. Host: easy to contact, kind & understanding, I have additional guests not charged. Location: in the heart of Sungai Liat, many conveniences from this strategic position. There's a lot to reach by just walking, such as markets, supermarkets, dining, laundry, city parks and the legendary coffee of TungTau. House: very clean and cozy. Small but feels spacious. The second floor can accommodate up to 5 adults. 1st floor so family place, dining, kitchen, living room, TV & bathroom. Great for family with kids and baby. RECOMMENDED. Will stay here again if holiday to Bangka.."
  },
  {
    id: 6,
    name: "Christian ",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "June 2019",
    rating: 5,
    comment: "The house is very spacious , it has a double height family+dining space that connects to the bedroom. Which I find it very nice and thoughtful on creating a bright and delightful space. Will definitely come back for our next Sungailiat Triathlon."
  },
  {
    id: 7,
    name: "Eira ",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "November 2018",
    rating: 5,
    comment: "cute place, big room, strategic location."
  },
  {
    id: 8,
    name: "Eira ",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "November 2018",
    rating: 5,
    comment: "Mendapatkan homestay minimalis yang sangat nyaman. Fasilitas yang disediakan juga sangat baik. Bu Sri dan Bu Yuyun nya sangat responsif terhadap permintaan apapun. Letaknya cukup strategis di belakang Puncak Toserba jadi kalau mau kepasar Sungai Liat juga gak terlalu jauh."
  }
]

export default function ReviewSection() {
  const MAX_COMMENT_LENGTH = 150

  return (
    <section id="review" className="w-full py-12 md:py-16 lg:py-24 bg-color-pink">
      <div className="container max-w-[1280px] max-md:max-w-full mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-8 text-center">
          Apa Kata Mereka?
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border bg-white flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Image
                        src={review.avatar}
                        alt={`${review.name}'s avatar`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover w-10 h-10"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-color-black">{review.name}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-color-gray ml-2">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      {review.comment.length > MAX_COMMENT_LENGTH ? (
                        <>
                          <p className="text-sm text-color-gray">
                            {review.comment.slice(0, MAX_COMMENT_LENGTH)}...
                          </p>
                          <Dialog>
                            <DialogTrigger asChild>
                                <div className="mt-auto">
                                    <Button
                                        variant="link"
                                        className="text-sm p-0 h-auto font-semibold text-pink-600 hover:text-pink-700"
                                    >
                                        Read more
                                    </Button>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <Image
                                    src={review.avatar}
                                    alt={`${review.name}'s avatar`}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                  />
                                  {review.name}
                                </DialogTitle>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                  <span className="text-sm text-color-gray ml-2">
                                    {review.date}
                                  </span>
                                </div>
                              </DialogHeader>
                              <DialogDescription className="text-base text-color-black">
                                {review.comment}
                              </DialogDescription>
                            </DialogContent>
                          </Dialog>
                        </>
                      ) : (
                        <p className="text-sm text-color--gray">{review.comment}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}