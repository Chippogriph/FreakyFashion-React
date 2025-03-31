import { Link, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center p-6">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          Order bekräftad!
        </h2>
        <i className="text-8xl mb-8 fa-regular fa-circle-check"></i>

        <p className="text-lg text-gray-700 mb-2">
          Tack för din beställning! Din order har mottagits och behandlas.
        </p>
      </div>
      <div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md text-center mb-10">
          <p className="text-lg font-semibold">
            Ordernummer: <span className="text-blue-600">#123456</span>
          </p>
          <p className="text-gray-600 text-sm">
            Du kommer att få ett bekräftelsemail med detaljer.
          </p>
        </div>

        <div className="mt-6 w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-2">Översikt av order</h3>
          <ul className="bg-white p-4 shadow rounded-lg">
            <li className="border-b py-2 flex justify-between">
              <span>Produkt 1</span>
              <span>299 kr</span>
            </li>
            <li className="border-b py-2 flex justify-between">
              <span>Produkt 2</span>
              <span>149 kr</span>
            </li>
            <li className="py-2 flex justify-between font-semibold">
              <span>Totalt</span>
              <span>448 kr</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Har du frågor? Kontakta vår{" "}
        <Link to={null} className="hover:underline">
          kundservice.
        </Link>
      </p>

      <button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-[#276B6C] hover:bg-[#73B8B7] text-white font-semibold rounded-lg shadow-md transition"
      >
        Till startsidan
      </button>
    </section>
  );
};

export default OrderConfirmation;
