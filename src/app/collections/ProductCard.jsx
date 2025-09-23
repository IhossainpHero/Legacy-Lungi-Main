"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize: product?.sizes ? product.sizes[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative">
      {/* 🔗 পুরো কার্ডই লিংকেবল (শুধু Add to cart বাদ) */}
      <Link href={`/detailspage/${product?._id}`} className="block">
        {product?.discount && (
          <span className="absolute bg-orange-500 text-white text-xs px-2 py-1 m-2 rounded z-10">
            -{product?.discount}%
          </span>
        )}

        {/* Image with zoom-in hover */}
        <div className="w-full rounded-t-md h-48 overflow-hidden group">
          <img
            src={product?.image}
            alt={product?.name}
            width={300}
            height={200}
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="pt-3 text-center pb-3">
          <h3 className="text-sm font-semibold transition-colors duration-200 hover:text-yellow-500">
            {product?.name}
          </h3>
          <div className="flex justify-center items-center mt-2">
            {product?.oldPrice && (
              <span className="text-gray-400 flex items-center justify-center line-through mr-2">
                <TbCurrencyTaka size={20} /> {product?.oldPrice}
              </span>
            )}
            <span className="text-red-500 flex items-center justify-center font-bold">
              <TbCurrencyTaka size={20} /> {product?.newPrice}
            </span>
          </div>
        </div>
      </Link>

      {/* ✅ শুধু Add to cart বাটন থাকবে */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#063238]  text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
