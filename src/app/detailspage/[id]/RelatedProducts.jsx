"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";

export default function RelatedProducts({ products }) {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      selectedSize: product?.sizes ? product.sizes[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="text-center rounded shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] bg-white"
          >
            {/* 🔗 Image + Info part clickable */}
            <Link href={`/detailspage/${product._id}`} className="block">
              {/* Image with zoom effect on hover */}
              <div className="w-full h-48 overflow-hidden rounded-t group">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-2 font-semibold transition-colors duration-200 hover:text-yellow-500">
                {product?.name}
              </h3>

              {/* Price */}
              <p className="text-yellow-600 font-bold flex items-center justify-center">
                <TbCurrencyTaka size={20} />
                {product?.newPrice}
              </p>
            </Link>

            {/* ✅ শুধু Add to cart বাটন */}
            <div className="px-4 pt-2 pb-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#063238] text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products link */}
      <div className="mt-10 text-center">
        <Link href="/all-products" className="text-blue-500 hover:underline">
          View All Products
        </Link>
      </div>
    </div>
  );
}
