import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    zipCode: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Beställning skickad:", formData);

    // Skicka till backend i framtiden
    // fetch("http://localhost:8000/checkout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // }).then(() => console.log("Order skickad!"));
    navigate("/order-confirmation");
  };

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Kunduppgifter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border p-4 rounded bg-white">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block font-medium">
                Förnamn:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium">
                Efternamn:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                E-post:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          <fieldset className="border p-4 mb-4 rounded">
            <legend className="font-semibold">Adress</legend>
            <div>
              <label htmlFor="street" className="block font-medium">
                Gatuadress:
              </label>
              <input
                type="text"
                name="street"
                id="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full border p-2 rounded lg:w-1/2"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block font-medium">
                Postnummer:
              </label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-40 border p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="city" className="block font-medium">
                Stad:
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="w-1/2 border p-2 rounded lg:w-1/3"
              />
            </div>
          </fieldset>

          <div>
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              value="false"
              className="mr-2"
            />
            <label htmlFor="newsletter">Jag vill ta emot nyhetsbrev</label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#276B6C] hover:bg-[#73B8B7] text-white font-bold py-2 px-4 rounded w-30"
          >
            Köp
          </button>
        </div>
      </form>
    </section>
  );
}

export default CheckoutForm;
