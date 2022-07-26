import React, { memo } from 'react';
import "../Css/Base/BaseButton.css"

const BaseButton = memo((props) => {
    const {label,type} = props
    
    return (
        <div className={type == 'contain' ? 'nm-button nm-button-contain' : 'nm-button nm-button-outline'}>
            {label}
        </div>
    );
});

export default BaseButton;