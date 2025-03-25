import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      if (!response.ok) throw new Error("Kunde inte hämta produkter");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Fel vid hämtning av produkter:", error);
    }
  };

  const fetchProductBySlug = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/products/${slug}`
      );
      if (!response.ok) throw new Error("Produkt hittades inte");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Fel vid hämtning av enskild produkt:", error);
      setProduct(null);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/products/remove/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Produkt kunde inte tas bort");
      const products = await response.json();

      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Fel vid borttagning av produkt:", error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:8000/admin/products/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        await fetchProducts();
      } else {
        alert("Fel vid tillägg av produkt.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        removeProduct,
        fetchProducts,
        fetchProductBySlug,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContext;
