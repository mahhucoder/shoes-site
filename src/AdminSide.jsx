import React, { memo } from 'react';
import './Css/index.css';
import TheContentAdmin from './Layouts/TheContentAdmin';
import TheHeaderAdmin from './Layouts/TheHeaderAdmin';

const AdminSide = memo(() => {
    return (
        <div className="nm-admin-side-container">
            <TheHeaderAdmin />
            <TheContentAdmin />
        </div>
    );
});

export default AdminSide;