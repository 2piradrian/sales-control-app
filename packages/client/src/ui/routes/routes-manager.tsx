import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home-route";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/dashboard" element={<HomeRoute />} />
                <Route path="/products" element={<HomeRoute />} />
                <Route path="/sales" element={<HomeRoute />} />
                <Route path="/users" element={<HomeRoute />} />
            </Routes>
        </BrowserRouter>
    )
};