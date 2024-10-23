import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'Premium cotton classic fit t-shirt perfect for everyday wear.',
    category: 'men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
  },
  {
    id: '2',
    name: 'Floral Summer Dress',
    price: 79.99,
    description: 'Light and breezy floral dress perfect for summer days.',
    category: 'women',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Blue', 'Pink', 'Yellow'],
  },
  {
    id: '3',
    name: 'Kids Denim Jacket',
    price: 49.99,
    description: 'Stylish and durable denim jacket for kids.',
    category: 'kids',
    image: 'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519278404-f96544a476c4?auto=format&fit=crop&q=80',
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y'],
    colors: ['Blue', 'Light Blue'],
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    price: 129.99,
    description: 'Elegant leather crossbody bag with adjustable strap.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80',
    ],
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Tan'],
  },
];