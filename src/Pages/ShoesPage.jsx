import React, { memo } from 'react';
import TheDashboard from '../Layouts/TheDashboard';
import "../Css/Pages/ShoesPage.css"
import BaseTable from '../Base/BaseTable';
import { fieldShoesRender } from '../assets/Resource/ConstList';
import BaseButton from '../Base/BaseButton';
import BasePaging from '../Base/BasePaging';

const ShoesPage = memo((props) => {
    return (
        <div className="nm-shoes-page-container">
            <div className="nm-shoes-content">
                <div className="nm-shoes-page-header">
                    <div className="nm-shoes-page-title">Giày</div>

                    <BaseButton label="Nhập giày" type="contain"/>
                </div>

                <div className="nm-shoes-grid">
                    <BaseTable 
                        api="https://62df92df976ae7460beed2d2.mockapi.io/api/v1/shoes" 
                        listFieldRender={fieldShoesRender} 
                    />
                    
                    <BasePaging totalRecord={100} />
                </div>

            </div>
            <div>
                <TheDashboard />
            </div>
        </div>
    );
});

export default ShoesPage;