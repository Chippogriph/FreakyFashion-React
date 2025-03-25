import { useReducer, useEffect } from "react";
import { cartReducer, initialState } from "./cartReducer";

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/api/cart")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_CART", payload: data }))
      .catch((error) => console.error("Fel vid hämtning av varukorg:", error));
  }, []);

  const addToCart = (product) => {
    fetch(`http://localhost:8000/api/cart/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((updatedCart) =>
        dispatch({ type: "SET_CART", payload: updatedCart })
      )
      .catch((error) =>
        console.error("Fel vid uppdatering av varukorg:", error)
      );
  };

  const removeFromCart = (id) => {
    fetch(`http://localhost:8000/api/cart/remove/${id}`, { method: "DELETE" })
      .then(() => dispatch({ type: "REMOVE_FROM_CART", payload: id }))
      .catch((error) =>
        console.error("Fel vid borttagning av produkt:", error)
      );
  };

  const updateQuantity = (id, quantity) => {
    fetch(`http://localhost:8000/api/cart/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    })
      .then(() =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
      )
      .catch((error) =>
        console.error("Fel vid uppdatering av kvantitet:", error)
      );
  };

  return {
    cart: state.cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};

export default useCartReducer;
