import { Outlet } from "react-router-dom";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import Footer from "../components/Footer/Footer";

function CustomerLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-[#ece5db]">
            <SiteHeader />
            <main className="flex-1 mx-7">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default CustomerLayout;
