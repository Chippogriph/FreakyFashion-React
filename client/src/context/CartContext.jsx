import PropTypes from "prop-types";
import { createContext } from "react";
import useCartReducer from "../components/reducers/useCartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
