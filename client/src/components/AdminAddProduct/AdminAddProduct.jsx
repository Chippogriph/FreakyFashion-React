import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

function AdminAddProduct() {
  const formRef = useRef();
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const newProduct = {
      name: form.name.value,
      description: form.description.value,
      url: form.url.value,
      brand: form.brand.value,
      sku: form.sku.value,
      publishedDate: form.publishedDate.value,
      price: form.price.value,
    };

    addProduct(newProduct);

    form.reset();
    navigate("/admin/products");
  };

  return (
    <div className="bg-white p-10 text-2xl">
      <form
        id="productform"
        className="flex flex-col"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="mb-1">
          Namn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ange namn"
          required
          maxLength={25}
          className="border mb-8 rounded p-1"
        />

        <label htmlFor="description" className="mb-1">
          Beskrivning
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Ange beskrivning"
          className="border mb-8 rounded p-1"
        ></textarea>

        <label htmlFor="url" className="mb-1">
          Bild
        </label>
        <input
          type="url"
          id="url"
          name="url"
          required
          className="border mb-8 rounded p-1"
        />

        <label htmlFor="brand" className="mb-1">
          Märke
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          className="border mb-8 rounded p-1"
        />

        <label htmlFor="sku" className="mb-1">
          SKU
        </label>
        <input
          type="text"
          id="sku"
          name="sku"
          placeholder="Ange SKU"
          pattern="[A-Z]{3}[0-9]{3}"
          required
          title="Formatet måste vara tre bokstäver följt av tre siffror."
          className="border mb-8 rounded p-1"
        />

        <label htmlFor="publishedDate" className="mb-1">
          Publiseringsdatum
        </label>
        <input
          type="date"
          id="publishedDate"
          name="publishedDate"
          className="border mb-8 rounded p-1"
        />

        <label htmlFor="price" className="mb-1">
          Pris
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="border mb-12 rounded p-1"
        />

        <button
          className="bg-[#276B6C] hover:bg-[#73B8B7] px-5 py-2.5 rounded-md text-white font-bold"
          type="submit"
        >
          Lägg till
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
