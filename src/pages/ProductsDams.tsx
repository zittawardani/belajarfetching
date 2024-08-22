// src/pages/Home.tsx
import React from 'react';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

type Product = {
  title: string;
  description: string;
  images: string;
}

const ProductsDams: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data dari DummyJSON
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-center text-gray-800 font-bold mb-6">Data Product Dams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsDams;
