import ProductCard from "./ProductCard";

export default function PremiumCollections({ products }) {
  if (!products || products.length === 0) {
    return <p>No Premium Products Found</p>;
  }

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-6">Premium Collections</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}
