import React, { useEffect, useState } from "react";
import "../App.css";

const CardList = ({ card }) => {
  const [CARD, setCARD] = useState([]);

  useEffect(() => {
    setCARD(card);
  }, [card]);

  return (
    <>
      {CARD.map((cardItem, cardIndex) => {
        return (
          <div className="carddispl">
            <div key={cardIndex} style={{ display: "flex", margin: "10px" }}>
              <img src={cardItem.images} width="20%" height="30%" alt="" />
            </div>
            <div  className="pp">
              <p>{cardItem.title} </p>

              <button
                onClick={() => {
                  const _card = CARD.map((item, index) => {
                    return cardIndex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                        }
                      : item;
                  });
                  setCARD(_card);
                }}
              >
                -
              </button>

              <p>{cardItem.quantity}</p>
              <button
                onClick={() => {
                  const _card = CARD.map((item, index) => {
                    return cardIndex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCARD(_card);
                }}
              >
                +
              </button>

              <p style={{ marginLeft: "10px" }}>
                Rs. {cardItem.price * cardItem.quantity}/-
              </p>
            </div>
          </div>
        );
      })}
      <p className="totalprice">
        Total : {CARD.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
    </>
  );
};

export default CardList;
