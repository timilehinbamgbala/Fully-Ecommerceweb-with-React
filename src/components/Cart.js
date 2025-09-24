export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <>
          <img
            className="emptycart"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uZMrvukLTYkYwdxmBss0JIPzp0bWUmpA2tyw9yTegMRcxqJEQlSDgWl99DTROsSFC7w&usqp=CAU"
          />
          <p className="emptycartp">Your cart is empty </p>
          <a className="gotoshopa" href="/">
            <button className="gotoshop">Go to Shop</button>
          </a>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>₦{item.price.toLocaleString()}</p>
                </div>
                <button onClick={() => removeFromCart(index)}>Remove </button>
              </li>
            ))}
          </ul>

          <h3>Total: ₦{total.toLocaleString()}</h3>
        </>
      )}
    </div>
  );
}
