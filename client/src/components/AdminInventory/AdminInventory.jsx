import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

function AdminInventory() {
  const { products, removeProduct } = useProducts();
  
  return (
    <div className="flex-grow p-5 bg-white">
      <div className="flex justify-between mb-5">
        <h2 className="text-3xl">Produkter</h2>
        <Link to={'/admin/products/new'}>
        <button className="bg-[#276B6C] hover:bg-[#73B8B7] px-5 py-2.5 no-underline rounded-md text-white font-bold">
          Ny produkt
        </button>
        </Link>
      </div>
      <table className="border w-full">
        <colgroup>
          <col className="border" />
          <col className="border" />
          <col className="border" />
          <col className="border w-[75px]" />
        </colgroup>
        <thead className="border text-left bg-[#276B6C] text-white">
          <tr>
            <th className="pl-2 py-1">Namn</th>
            <th className="pl-2 py-1">SKU</th>
            <th className="pl-2 py-1">Pris</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="border">
          {(products.map((product) => 
          <tr
            key={product.id}
            className={product.id % 2 !== 0 ? "bg-gray-200" : ""}
          >
            <td className="pl-2 py-1">{product.name}</td>
            <td className="pl-2 py-1">{product.sku}</td>
            <td className="pl-2 py-1">{product.price}</td>
            <td className="flex justify-evenly pt-2">
              <i onClick={() => removeProduct(product.id)} className="fa-solid fa-trash-can text-[#276B6C] hover:text-[#73B8B7]"></i>
            </td> 
          </tr>))}

        </tbody>
      </table>
    </div>
  );
}

export default AdminInventory;
