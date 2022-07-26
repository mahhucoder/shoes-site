import React, { memo } from 'react';
import "./../Css/Pages/BrandPage.css"
import TheDashboard from '../Layouts/TheDashboard'

const BrandPage = memo((props) => {
    return (
        <div className='nm-brand-page-container-bg'>
            <div className="nm-brand-page-container">
                <div className="nm-brand-page-title">Thương hiệu</div>

                <div className="nm-brand-content">
                    <div className="nm-brand-grid">
                        <div className="nm-brand-table"></div>
                        <div className="nm-brand-paging"></div>
                    </div>

                    <TheDashboard />
                </div>
            </div>
        </div>
    );
});

export default BrandPage;