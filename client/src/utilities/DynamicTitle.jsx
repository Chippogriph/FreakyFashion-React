import { useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const DynamicTitle = () => {
    const { slug } = useParams();
    const location = useLocation();
    const { product, fetchProductBySlug } = useContext(ProductContext);

    useEffect(() => {
        if (slug) {
            fetchProductBySlug(slug);
        }
    }, [slug, fetchProductBySlug]);

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "Freaky Fashion";
        } else if (product) {
            document.title = `${product.name}`;
        } else {
            document.title = "Laddar...";
        }
    }, [product, location]);

    return null;
};

export default DynamicTitle;
