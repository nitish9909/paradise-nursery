import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/ProductPage.css';

const products = [
  { id: 1, name: "Snake Plant", category: "Low Light", price: 15, img: "/assets/snake.jpg" },
  { id: 2, name: "Peace Lily", category: "Flowering", price: 20, img: "/assets/lily.jpg" },
  { id: 3, name: "Aloe Vera", category: "Medicinal", price: 10, img: "/assets/aloe.jpg" },
  { id: 4, name: "Spider Plant", category: "Air Purifying", price: 12, img: "/assets/spider.jpg" },
  { id: 5, name: "ZZ Plant", category: "Low Light", price: 18, img: "/assets/zz.jpg" },
  { id: 6, name: "Boston Fern", category: "Hanging", price: 22, img: "/assets/fern.jpg" }
];

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="plant-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
