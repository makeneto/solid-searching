import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SearchPage from './pages/SearchPage'
import Cart from './pages/Cart'

export default function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Somatório doa preços novos
  const currentTotal = cart.reduce((sum, item) => {
    const numericValue = parseFloat(item.newPrice.replace(/[^\d,.]/g, '').replace('.', '').replace(',', '.'))
    return sum + numericValue;
  }, 0)

  const formattedCurrentTotal = currentTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  // Somatório doa preços antigos
  const oldTotal = cart.reduce((sum, item) => {
    const numericValue = parseFloat(item.oldPrice.replace(/[^\d,.]/g, '').replace('.', '').replace(',', '.'))

    return sum + numericValue
  }, 0)

  const formattedOldTotal = oldTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <SearchPage
                cart={cart}
                setCart={setCart}
                currentTotal={formattedCurrentTotal}
                oldTotal={formattedOldTotal}
              />
            }
          />

          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                currentTotal={formattedCurrentTotal}
                oldTotal={formattedOldTotal}
              />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}