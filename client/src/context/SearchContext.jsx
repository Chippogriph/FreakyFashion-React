import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchResults, updateSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchContext;
