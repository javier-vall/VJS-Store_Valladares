import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function CartWidget() {
  return (
    <div className="cart-container">
      <a href="#" className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
    </div>
  );
}

export default CartWidget;
