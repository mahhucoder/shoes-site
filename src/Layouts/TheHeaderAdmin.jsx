import React, { memo } from 'react';
import '../Css/Layouts/TheHeaderAdmin.css'
import {FaPowerOff} from 'react-icons/fa'

const TheHeaderAdmin = memo((props) => {
    return (
        <div className="nm-header-admin-wrapper">
            <div className="nm-header-top"></div>
            <div className="nm-header-bottom">
                <div className="nm-header-admin-name">Lê Mạnh Hùng</div>
                <div className="nm-header-btn-logout">
                    <FaPowerOff color='#F28B09' size={24} />
                    <div className="nm-header-btn-logout-tooltip">Đăng xuất</div>
                </div>
            </div>
        </div>
    );
});


export default TheHeaderAdmin;