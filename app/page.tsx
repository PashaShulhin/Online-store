"use client"

import { useState } from "react"
import { ProductGrid, type Product } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Filter } from "lucide-react"

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Premium Wireless Headphones with Active Noise Cancellation",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 1247,
    image: "/premium-wireless-headphones.png",
  },
  {
    id: "2",
    title: "Smart Fitness Watch with Heart Rate Monitor",
    price: 299.99,
    rating: 4.8,
    reviewCount: 892,
    image: "/smart-fitness-watch.png",
  },
  {
    id: "3",
    title: "Ergonomic Office Chair with Lumbar Support",
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.3,
    reviewCount: 567,
    image: "/ergonomic-office-chair.png",
  },
  {
    id: "4",
    title: "Portable Bluetooth Speaker - Waterproof Design",
    price: 79.99,
    rating: 4.6,
    reviewCount: 2103,
    image: "/portable-bluetooth-speaker.png",
  },
  {
    id: "5",
    title: "Professional Camera Lens 50mm f/1.8",
    price: 329.99,
    rating: 4.9,
    reviewCount: 445,
    image: "/camera-lens-50mm.jpg",
  },
  {
    id: "6",
    title: "Mechanical Gaming Keyboard RGB Backlit",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.4,
    reviewCount: 1876,
    image: "/mechanical-gaming-keyboard.jpg",
  },
  {
    id: "7",
    title: "Stainless Steel Water Bottle 32oz",
    price: 24.99,
    rating: 4.7,
    reviewCount: 3421,
    image: "/stainless-steel-bottle.png",
  },
  {
    id: "8",
    title: "Wireless Charging Pad Fast Charge Compatible",
    price: 39.99,
    rating: 4.2,
    reviewCount: 987,
    image: "/wireless-charging-pad.png",
  },
]

export default function HomePage() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = (productId: string) => {
    setCartCount((prev) => prev + 1)
    console.log(`Added product ${productId} to cart`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-foreground">StoreFront</h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Categories
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Deals
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  New Arrivals
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>

              <Button variant="outline" size="sm" className="relative bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our curated selection of premium products</p>
          </div>

          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <ProductGrid products={mockProducts} onAddToCart={handleAddToCart} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">StoreFront</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted destination for premium products and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 StoreFront. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
