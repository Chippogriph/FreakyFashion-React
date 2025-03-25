import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminInventory from "../../components/AdminInventory/AdminInventory";

function AdminProducts() {
  document.title = "Administration";
  return (
    <div className="h-screen">
      <div className="flex w-full h-full">
        <AdminSidebar />
        <AdminInventory />
      </div>
    </div>
  );
}

export default AdminProducts;
