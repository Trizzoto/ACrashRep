"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    vehicle: "Ferrari 458 Italia",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Australian Crash Repairs handled the restoration of my Ferrari with exceptional care and precision. The quality of work is outstanding, and they kept me informed throughout the entire process. I wouldn't trust my vehicle with anyone else.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    vehicle: "Tesla Model S Plaid",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "After a significant collision, I was worried about finding a shop that could properly repair my Tesla. Australian Crash Repairs' Tesla certification gave me confidence, and they delivered perfect results. The car looks and performs exactly as it did before the accident.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    vehicle: "BMW M5 Competition",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The team at Australian Crash Repairs are true professionals. They repaired my M5 to factory standards and even coordinated everything with my insurance. The attention to detail is impressive, and the car was returned to me in immaculate condition.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Williams",
    vehicle: "Lamborghini Urus",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "When my Lamborghini needed repair after a minor accident, I was extremely particular about who would work on it. Australian Crash Repairs exceeded my expectations with their expertise and craftsmanship. The repair is flawless.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hear from owners who trust us with their luxury and exotic vehicles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full z-10">
            <Button variant="outline" size="icon" className="rounded-full shadow-lg" onClick={prev}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full z-10">
            <Button variant="outline" size="icon" className="rounded-full shadow-lg" onClick={next}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="overflow-hidden py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-muted rounded-xl p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-background">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-xl italic mb-6">"{testimonials[current].content}"</blockquote>

                  <div>
                    <div className="font-bold text-lg">{testimonials[current].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[current].vehicle}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === current ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

