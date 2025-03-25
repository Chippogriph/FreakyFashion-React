import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";

function ProductCarousel() {
  const { products } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(products.length - 3);
    }
  };

  return (
    <section className="relative hidden sm:block my-8">
      <h2 className="text-center font-bold text-2xl">Liknande produkter</h2>
      <div className="flex">
        {products.slice(currentIndex, currentIndex + 3).map((product) => (
          <div key={product.id} className="w-1/3 px-2 rounded-lg">
            <Link to={`/product/${product.slug}`}>
              <div className="bg-white p-4 shadow-lg">
                <img
                  src={`/images/${product.slug}.jpg`}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                <p>{product.price} kr</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </section>
  );
}

export default ProductCarousel;
