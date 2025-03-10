"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu, Phone, ChevronDown, MapPin, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b shadow-sm glass-effect">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container flex h-20 items-center"
              >
                <Link href="/" className="mr-6 flex items-center space-x-4 group">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-32 h-16"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clipart964419-CMK9Bxccrp2JaacecHUJ3jXiCHA8vk.png"
                      alt="BMW Motorsport Logo"
                      fill
                      className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-bold text-xl tracking-tight"
                  >
                    Australian Crash Repairs
                  </motion.span>
                </Link>
                <div className="hidden md:flex md:flex-1">
                  <nav className="flex items-center space-x-6 text-sm font-medium">
                    {["Home", "Services", "Gallery", "About", "Contact"].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                      >
                        {item === "Services" ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 transition-all hover:text-primary">
                              Services <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="animate-in slide-in-from-top-5 premium-card">
                              <DropdownMenuItem asChild>
                                <Link href="/services/panel-beating" className="hover:text-primary">Panel Beating</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href="/services/spray-painting" className="hover:text-primary">Spray Painting</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href="/services/luxury-repairs" className="hover:text-primary">Luxury Vehicle Repairs</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href="/services/electric-vehicle" className="hover:text-primary">Electric Vehicle Repairs</Link>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <Link
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="relative transition-colors hover:text-primary"
                          >
                            {item}
                            <motion.span
                              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.2 }}
                            />
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </nav>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="hidden md:flex items-center gap-4 ml-auto"
                >
                  <div className="flex items-center gap-2 group">
                    <Phone className="h-4 w-4 text-primary transform group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-medium">(02) 9999 9999</span>
                  </div>
                  <button className="bmw-button shine-effect">
                    Request a Quote
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex md:hidden ml-auto"
                >
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative group">
                        <Menu className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-200" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] premium-card">
                      <div className="flex flex-col space-y-6 mt-6">
                        <Link href="/" className="text-lg font-medium hover:text-primary">
                          Home
                        </Link>
                        <div className="space-y-3">
                          <div className="font-medium text-lg">Services</div>
                          <div className="grid gap-2 pl-4">
                            <Link href="/services/panel-beating" className="text-muted-foreground hover:text-primary">
                              Panel Beating
                            </Link>
                            <Link href="/services/spray-painting" className="text-muted-foreground hover:text-primary">
                              Spray Painting
                            </Link>
                            <Link href="/services/luxury-repairs" className="text-muted-foreground hover:text-primary">
                              Luxury Vehicle Repairs
                            </Link>
                            <Link href="/services/electric-vehicle" className="text-muted-foreground hover:text-primary">
                              Electric Vehicle Repairs
                            </Link>
                          </div>
                        </div>
                        <Link href="/gallery" className="text-lg font-medium hover:text-primary">
                          Gallery
                        </Link>
                        <Link href="/about" className="text-lg font-medium hover:text-primary">
                          About
                        </Link>
                        <Link href="/contact" className="text-lg font-medium hover:text-primary">
                          Contact
                        </Link>
                        <div className="border-t pt-4">
                          <div className="flex items-center gap-2 mb-4">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="font-medium">(02) 9999 9999</span>
                          </div>
                          <button className="bmw-button shine-effect w-full">
                            Request a Quote
                          </button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </motion.div>
              </motion.div>
            </header>
            {children}
            <footer className="border-t bg-accent">
              <div className="container py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-8 w-8 rounded-full bmw-gradient flex items-center justify-center">
                        <span className="text-white font-bold text-sm">M</span>
                      </div>
                      <div className="font-bold text-xl">Australian Crash Repairs</div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Premium crash repairs for luxury and exotic vehicles. BMW, Tesla, Lamborghini, Subaru, Genesis,
                      MINI, and Alfa Romeo accredited.
                    </p>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Quick Links</h3>
                    <div className="grid gap-2">
                      {["Home", "Services", "Gallery", "About Us", "Contact"].map((item) => (
                        <Link
                          key={item}
                          href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item}
                      </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Services</h3>
                    <div className="grid gap-2">
                      {[
                        ["Panel Beating", "panel-beating"],
                        ["Spray Painting", "spray-painting"],
                        ["Luxury Vehicle Repairs", "luxury-repairs"],
                        ["Electric Vehicle Repairs", "electric-vehicle"],
                        ["Insurance Work", "insurance"]
                      ].map(([label, slug]) => (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {label}
                      </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Contact Us</h3>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div className="text-muted-foreground">
                          123 Repair Street
                          <br />
                          Sydney NSW 2000
                          <br />
                          Australia
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground group">
                        <Phone className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                        (02) 9999 9999
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                        info@australiancrashrepairs.com.au
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-accent-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Australian Crash Repairs. All rights reserved.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

