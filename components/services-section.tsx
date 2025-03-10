"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Car, Paintbrush, Wrench, ShieldCheck, Zap } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    id: "panel-beating",
    title: "Panel Beating",
    description: "Expert panel beating to restore your vehicle's structural integrity and appearance.",
    icon: <Wrench className="h-6 w-6" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V1EC34xC8IL6UJDTAwUy3nyo7EH5oF.png",
    details:
      "Our skilled technicians use specialized tools and techniques to repair damaged panels, ensuring perfect alignment and finish. We work with all types of materials including aluminum, carbon fiber, and high-strength steel used in BMW and other luxury vehicles.",
  },
  {
    id: "spray-painting",
    title: "Spray Painting",
    description: "Premium paint matching and application for a flawless factory finish.",
    icon: <Paintbrush className="h-6 w-6" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XfMQknRr3zp0xwQFTZW8qP1rY08cnT.png",
    details:
      "Using computerized color matching technology and premium paints, we achieve perfect color matches for your vehicle. Our climate-controlled spray booths ensure dust-free application and proper curing for a lasting finish, essential for BMW's premium finishes.",
  },
  {
    id: "luxury-repairs",
    title: "BMW & Luxury Vehicle Repairs",
    description: "Specialized repairs for BMW M and other high-end vehicles.",
    icon: <Car className="h-6 w-6" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XfMQknRr3zp0xwQFTZW8qP1rY08cnT.png",
    details:
      "As a BMW certified repairer, along with accreditations from Tesla, Lamborghini, Subaru, Genesis, MINI, and Alfa Romeo, we have the expertise and equipment to repair luxury vehicles according to strict factory specifications, preserving their value and performance.",
  },
  {
    id: "insurance-work",
    title: "Insurance Work",
    description: "Seamless insurance claim processing and repairs.",
    icon: <ShieldCheck className="h-6 w-6" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1b8ywzTV1cS04gHxpFzZHX6p9if0Og.png",
    details:
      "We work directly with all major insurance companies to streamline the repair process. Our team handles the paperwork and negotiations, ensuring you receive the highest quality repairs covered by your policy.",
  },
  {
    id: "electric-vehicle",
    title: "Electric Vehicle Repairs",
    description: "Certified repairs for BMW i, Tesla and other electric vehicles.",
    icon: <Zap className="h-6 w-6" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4okrsIxa7C7HIsDwWAs5jVk32IXPps.png",
    details:
      "With certifications for both BMW i and Tesla vehicles, we have specialized training and equipment to safely repair electric vehicles, including high-voltage systems, battery packs, and aluminum structures.",
  },
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We offer a comprehensive range of repair services tailored specifically for luxury and high-performance
            vehicles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {services.map((service) => (
              <Card
                key={service.id}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  activeService.id === service.id ? "border-primary" : "",
                )}
                onClick={() => setActiveService(service)}
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div
                    className={cn(
                      "p-2 rounded-full",
                      activeService.id === service.id ? "bg-primary text-primary-foreground" : "bg-accent",
                    )}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-accent rounded-xl overflow-hidden h-full"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={activeService.image || "/placeholder.svg"}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{activeService.details}</p>
                  <Button>Learn More</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

