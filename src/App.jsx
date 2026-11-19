import { Link, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutUs from './AboutUs'
import ProductList from './ProductList'
import CartItem from './CartItem'

function Home() {
  return (
    <main className="landing">
      <div className="landing-shade" />
      <Navbar />
      <section className="hero">
        <div className="hero-card">
          <p className="eyebrow">WELCOME TO A GREENER HOME</p>
          <h1>Paradise Nursery</h1>
          <p className="hero-tagline">Bring nature home.</p>
          <p className="hero-copy">Discover beautiful houseplants that make every corner feel alive. Find your perfect plant and let your space bloom.</p>
          <Link className="primary-btn hero-btn" to="/plants">Get Started</Link>
          <Link className="about-link" to="/about">Learn more about us →</Link>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
