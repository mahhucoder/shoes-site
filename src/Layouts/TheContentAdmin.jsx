import React, { memo } from 'react';
import { Routes, Route,Navigate } from "react-router-dom";
import '../Css/Layouts/TheContentAdmin.css'
import BrandPage from '../Pages/BrandPage';
import CategoryPage from '../Pages/CategoryPage';
import ColorPage from '../Pages/ColorPage';
import Dashboard from '../Pages/Dashboard';
import OrderPage from '../Pages/OrderPage';
import RequestPage from '../Pages/RequestPage';
import SalePage from '../Pages/SalePage';
import ShoesPage from '../Pages/ShoesPage';
import SizePage from '../Pages/SizePage';

const TheContentAdmin = memo(() => {
    return (
        <div className="nm-content-admin-wrapper">
            <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/brands" element={<BrandPage />} />
                <Route path="/admin/categories" element={<CategoryPage />} />
                <Route path="/admin/sizes" element={<SizePage />} />
                <Route path="/admin/colors" element={<ColorPage />} />
                <Route path="/admin/shoes" element={<ShoesPage />} />
                <Route path="/admin/sales" element={<SalePage />} />
                <Route path="/admin/orders" element={<OrderPage />} />
                <Route path="/admin/requests" element={<RequestPage />} />
                <Route path="/" element={<Navigate to="/admin/dashboard" replace/>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    );
});

export default TheContentAdmin;