import { useContext } from "react";
import CartTable from "../components/CartTable/CartTable";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h2 className="text-center text-4xl font-bold mb-12">Varukorgen</h2>
      <CartTable />
      {cart.length > 0 && (
        <div className="flex justify-center w-full mb-12">
          <Link to="/checkout">
            <button className="sm:flex-1 min-w-xs bg-[#276B6C] hover:bg-[#73B8B7] hover:cursor-pointer px-5 py-2.5 no-underline rounded-md text-white text-2xl font-bold max-w-md">
              Till Kassan
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
