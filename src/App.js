import { useState, useEffect } from "react";

import "./App.css";
import Nav from "./Components/Nav";

import sleepImg from "./Images/sleep.png";
import energyImg from "./Images/energy.png";
import focusImg from "./Images/focus.png";
import probioticImg from "./Images/probiotic.png";
import stressImg from "./Images/stress.png";

function App() {
  const [products] = useState([
    {
      name: "Sleep",
      id: 1,
      imgsrc: sleepImg,
      description: "For a healthy sleep cycle",
      price: 13.99,
      alt: "Sleep Gummy Container",
    },
    {
      name: "Daily Energy",
      id: 2,
      imgsrc: energyImg,
      description: "For a steady flow of energy",
      price: 13.99,
      alt: "Energy Gummy Container",
    },
    {
      name: "Laser Focus",
      id: 3,
      imgsrc: focusImg,
      description: "Think fast and stay on task",
      price: 13.99,
      alt: "Focus Gummy Container",
    },
    {
      name: "Probiotic",
      id: 4,
      imgsrc: probioticImg,
      description: "Immune and digestive health",
      price: 13.99,
      alt: "Probiotic Gummy Container",
    },
    {
      name: "Goodbye Stress",
      id: 5,
      imgsrc: stressImg,
      description: "Keep calm and stay alert",
      price: 13.99,
      alt: "Stress Gummy Container",
    },
  ]);

  const [cart, setCart] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addItem = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeItem = (product) => {
    const cartCopy = cart.filter((item) => item.id !== product.id);
    setCart(cartCopy);
  };

  const qtyChange = (e, index) => {
    const { value } = e.target;
    const cartCopy = [...cart];
    cartCopy[index].qty = Number(value);
    setCart(cartCopy);
  };

  const increaseQty = (index) => {
    const cartCopy = [...cart];
    cartCopy[index].qty = cartCopy[index].qty + 1;
    console.log(cartCopy);
    setCart(cartCopy);
  };
  const decreaseQty = (index) => {
    const cartCopy = [...cart];
    cartCopy[index].qty = cartCopy[index].qty - 1;
    setCart(cartCopy);
  };

  useEffect(() => {
    if (cart.length > 0) {
      const cartQty = cart.slice().map((item) => item.qty);
      const cartTotalQty =
        cartQty.length === 0 ? 0 : cartQty.reduce((acc, cur) => acc + cur);
      setCartTotal(cartTotalQty);
    } else if (cart.length === 0) {
      setCartTotal(0);
    }
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      const cartTotalValue = cart
        .map((item) => item.qty * item.price)
        .reduce((acc, cur) => acc + cur);
      setCartTotalPrice(cartTotalValue);
    } else if (cart.length === 0) {
      setCartTotalPrice(0);
    }
  }, [cart]);

  return (
    <div className='App'>
      <Nav
        products={products}
        onAdd={addItem}
        cartItems={cart}
        onChange={qtyChange}
        onDelete={removeItem}
        cartTotal={cartTotal}
        increment={increaseQty}
        decrement={decreaseQty}
        cartTotalPrice={cartTotalPrice}
      />
    </div>
  );
}

export default App;
