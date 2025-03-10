import Image from "next/image"
import { Calendar, Award, Users, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Legacy of Excellence</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Since 1978, Australian Crash Repairs has been setting the standard for luxury vehicle repairs in
                Australia, specializing in BMW and maintaining the highest levels of manufacturer certification.
              </p>
              <Button size="lg">Contact Us</Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XfMQknRr3zp0xwQFTZW8qP1rY08cnT.png"
                alt="BMW M2 at Australian Crash Repairs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Originally established in 1978 by Mario Cavallo, Australian Crash Repairs has been a BMW specialist
                  for the past 40 years and has been instrumental in growing the brand in Australia. Our dedication to
                  excellence and commitment to quality has made us one of the most trusted names in luxury vehicle
                  repairs.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  In the mid 90's, Australian Crash Repairs was appointed as one of a select few Subaru Certified
                  Collision Repairers, expanding our expertise while maintaining our core focus on BMW vehicles. This
                  dual specialization has allowed us to develop unique insights into both European and Japanese
                  engineering excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  All of our staff have extensive experience in all aspects of crash repairs, and constantly keep up
                  with the latest vehicle and equipment technologies, ensuring your pride and joy is in the best hands
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1978-2025</h3>
                <p className="text-muted-foreground">47 years of experience in premium vehicle repairs</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certified Excellence</h3>
                <p className="text-muted-foreground">Official BMW and Subaru certified repairer</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Highly trained technicians with continuous manufacturer training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Latest Technology</h3>
                <p className="text-muted-foreground">State-of-the-art equipment and repair techniques</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Highlight */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Manufacturer-Recognized Expertise</h2>
              <p className="text-lg mb-8">
                We are recognized by both manufacturers, BMW and Subaru as official repairers, which means that all
                staff are continuously training in the latest technologies and vehicle trends. Taking your BMW or Subaru
                to anyone else is a risk! Give yourself the peace of mind knowing your vehicle is being repaired as per
                manufacturer specifications.
              </p>
              <Button size="lg">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

