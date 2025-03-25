import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

function ProductDetails() {
  const { slug } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const product = products.find((product) => product.slug === slug);
  document.title = `${product.name}`;

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <section className="flex flex-col sm:flex-row flex-grow">
        <div className="relative rounded-lg px-4 pb-4 shadow-lg bg-white my-8 sm:flex-1 md:flex-none">
          <img
            src={`/images/${product.slug}.jpg`}
            alt={product.name}
            className="object-cover w-full"
          />
          <div className="sm:hidden absolute bottom-6 right-6 text-5xl">
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
        <div className="my-5 sm:flex-1">
          <div className="mx-6 mb-8">
            <h2 className="text-3xl"> {product.name} </h2>
            <p className="text-gray-500 mb-4"> {product.brand} </p>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-lg font-bold"> {product.price} kr</p>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-[#276B6C] hover:bg-[#73B8B7] text-white font-bold py-2 px-4 rounded w-full sm:w-auto max-w-96 block mx-auto sm:mx-6 hover:cursor-pointer"
          >
            Lägg i varukorg
          </button>
        </div>
      </section>

      <ProductCarousel />
    </>
  );
}

export default ProductDetails;
