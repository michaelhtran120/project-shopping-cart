import { useState } from "react";

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
  const [cart, setCart] = useState([
    {
      alt: "Sleep Gummy Container",
      description: "For a healthy sleep cycle",
      id: 1,
      imgsrc: "/static/media/sleep.a8f06622.png",
      name: "Sleep",
      price: 13.99,
      qty: 2,
    },
    {
      alt: "Energy Gummy Container",
      description: "For a steady flow of energy",
      id: 2,
      imgsrc: "/static/media/energy.26fab1c1.png",
      name: "Daily Energy",
      price: 13.99,
      qty: 2,
    },
  ]);

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

  const qtyChange = (e, index) => {
    const { value } = e.target;
    const cartCopy = [...cart];
    cartCopy[index].qty = value;
    setCart(cartCopy);
  };

  return (
    <div className='App'>
      <Nav
        products={products}
        onClick={addItem}
        cartItems={cart}
        onChange={qtyChange}
      />
    </div>
  );
}

export default App;
