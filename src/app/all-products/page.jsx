"use client";

import Spinner from "@/components/Spinner";
// import { fetchProducts } from "@/redux/productSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productSlice";
import ProductCard from "../collections/ProductCard";

export default function AllProductsPage() {
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length]);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (category) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  }, [allProducts, category, search]);

  return (
    <div className="py-24 md:py-10 px-6 min-h-[70vh] max-w-6xl mx-auto">
      {/* এই div-টি এখন ফিক্সড করা হয়েছে */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6 sticky top-0 bg-white z-50 p-4 shadow-md">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Premium Collections">Premium Collections</option>
          <option value="Popular Collections">Popular Collections</option>
          <option value="Discount Collections">Discount Collections</option>
        </select>
      </div>

      {loading ? (
        <Spinner />
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-320 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
          {filteredProducts.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
