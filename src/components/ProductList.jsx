import React from "react";
import "../App.css";

const ProductList = ({ product,addToCard }) => {

  return (
    <>
      <div className="flex">
        {product.map((productItem, productIndex) => {
          return (
            <>
              <div style={{ width: "50%" }} key={productIndex}>
              <div className="product-item">
                <img
                  src={productItem.images}
                  width="80%"
                  height="300px"
                  alt="error in images"
                />
                <p style={{ color: "white" }}>
                  {productItem.title} ---- {productItem.category}
                </p>
                <p>Rs. {productItem.price}/-</p>
                <p>{productItem.description}</p>
                <button className="productbtn" onClick={()=>addToCard(productItem)}>Add to Card</button>
              </div>
              </div>
            </>
          );
        })}
      </div>

    </>
  );
};

export default ProductList;
