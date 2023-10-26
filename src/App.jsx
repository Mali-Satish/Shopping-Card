import Header from "./components/Header";
import "./App.css";
import Api from "./components/Api";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CardList from "./components/CardList";

const App = () => {
  const [product, setProduct] = useState(Api);

  const[showCard,setShowCard] = useState(false)
  // console.log(Api)
  const [card, setCard] = useState([]);
  // console.log(card)
  const addToCard = (data) => {
    setCard([...card, { ...data, quantity: 1 }]);
  };

  const handleShow =(value)=>{
    setShowCard(value)
  }
  return (
    <>
      <Header count={card.length} handleShow={handleShow}></Header>
      
      {showCard ? (
        <CardList card={card} />

      ) : (
        <ProductList product={product} addToCard={addToCard}></ProductList>

      )}
    </>
  );
};

export default App;
