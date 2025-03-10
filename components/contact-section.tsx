"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
    preferredContact: "email",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const services = [
    { value: "panel-beating", label: "Panel Beating" },
    { value: "spray-painting", label: "Spray Painting" },
    { value: "luxury-repairs", label: "Luxury Vehicle Repairs" },
    { value: "insurance", label: "Insurance Work" },
    { value: "electric-vehicle", label: "Electric Vehicle Repairs" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          vehicle: "",
          service: "",
          message: "",
          preferredContact: "email",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get in touch with our team to schedule a consultation or request a quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-background rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Send className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                <p>Thank you for contacting us. We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(02) 9999 9999"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle Make/Model</Label>
                    <Input
                      id="vehicle"
                      name="vehicle"
                      placeholder="BMW M4"
                      value={formState.vehicle}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select value={formState.service} onValueChange={(value) => handleSelectChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide details about your repair needs..."
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    defaultValue="email"
                    value={formState.preferredContact}
                    onValueChange={(value) => handleSelectChange("preferredContact", value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-muted-foreground">123 Repair Street, Sydney NSW 2000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-muted-foreground">(02) 9999 9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-muted-foreground">info@australiancrashrepairs.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Business Hours</h4>
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {/* Replace with actual Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">Google Maps Embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

