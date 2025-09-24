export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        Shop<span className="hub"> hub </span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        <li>
          <a href="/">Contact </a>
        </li>
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="cart">🛒 Cart: {cartCount} </div>
    </nav>
  );
}
