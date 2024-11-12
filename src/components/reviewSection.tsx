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
    name: "Hilmi",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "June 2021",
    rating: 5,
    comment: "The space is well-designed, makes it looks spacy and comfortable. The host assistance was great. Will definitely comeback in the future."
  },
  {
    id: 2,
    name: "Dzaki",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "July 2021",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 3,
    name: "Hilmy",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "August 2021",
    rating: 4,
    comment: "Great experience overall! The place was exactly as described and the host was very responsive. Would recommend to others."
  },
  {
    id: 4,
    name: "Dzaky",
    avatar: "/avatar/user1.jpg?height=40&width=40",
    date: "September 2021",
    rating: 5,
    comment: "Exceptional stay! Everything was perfect from start to finish. The attention to detail was impressive."
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
                        className="rounded-full"
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