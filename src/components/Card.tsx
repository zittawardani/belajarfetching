import React from 'react';

type CardProps = {
  title: string;
  description: string;
  images: string;
}

const Card: React.FC<CardProps> = ({ title, description, images }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={images} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
