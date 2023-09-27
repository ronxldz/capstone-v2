// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  // Use useParams to get the product ID from the URL
  const { productId } = useParams();

  // You can fetch the product details using the product ID from an API or Redux store
  // For demonstration, let's assume you have a product object with details
  const product = {
    id: productId,
    title: "Product Title",
    description: "Product Description",
    price: 10.99,
    category: "Category",
    image: "product-image-url.jpg",
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-medium">{product.title}</h2>
            <p className="text-gray-600">{product.category}</p>
          </div>
          <p className="text-xl font-semibold">${product.price}</p>
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="mt-4 max-w-md mx-auto"
        />
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
