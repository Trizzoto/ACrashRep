import Image from "next/image"
import { ChevronRight, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import AccreditationsSection from "@/components/accreditations-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Premium Crash Repairs for Luxury Vehicles</h2>
            <p className="text-muted-foreground text-lg">
              Australian Crash Repairs specializes in high-quality repairs for luxury and exotic vehicles. With
              accreditations from BMW, Tesla, Lamborghini, Subaru, Genesis, MINI, and Alfa Romeo, we provide
              manufacturer-approved repairs that maintain your vehicle's integrity, performance, and value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Book a Consultation <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Our Services <Wrench className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XfMQknRr3zp0xwQFTZW8qP1rY08cnT.png"
              alt="BMW at Australian Crash Repairs"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <ServicesSection />
      <GallerySection />
      <AccreditationsSection />
      <TestimonialsSection />

      <ContactSection />
    </main>
  )
}

