import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import CartTable from "../components/CartTable/CartTable";

function Checkout() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mb-12">Kassan</h2>
      <CartTable />
      <CheckoutForm />
    </>
  );
}

export default Checkout;
