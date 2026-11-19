import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'

const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem('paradise-cart') || '[]')
  } catch {
    return []
  }
}

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: { cart: { items: loadCart() } }
})

store.subscribe(() => {
  try {
    localStorage.setItem('paradise-cart', JSON.stringify(store.getState().cart.items))
  } catch {
    // The app remains usable if browser storage is unavailable.
  }
})
