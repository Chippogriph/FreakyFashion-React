import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const currentDate = new Date();
  const publishDate = new Date(product.publishedDate);

  if (publishDate > currentDate) {
    return null;
  }

  const timeDifference = currentDate - publishDate;
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return (
    <Link to={`/product/${product.slug}`}>
      <div className="relative rounded-lg p-4 shadow-2xl bg-white">
        {daysDifference < 7 && (
          <span className="absolute top-2 left-2 z-10 bg-black text-white text-xl md:text-sm font-bold py-1 px-2 rounded-lg">
            Nyhet
          </span>
        )}
        <div className="relative">
          <img
            src={product.url}
            alt={product.name}
            className="w-full object-cover rounded-t-md"
          />
          <div className=" sm:hidden absolute bottom-4 right-4 text-5xl">
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
        <hr className="text-gray-100" />
        <div className="text-2xl sm:text-xl flex justify-between">
          <h2 className="font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600 self-end font-bold">{product.price} kr</p>
        </div>
        <p className="self-end text-gray-400">{product.brand}</p>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
