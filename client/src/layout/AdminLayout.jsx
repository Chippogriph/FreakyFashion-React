import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader/AdminHeader";



function AdminLayout() {
    return (
    <>
    <AdminHeader />
    <main>
        <Outlet />
    </main>

    </>
    )
}

export default AdminLayout