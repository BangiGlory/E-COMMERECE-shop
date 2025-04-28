
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Purple Dream Hoodie',
    description: 'A super comfortable hoodie in our signature purple color. Made from 100% organic cotton.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'clothing'
  },
  {
    id: '2',
    name: 'Minimalist Desk Lamp',
    description: 'A sleek, adjustable desk lamp with touch controls and multiple light settings.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'home'
  },
  {
    id: '3',
    name: 'Wireless Earbuds',
    description: 'Premium sound quality with active noise cancellation and 30 hours of battery life.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1606741965090-dea286e6f4bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics'
  },
  {
    id: '4',
    name: 'Leather Weekend Bag',
    description: 'Handcrafted from premium leather, perfect for short trips or gym sessions.',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'accessories'
  },
  {
    id: '5',
    name: 'Smart Water Bottle',
    description: 'Tracks your hydration and reminds you when to drink with subtle glowing lights.',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1612442443577-d7da05fa59a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'health'
  },
  {
    id: '6',
    name: 'Ceramic Plant Pot',
    description: 'Handmade ceramic pot with drainage hole, perfect for indoor plants.',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'home'
  },
  {
    id: '7',
    name: 'Bamboo Cutting Board',
    description: 'Sustainable bamboo cutting board with juice groove and non-slip feet.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'kitchen'
  },
  {
    id: '8',
    name: 'Eco-Friendly Notebook',
    description: 'Made from recycled paper with a linen cover and elastic closure.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'stationery'
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'home', name: 'Home Decor' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'health', name: 'Health & Wellness' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'stationery', name: 'Stationery' },
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};
