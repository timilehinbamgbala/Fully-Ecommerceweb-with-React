export default function ProductCard({ product, addToCart }) {
  return (
    <>
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="price">₦{product.price.toLocaleString()}</p>
        <button onClick={() => addToCart(product)}>Add to Cart </button>
      </div>
    </>
  );
}
