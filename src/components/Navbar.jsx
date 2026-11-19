import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))
  return (
    <nav className="navbar">
      <Link className="nav-brand" to="/">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart">🛒 Cart <span className="cart-count">{count}</span></Link>
      </div>
    </nav>
  )
}
