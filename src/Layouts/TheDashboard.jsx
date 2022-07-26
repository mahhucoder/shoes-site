import React, { memo, useState } from 'react';
import { FcTrademark, FcParallelTasks, FcKindle, FcOnlineSupport } from 'react-icons/fc'
import { FaArrowsAltH, FaAngleDoubleRight } from 'react-icons/fa'
import { MdColorLens } from 'react-icons/md'
import { GiShoebillStork } from 'react-icons/gi'
import BaseDashboardItem from '../Base/BaseDashboardItem';
import { listDashboard } from '../assets/Resource/ConstList';

const TheDashboard = memo((props) => {

    const [isShowDashboardMenu,setIsShowDashboardMenu] = useState(true)

    return (
        <div className={isShowDashboardMenu ? 'nm-dashboard-menu-expand nm-dashboard' : 'nm-dashboard nm-dashboard-menu-miniature'}>
            {
                listDashboard.map((itemDashboard, index) =>
                    <BaseDashboardItem path={itemDashboard.path} text={itemDashboard.text} key={index}>
                        {
                            index === 0 ? <FcTrademark size={24} />
                            : index === 1 ? <FcParallelTasks size={24} />
                            : index === 2 ? <FaArrowsAltH size={24} />
                            : index === 3 ? <MdColorLens size={24} />
                            : index === 4 ? <GiShoebillStork size={24} />
                            : index === 5 ? <div style={{ color: 'red' }}>Sale</div>
                            : index === 6 ? <FcKindle size={24} />
                            : index === 7 ? <FcOnlineSupport size={24} />
                            : null
                        }
                    </BaseDashboardItem>
                )
            }
            <div onClick={() => setIsShowDashboardMenu(!isShowDashboardMenu)} className="nm-toggle-dashboard-menu">
                <FaAngleDoubleRight size={24} />
                <div>{!isShowDashboardMenu ? 'Mở rộng' : 'Thu gọn'}</div>
            </div>
        </div>
    );
});

export default TheDashboard;