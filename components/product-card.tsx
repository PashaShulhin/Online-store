"use client"

import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  onAddToCart: (id: string) => void
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  onAddToCart,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-accent text-accent" : "fill-muted text-muted-foreground"}`}
      />
    ))
  }

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {originalPrice && (
          <div className="absolute right-2 top-2 rounded-full bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground">
            Sale
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-medium text-card-foreground leading-tight">{title}</h3>

        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center gap-1">{renderStars(rating)}</div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg font-bold text-card-foreground">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        <Button
          onClick={() => onAddToCart(id)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
