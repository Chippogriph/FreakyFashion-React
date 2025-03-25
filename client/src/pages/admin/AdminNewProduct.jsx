import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminAddProduct from "../../components/AdminAddProduct/AdminAddProduct";

function AdminNewProduct() {
  return (
    <>
      <div className="flex">
        <AdminSidebar />
        <AdminAddProduct />
      </div>
    </>
  );
}

export default AdminNewProduct;
