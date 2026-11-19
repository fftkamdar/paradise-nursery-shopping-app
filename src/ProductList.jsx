import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './CartSlice'
import { categories, plants } from './data/plants'
import Navbar from './components/Navbar'

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const isAdded = id => cartItems.some(item => item.id === id)

  return (
    <>
      <Navbar />
      <main className="products-page">
        <div className="page-heading">
          <p className="eyebrow">FIND YOUR GREEN</p>
          <h1>Plants for every space</h1>
          <p>Bring home a little nature. Choose a plant that fits your lifestyle.</p>
        </div>
        {categories.map(category => (
          <section className="category-section" key={category}>
            <h2>{category}</h2>
            <div className="product-grid">
              {plants.filter(plant => plant.category === category).map(plant => (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="product-bottom">
                      <strong>₹{plant.price}</strong>
                      <button
                        className="primary-btn small-btn"
                        disabled={isAdded(plant.id)}
                        onClick={() => dispatch(addToCart(plant))}
                      >{isAdded(plant.id) ? 'Added ✓' : 'Add to Cart'}</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}
