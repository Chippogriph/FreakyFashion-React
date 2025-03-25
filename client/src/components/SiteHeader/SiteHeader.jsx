import { useRef, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import SearchContext from "../../context/SearchContext";

const SiteHeader = () => {
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { updateSearchResults } = useContext(SearchContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchQuery = searchRef.current.value.trim();

    if (searchQuery) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products/search?q=${searchQuery}`
        );
        if (response.ok) {
          const data = await response.json();
          updateSearchResults(data);
          navigate(`/search?q=${searchQuery}`);
          searchRef.current.value = "";
        } else {
          console.error("Något gick fel med sökningen");
        }
      } catch (error) {
        console.error("Fel vid sökning:", error);
      }
    }
  };

  return (
    <header className="flex flex-wrap my-4 mx-7">
      <div className="flex flex-col sm:flex-row w-full">
        <Link to={"/"}>
          <div className="text-center sm:mr-5">
            <img
              src="../../images/Freaky-Fashion-logga-removebg.png"
              alt="Logga för Freaky Fashion"
              className="max-w-[300px] sm:w-full h-auto mx-auto"
            />
          </div>
        </Link>
        <div className="flex items-center my-7 w-full justify-between">
          <form
            onSubmit={handleSearch}
            className="flex-1 text-3xl sm:text-xl h-11 rounded-md ml-5 border bg-white border-blue-50 shadow max-w-[450px]"
          >
            <input
              ref={searchRef}
              type="text"
              placeholder="Sök klädesplagg..."
              className="w-full h-full px-2"
            />
            <button type="submit" className="hidden"></button>
          </form>

          <div className="flex items-end ml-6 space-x-6 text-4xl">
            <a
              href="#"
              className="fa-solid fa-heart text-[#276B6C] hover:text-[#73B8B7]"
            ></a>
            <Link to={"/cart"}>
              <i className="fa-solid fa-basket-shopping text-[#276B6C] hover:text-[#73B8B7] relative"></i>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default SiteHeader;
