import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decreaseQuantity, increaseQuantity, removeFromCart } from './CartSlice'
import Navbar from './components/Navbar'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <div className="page-heading">
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
        </div>
        {items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🪴</div>
            <h2>Your cart is waiting for some greenery</h2>
            <p>Explore our collection and find your new favourite plant.</p>
            <Link className="primary-btn link-btn" to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {items.map(item => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-product-details">
                    <h3>{item.name}</h3>
                    <p>Unit price: ₹{item.price}</p>
                    <div className="quantity-controls">
                      <button aria-label={`Decrease ${item.name}`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                  </div>
                  <div className="cart-row-total">
                    <strong>₹{item.price * item.quantity}</strong>
                    <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                  </div>
                </article>
              ))}
            </section>
            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-line"><span>Total items</span><strong>{items.reduce((sum, item) => sum + item.quantity, 0)}</strong></div>
              <div className="summary-line total-line"><span>Total amount</span><strong>₹{total}</strong></div>
              <button className="primary-btn checkout-btn" onClick={() => window.alert('Coming Soon! Checkout will be available soon.')}>Checkout</button>
              <Link className="continue-link" to="/plants">← Continue Shopping</Link>
            </aside>
          </div>
        )}
      </main>
    </>
  )
}
