import bcrypt from 'bcryptjs'
import { Product } from "./models/productModel"
import { User } from "./models/userModel"

export const sampleProducts: Product[] = [
    {
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '../images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
      images: ['../images/p1.jpg'], // Add images array
    isFeatured: false, 
    },
    {
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
     image: '../images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
      images: ['../images/p2.jpg'], // Add images array
    isFeatured: false, // Add isFea
    },
    {
      name: 'Lacoste Free Pants',
      slug: 'lacoste-free-pants',
      category: 'Pants',
     image: '../images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
      images: ['../images/p3.jpg'], // Add images array
    isFeatured: false, // Add isFea
    },
    {
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '../images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
      images: ['../images/p4.jpg'], // Add images array
    isFeatured: false, // Add isFea
    },
  ]
  
  export const sampleUsers: User[] = [
    {
      name: 'Joe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]