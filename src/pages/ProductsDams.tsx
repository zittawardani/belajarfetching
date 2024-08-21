// src/pages/Home.tsx
import React from 'react';
import Card from '../components/Card';

const ProductsDams: React.FC = () => {
  const cards = [
    {
      title: 'Card Title 1',
      description: 'This is a brief description of the card content.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card Title 2',
      description: 'This is a brief description of the card content.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card Title 3',
      description: 'This is a brief description of the card content.',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-center text-gray-800 font-bold mb-6">Data Product Dams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsDams;
