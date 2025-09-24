import { useState } from "react";

export default function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "paystack",
    bank: "",
  });
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  if (success) {
    return (
      <div className="checkout-page">
        <h2>Payment Successful ✅ </h2>
        <p>
          Thank you <b>{form.name}</b>! Your order is confirmed. And will be
          delivered to <b> {form.address}</b>
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <>
          <img
            className="emptycart"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uZMrvukLTYkYwdxmBss0JIPzp0bWUmpA2tyw9yTegMRcxqJEQlSDgWl99DTROsSFC7w&usqp=CAU"
          />
          <p className="emptycartp">
            Your cart is empty. Add items before checking out.
          </p>
          <a className="gotoshopa" href="/">
            <button className="gotoshop">Go to Shop</button>
          </a>
        </>
      ) : processing ? (
        <p>💳 Processing payment, please wait...</p>
      ) : (
        <>
          <h3>Order Summary</h3>
          <ul className="checkout-list">
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} --- ₦{item.price.toLocaleString()}
              </li>
            ))}
          </ul>

          <h3>Total: ₦{total.toLocaleString()}</h3>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              required
            ></textarea>

            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              required
            >
              <option value="paystack">Paystack</option>
              <option value="Bank">Bank</option>
              <option value="PayPal">PayPal</option>
              <option value="flutterwave">Flutterwave</option>
              <option value="MasterCard">MasterCard</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {form.payment === "Bank" && (
              <>
                <div className="bank-options">
                  <label>Select Your Bank:</label>
                  <select
                    name="bank"
                    value={form.bank}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Choose Bank --</option>
                    <option value="GTBank">GTBank</option>
                    <option value="Access Bank">Access Bank</option>
                    <option value="Zenith Bank">Zenith Bank</option>
                    <option value="First Bank">First Bank</option>
                    <option value="UBA">UBA</option>
                  </select>
                </div>

                {form.bank && (
                  <div className="payment-area">
                    <h4>Bank Transfer Details</h4>
                    <p>
                      Bank: <b>{form.bank}</b>
                    </p>
                    <p>Account Name:{form.name}</p>
                    <p>
                      Account Number: <b>0123456789</b>
                    </p>
                    <p>Amount: ₦{total.toLocaleString()}</p>
                  </div>
                )}
              </>
            )}

            {form.payment === "paystack" && (
              <div className="payment-area">
                <h4>Pay with Paystack</h4>
                <p>You will be redirected to Paystack to complete payment.</p>
              </div>
            )}

            {form.payment === "flutterwave" && (
              <div className="payment-area">
                <h4>Pay with Flutterwave</h4>
                <p>A transaction reference will be generated.</p>
              </div>
            )}

            {form.payment === "PayPal" && (
              <div className="payment-area">
                <h4>Pay with PayPal</h4>
                <p>
                  Send payment to:
                  <a href="">
                    {" "}
                    <b>mystore@example.com</b>
                  </a>
                </p>
              </div>
            )}

            {form.payment === "MasterCard" && (
              <div className="payment-area">
                <h4>Pay with MasterCard</h4>
                <p>Enter your 16-digit card number securely at checkout.</p>
              </div>
            )}

            {form.payment === "cod" && (
              <div className="payment-area">
                <h4>Cash on Delivery</h4>
                <p>You will pay in cash when your order arrives.</p>
              </div>
            )}

            <button type="submit">Pay ₦{total.toLocaleString()}</button>
          </form>
        </>
      )}
    </div>
  );
}
