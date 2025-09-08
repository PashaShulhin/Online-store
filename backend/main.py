from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Product(BaseModel):
    id: str
    title: str
    price: float
    originalPrice: Optional[float] = None
    rating: float
    reviewCount: int
    image: str

@app.get("/api/products", response_model=List[Product])
def get_products():
    return [
        {
            "id": "1",
            "title": "Premium Wireless Headphones with Active Noise Cancellation",
            "price": 199.99,
            "originalPrice": 249.99,
            "rating": 4.5,
            "reviewCount": 1247,
            "image": "/premium-wireless-headphones.png"
        },
        {
            "id": "2",
            "title": "Smart Fitness Watch with Heart Rate Monitor",
            "price": 299.99,
            "originalPrice": None,
            "rating": 4.8,
            "reviewCount": 892,
            "image": "/smart-fitness-watch.png"
        },
        {
            "id": "3",
            "title": "Ergonomic Office Chair with Lumbar Support",
            "price": 449.99,
            "originalPrice": 599.99,
            "rating": 4.3,
            "reviewCount": 567,
            "image": "/ergonomic-office-chair.png"
        },
        {
            "id": "4",
            "title": "Portable Bluetooth Speaker - Waterproof Design",
            "price": 79.99,
            "originalPrice": None,
            "rating": 4.6,
            "reviewCount": 2103,
            "image": "/portable-bluetooth-speaker.png"
        },
        {
            "id": "5",
            "title": "Professional Camera Lens 50mm f/1.8",
            "price": 329.99,
            "originalPrice": None,
            "rating": 4.9,
            "reviewCount": 445,
            "image": "/camera-lens-50mm.jpg"
        },
        {
            "id": "6",
            "title": "Mechanical Gaming Keyboard RGB Backlit",
            "price": 159.99,
            "originalPrice": 199.99,
            "rating": 4.4,
            "reviewCount": 1876,
            "image": "/mechanical-gaming-keyboard.jpg"
        },
        {
            "id": "7",
            "title": "Stainless Steel Water Bottle 32oz",
            "price": 24.99,
            "originalPrice": None,
            "rating": 4.7,
            "reviewCount": 3421,
            "image": "/stainless-steel-bottle.png"
        },
        {
            "id": "8",
            "title": "Wireless Charging Pad Fast Charge Compatible",
            "price": 39.99,
            "originalPrice": None,
            "rating": 4.2,
            "reviewCount": 987,
            "image": "/wireless-charging-pad.png"
        }
    ]
