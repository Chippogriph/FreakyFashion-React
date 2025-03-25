import { Route, Routes } from "react-router-dom";
import CustomerLayout from "./layout/CustomerLayout";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminNewProduct from "./pages/admin/AdminNewProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SearchResults from "./pages/SearchResults";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <SearchProvider>
          <Routes>
            {/* Customerview */}
            <Route path="/" element={<CustomerLayout />}>
              <Route index element={<Home />} />
              <Route path="product/:slug" element={<DetailsPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/search" element={<SearchResults />} />
            </Route>

            {/* Adminvieww */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="products" element={<AdminProducts />} />
              <Route path="products/new" element={<AdminNewProduct />} />
            </Route>
          </Routes>
        </SearchProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
