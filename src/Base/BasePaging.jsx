import React, { memo } from 'react';
import "../Css/Base/BasePaging.css";
import BaseDropdown from './BaseDropdown';

const BasePaging = memo((props) => {
    const { totalRecord } = props

    return (
        <div className="nm-shoes-paging">
            <div className="nm-shoes-paging-total-record">
                {totalRecord}
            </div>

            <div className="nm-shoes-paging-func">
                <BaseDropdown />
            </div>
        </div>
    );
});

export default BasePaging;