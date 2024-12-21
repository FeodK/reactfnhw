import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Breadcrumbs from "../components/Breadcrumbs";

import cartImg from "../img/cart-img.jpg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "MANGO PEOPLE T-SHIRT",
      price: 300,
      quantity: 2,
      color: "Red",
      size: "XL",
    },
    {
      id: 2,
      title: "MANGO PEOPLE T-SHIRT",
      price: 300,
      quantity: 2,
      color: "Red",
      size: "XL",
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container">
      <Header />
      <Breadcrumbs title="SHOPPING CART" />
      <div className="cart center">
        <div className="cart__left">
          <div className="cart__products">
            {cartItems.map((item) => (
              <div className="cart__item" key={item.id}>
                <img
                  src={cartImg}
                  className="cart__product-img"
                  alt="product"
                />
                <div className="cart__product-content">
                  <h3 className="cart__product-title">
                    {item.title}
                    <svg
                      className="cart__product-close"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                        fill="#575757"
                      />
                    </svg>
                  </h3>
                  <div className="cart__product-desc">
                    <p className="cart__product-price">
                      Price:
                      <span className="cart__product-price_selected">
                        ${item.price}
                      </span>
                    </p>
                    <p className="cart__product-color">Color: {item.color}</p>
                    <p className="cart__product-size">Size: {item.size}</p>
                    <p className="cart__product-quantity">
                      Quantity:
                      <input
                        type="number"
                        value={item.quantity}
                        className="cart__product-quantity_amount"
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__btns">
            <button className="cart__btn">CLEAR SHOPPING CART</button>
            <button className="cart__btn">CONTINUE SHOPPING</button>
          </div>
        </div>
        <div className="cart__right">
          <div className="cart__order-form">
            <form action="#" className="form">
              <div className="form__group">
                <h3 className="form__title">SHIPPING ADRESS</h3>
                <input
                  className="form__input form__input_light"
                  type="text"
                  placeholder="Bangladesh"
                  required
                  tabIndex="1"
                />
                <input
                  className="form__input"
                  type="text"
                  placeholder="State"
                  required
                  tabIndex="2"
                />
                <input
                  className="form__input"
                  type="text"
                  placeholder="Postcode / Zip"
                  required
                  tabIndex="3"
                />
                <button className="form__btn" tabIndex="4" type="submit">
                  GET A QUOTE
                </button>
              </div>
            </form>
          </div>
          <div className="cart__total">
            <div className="cart__sub-total">
              <p className="cart__sub-total_head">SUB TOTAL</p>
              <p className="cart__sub-total_price">${calculateGrandTotal()}</p>
            </div>
            <div className="cart__grand-total">
              <p className="cart__grand-total_head">GRAND TOTAL</p>
              <p className="cart__grand-total_price">
                ${calculateGrandTotal()}
              </p>
            </div>
            <button className="cart__checkout-btn">
              PROCEED&nbsp;TO&nbsp;CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default CartPage;
