import React, { memo } from 'react';
import '../Css/Base/BaseDashboardItem.css'
import {Link} from 'react-router-dom'

const BaseDashboardItem = memo((props) => {
    const {children,text,path} = props

    return (
        <div className="nm-dashboard-item-wrapper">
            <Link to={path}>
                <div className="nm-dashboard-item-icon">
                    {children}
                </div>

                <div className="nm-dashboard-item-text">{text}</div>
                <div className="nm-dashboard-item-tooltip">{text}</div>
            </Link>
        </div>
    );
});

export default BaseDashboardItem;