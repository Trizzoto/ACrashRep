"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const accreditations = [
  {
    id: "bmw",
    name: "BMW",
    logo: "/bmw-logo.svg",
    description: "Official BMW Certified Collision Repair Center",
  },
  {
    id: "tesla",
    name: "Tesla",
    logo: "/tesla-logo.svg",
    description: "Tesla Approved Body Shop",
  },
  {
    id: "lamborghini",
    name: "Lamborghini",
    logo: "/lamborghini-logo.svg",
    description: "Authorized Lamborghini Collision Facility",
  },
  {
    id: "subaru",
    name: "Subaru",
    logo: "/subaru-logo.svg",
    description: "Subaru Certified Collision Center",
  },
  {
    id: "genesis",
    name: "Genesis",
    logo: "/genesis-logo.svg",
    description: "Genesis Authorized Repair Facility",
  },
  {
    id: "mini",
    name: "MINI",
    logo: "/mini-logo.svg",
    description: "MINI Certified Collision Repair Shop",
  },
  {
    id: "raa",
    name: "RAA",
    logo: "/raa-logo.svg",
    description: "RAA Approved Repairer",
  },
  {
    id: "alfa",
    name: "Alfa Romeo",
    logo: "/alfa-logo.svg",
    description: "Alfa Romeo Authorized Service Center",
  },
]

export default function AccreditationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Accreditations</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We're proud to be officially recognized by leading luxury and exotic car manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-card p-6 rounded-xl"
            >
              <div className="relative h-16 w-16 mb-4">
                <div className="h-16 w-16 flex items-center justify-center text-primary font-bold text-xl">
                  {accreditation.name.charAt(0)}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">{accreditation.name}</h3>
              <p className="text-sm text-muted-foreground">{accreditation.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-accent rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Manufacturer-Approved Repairs</h3>
              <p className="text-muted-foreground mb-4">
                Our accreditations mean we meet the strict standards set by luxury vehicle manufacturers. We use genuine
                parts, follow factory repair procedures, and employ specialized equipment to ensure your vehicle is
                restored to its original specifications.
              </p>
              <p className="text-muted-foreground">
                This preserves your vehicle's warranty, safety systems, and resale value while maintaining its
                performance characteristics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-sm">Years of Experience</p>
              </div>
              <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-primary mb-2">3000+</div>
                <p className="text-sm">Luxury Vehicles Repaired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

