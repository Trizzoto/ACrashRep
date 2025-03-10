"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Gallery items with actual images
const galleryItems = [
  {
    id: 1,
    title: "Lamborghini Aventador",
    description: "Premium exotic car repair and maintenance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IkEWUp7txYxw1DB9PnOILVmsMc9Pie.png",
    category: "exotic",
  },
  {
    id: 2,
    title: "BMW M2 Competition",
    description: "BMW M certified repairs and paint work",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XfMQknRr3zp0xwQFTZW8qP1rY08cnT.png",
    category: "luxury",
  },
  {
    id: 3,
    title: "Aluminum Bay Workshop",
    description: "Specialized aluminum repair facility for Tesla and luxury vehicles",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4okrsIxa7C7HIsDwWAs5jVk32IXPps.png",
    category: "workshop",
  },
  {
    id: 4,
    title: "Ferrari and McLaren Service",
    description: "Exotic car lift and specialized repair equipment",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DdhAGC0X1XUkgSBB84eMuQlHVloRba.png",
    category: "exotic",
  },
  {
    id: 5,
    title: "Porsche Repair Process",
    description: "Precision masking and preparation for premium finishes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V1EC34xC8IL6UJDTAwUy3nyo7EH5oF.png",
    category: "luxury",
  },
  {
    id: 6,
    title: "Workshop Overview",
    description: "Our facility handling multiple luxury vehicles simultaneously",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1b8ywzTV1cS04gHxpFzZHX6p9if0Og.png",
    category: "workshop",
  },
]

export default function GallerySection() {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Premium Work</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Browse our portfolio of high-end vehicle repairs and restorations.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              All Projects
            </Button>
            <Button variant={filter === "exotic" ? "default" : "outline"} onClick={() => setFilter("exotic")}>
              Exotic
            </Button>
            <Button variant={filter === "luxury" ? "default" : "outline"} onClick={() => setFilter("luxury")}>
              Luxury
            </Button>
            <Button variant={filter === "workshop" ? "default" : "outline"} onClick={() => setFilter("workshop")}>
              Workshop
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                className="group relative overflow-hidden rounded-xl bg-card shadow-md"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    onClick={() => {
                      setSelectedImage(item)
                      setIsDialogOpen(true)
                    }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white text-white hover:bg-white/20"
                    >
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length > 0 && (
          <div className="mt-12 text-center">
            <Button size="lg">View All Projects</Button>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95">
          {selectedImage && (
            <div className="relative">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="font-bold text-xl">{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 left-4 rounded-full bg-black/50 border-white text-white hover:bg-black/70"
                onClick={() => {
                  const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id)
                  const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
                  setSelectedImage(filteredItems[prevIndex])
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 rounded-full bg-black/50 border-white text-white hover:bg-black/70"
                onClick={() => {
                  const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id)
                  const nextIndex = (currentIndex + 1) % filteredItems.length
                  setSelectedImage(filteredItems[nextIndex])
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

