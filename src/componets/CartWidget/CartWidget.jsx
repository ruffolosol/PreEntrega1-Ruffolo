import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";
import {Link} from "react-router-dom";
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useContext} from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const {getTotalQuantity} = useContext(CartContext)
  let total = getTotalQuantity()
  return (
    <link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFills
        style={{
          fontSize:"2rem",
          color:"beige",
        }}
        />
    <div className="bubble-counter">
      <span>{total}</span>
    </div>
    </div>
    </link>
  );
};

export default CartWidget;