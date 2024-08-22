import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

const ProductZitta = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductsData = async () => {
    try {
      const resp = await axios.get("https://dummyjson.com/products");
      setProducts(resp.data.products);
      console.log("data product: ", resp.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.category}</p>
              <p className="text-gray-700">Price: ${item.price}</p>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="mt-4">
                <span className="text-sm text-gray-500">Rating: {item.rating} / 5</span>
                <span className="text-sm text-gray-500 ml-4">Stock: {item.stock}</span>
              </div>
              <button className="px-5 py-1 text-black bg-slate-600 font-normal rounded-lg">Beli</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductZitta;
