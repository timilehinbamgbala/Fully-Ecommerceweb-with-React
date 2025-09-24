import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        const converted = data.products.map((p) => ({
          ...p,
          price: p.price * 1600,
        }));

        setProducts(converted);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
