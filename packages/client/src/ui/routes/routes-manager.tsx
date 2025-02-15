import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home-route";
import ProductsRoute from "./products/products-route";
import ProductsCreate from "./products-create/products-create";
import ProductsEdit from "./products-edit/products-edit";
import CategoriesCreate from "./categories-create/categories-create";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/dashboard" element={<HomeRoute />} />

                <Route path="/products" element={<ProductsRoute />} />
                <Route path="/products/create-product" element={<ProductsCreate />} />
                <Route path="/products/edit-product" element={<ProductsEdit />} />
                <Route path="/products/create-category" element={<CategoriesCreate />} />
                
                <Route path="/sales" element={<HomeRoute />} />
                <Route path="/users" element={<HomeRoute />} />
            </Routes>
        </BrowserRouter>
    )
};