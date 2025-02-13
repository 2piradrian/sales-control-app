import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home-route";
import ProductsRoute from "./products/products-route";
import ProductsCreate from "./products-create/products-create";
import ProductsEdit from "./products-edit/products-edit";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/dashboard" element={<HomeRoute />} />

                <Route path="/products" element={<ProductsRoute />} />
                <Route path="/products/create" element={<ProductsCreate />} />
                <Route path="/products/edit" element={<ProductsEdit />} />
                
                <Route path="/sales" element={<HomeRoute />} />
                <Route path="/users" element={<HomeRoute />} />
            </Routes>
        </BrowserRouter>
    )
};