import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full mt-2 sm:mt-8 mb-8">
      <ul className="list-none m-0 p-0 text-3xl font-bold flex flex-col sm:flex-row">
        <Link to={null}>
          <li className="hover:text-[#73B8B7] inline-flex mb-3 sm:mr-8 md:mr-16 lg:mr-24">Nyheter</li>
        </Link>
        <Link to={null}>
          <li className="hover:text-[#73B8B7] inline-flex mb-3 sm:mr-8 md:mr-16 lg:mr-24">Topplistan</li>
        </Link>
        <Link to={null}>
          <li className="hover:text-[#73B8B7] inline-flex mb-3 sm:mr-8 md:mr-16 lg:mr-24">Rea</li>
        </Link>
        <Link to={null}>
          <li className="hover:text-[#73B8B7] inline-flex sm:mr-8 md:mr-16 lg:mr-24">Kampanjer</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
