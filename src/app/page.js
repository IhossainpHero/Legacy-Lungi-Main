"use client";

import Spinner from "@/components/Spinner";
// import { fetchProducts } from "@/redux/productSlice";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import DiscountCollection from "./collections/DiscountCollection";
import PopularCollection from "./collections/PopularCollection";
import PremiumCollections from "./collections/PremiumCollections";

export default function Home() {
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length]);

  // Category-wise filtering
  const premiumProducts = allProducts.filter(
    (p) => p.category?.toLowerCase() === "premium collections"
  );
  const popularProducts = allProducts.filter(
    (p) => p.category?.toLowerCase() === "popular collections"
  );
  const discountProducts = allProducts.filter(
    (p) => p.category?.toLowerCase() === "discount collections"
  );

  return (
    <div className="pt-14 md:pt-0 pb-20 md:pb-0">
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 mb-10">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <PremiumCollections products={premiumProducts} />
            <PopularCollection products={popularProducts} />
            <DiscountCollection products={discountProducts} />
          </>
        )}
      </div>
    </div>
  );
}
