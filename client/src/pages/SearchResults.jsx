import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import ProductCard from "../components/ProductCard/ProductCard";

const SearchResultsPage = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      <h2 className="text-2xl text-center font-bold mb-10">
        {searchResults.length == 0
          ? "Inga produkter hittades"
          : searchResults.length == 1
          ? `Hittade ${searchResults.length} produkt`
          : `Hittade ${searchResults.length} produkter`}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center">
            Inga sökresultat hittades.
          </p>
        )}
      </div>
    </>
  );
};

export default SearchResultsPage;
