import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Shop } from './shop/Shop'
import { Navbar } from './Navbar'
import { Layout } from './Layout'
import { ItemProvider } from './ItemContext'
import { CartProvider } from './cart/CartContext'

export function App() {
  return (
    <ItemProvider>
      <CartProvider>
        <Layout />
      </CartProvider>
    </ItemProvider>
  )
}