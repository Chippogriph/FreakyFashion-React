import useCart from "../../hooks/useCart";

function CartTable() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  document.title = "Kassan";

  return (
    <section className="flex flex-col">
      {cart.length === 0 ? (
        <p className="text-center text-xl font-semibold">Varukorgen är tom</p>
      ) : (
        <>
          <div className="flex flex-col sm:hidden mb-12">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex border p-4 justify-between items-center"
              >
                <div>
                  <h3>
                    {item.quantity}x {item.name}
                  </h3>
                  <p>Pris: {item.price} kr</p>
                </div>
                <div>
                  <p className="text-xl">{item.quantity * item.price} kr</p>
                  <input
                    type="number"
                    className="border w-10 mr-4 text-center"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  />
                  <button
                    className="text-[#276B6C] hover:text-[#73B8B7]"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="fa-solid fa-trash-can "></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12 hidden sm:block">
            <table className="min-w-full table-auto border">
              <colgroup className="border" />
              <colgroup className="border" />
              <colgroup className="border" />
              <colgroup className="border" />
              <colgroup className="border" />
              <thead className="bg-gray-200 border">
                <tr>
                  <th className="px-4 py-2 text-left">Produkt</th>
                  <th className="px-4 py-2 text-left">Antal</th>
                  <th className="px-4 py-2 text-left">Pris</th>
                  <th className="px-4 py-2 text-left">Totalt</th>
                  <th className="px-4 py-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">{item.price} kr</td>
                    <td className="px-4 py-2">
                      {item.price * item.quantity} kr
                    </td>
                    <td className="px-4 py-2 flex justify-evenly">
                      <input
                        type="number"
                        className="border w-10 text-center"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#276B6C] hover:text-[#73B8B7]"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}

export default CartTable;
