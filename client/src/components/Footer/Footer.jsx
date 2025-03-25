import { useState } from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer>
      <section className="sm:text-xl mx-7 mt-12 mb-5 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center sm:justify-center">
          <i className="fa-solid fa-earth-americas mr-4 text-5xl sm:text-4xl" />
          <p className="text-3xl sm:text-xl">Gratis frakt och returer</p>
        </div>
        <div className="flex items-center sm:justify-center">
          <i className="fa-solid fa-plane mr-4 text-5xl sm:text-4xl" />
          <p className="text-3xl sm:text-xl">Expressfrakt</p>
        </div>
        <div className="flex items-center sm:justify-center">
          <i className="fa-solid fa-shield mr-4 text-5xl sm:text-4xl" />
          <p className="text-3xl sm:text-xl">Säkra betalningar</p>
        </div>
        <div className="flex items-center sm:justify-center">
          <i className="fa-regular fa-face-smile mr-4 text-5xl sm:text-4xl" />
          <p className="text-3xl sm:text-xl">Nyheter varje dag</p>
        </div>
      </section>
      <section className="text-2xl max-w-6xl mx-auto px-5 bg-[#276B6C] text-white sm:hidden">
        <Accordion title="Shopping">
          <hr />
          <ul className="list-none my-3">
            <li className="mb-2">Vinterjackor</li>
            <li className="mb-2">Pufferjackor</li>
            <li className="mb-2">Kappa</li>
            <li className="mb-2">Trenchcoats</li>
          </ul>
        </Accordion>
        <Accordion title="Mina Sidor">
          <hr />
          <ul className="list-none mt-1 mb-3">
            <li className="mb-2">Mina Ordrar</li>
            <li className="mb-2">Mitt Konto</li>
          </ul>
        </Accordion>
        <Accordion title="Kundtjänst">
          <hr />
          <ul className="list-none mt-1 mb-3">
            <li className="mb-2">Returnpolicy</li>
            <li className="mb-2">Integritetspolicy</li>
          </ul>
        </Accordion>
      </section>
      <section className="hidden sm:flex p-5 bg-[#276B6C] text-white">
        <ul>
          <li className="font-bold">Shopping</li>
          <li className="my-2">Vinterjackor</li>
          <li className="my-2">Pufferjackor</li>
          <li className="my-2">Kappa</li>
          <li className="my-2">Trenchcoats</li>
        </ul>
        <ul className="mx-20">
          <li className="font-bold">Mina Sidor</li>
          <li className="my-2">Mina Ordrar</li>
          <li className="my-2">Mitt Konto</li>
        </ul>
        <ul>
          <li className="font-bold">Kundtjänst</li>
          <li className="my-2">Returnpolicy</li>
          <li className="my-2">Integritetspolicy</li>
        </ul>
      </section>
      <section className="text-center text-xl py-3 bg-[#276B6C] text-white">
        <p>&copy; Freaky Fashion</p>
      </section>
    </footer>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-3">
      <button
        className="w-full text-left flex justify-between items-center text-3xl font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-300">{children}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Footer;
