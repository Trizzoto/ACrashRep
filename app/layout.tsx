import type React from "react"
import { Inter } from "next/font/google"
import ClientLayout from "./client"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Australian Crash Repairs - Premium Luxury Vehicle Repairs",
  description:
    "BMW, Tesla, Lamborghini, Subaru, Genesis, MINI, and Alfa Romeo accredited crash repair specialists delivering manufacturer-approved quality for your premium vehicle.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout children={children} />
}



import './globals.css'