import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-2 mb-8 bg-[#276B6C] text-white lg:pl-10">
      <ul className="list-none text-3xl font-bold grid grid-cols-2 sm:grid-cols-4 pl-10 sm:px-2">
        <Link to={null}>
          <li className="hover:text-[#73B8B7] text-left md:text-center py-4 sm:py-2">Nyheter</li>
        </Link>
        <Link to={null}>
          <li className="hover:text-[#73B8B7] sm:text-center py-4 sm:py-2">Topplistan</li>
        </Link>
        <Link to={null}>
          <li className="hover:text-[#73B8B7] sm:text-center py-4 sm:py-2">Rea</li>
        </Link>
        <Link to={null}>
          <li className="hover:text-[#73B8B7] sm:text-center py-4 sm:py-2">Kampanjer</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
