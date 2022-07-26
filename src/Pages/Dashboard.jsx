import React, { memo, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Css/Pages/Dashboard.css";
import { CommonJS } from '../JS/CommonJS';
import TheDashboard from '../Layouts/TheDashboard';

const Dashboard = memo((props) => {

    const now = new Date()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const minDate = `1/${now.getMonth()+1}/${now.getFullYear()}`
    const maxDate = `30/${now.getMonth()+1}/${now.getFullYear()}`

    const handleSelectDate = (type,selectDate) => {
        if(type === 'start'){
            if(CommonJS.compareDate(selectDate,endDate) !== 0){
                alert('Ngày bắt đâu phải nhỏ hơn ngày kết thúc !')
            }else{
                setStartDate(selectDate)
            }
        }

        if(type ==='end'){
            if(CommonJS.compareDate(selectDate,startDate) !== 1){
                alert('Ngày bắt kết thúc phải lớn hơn ngày bắt đầu !')
            }else{
                setEndDate(selectDate)
            }
        }
    }

    return (
        <div className="nm-dashboard-container">
            <div className="nm-dashboard-title">Quản lý website Fly Shoes</div>
            <div className="nm-dashboard-content">
                <div className="nm-dashboard-analytics">
                    <div className="nm-dashboard-chart"></div>
                    <div className="nm-dashboard-chart-title">
                        Thống kê doanh thu từ ngày <b>{CommonJS.getDate(startDate)}</b> - <b>{CommonJS.getDate(endDate)}</b>
                    </div>
                    <div className="nm-dashboard-control-chart">
                        <div className="nm-dashboard-date-input-start">
                            <div>Ngày bắt đầu</div>
                            <DatePicker 
                                minDate={new Date(minDate)}
                                selected={startDate} 
                                onChange={(date) => handleSelectDate('start',date)} 
                                className="nm-dashboard-control-date-picker"
                                maxDate={new Date(maxDate)}
                            />
                        </div>

                        <div className="nm-dashboard-date-input-end">
                            <div>Ngày kết thúc</div>
                            <DatePicker 
                                type="date"
                                selected={endDate} 
                                onChange={(date) => handleSelectDate('end',date)} 
                                className="nm-dashboard-control-date-picker"
                                maxDate={new Date('7/30/2022')}
                                minDate={new Date('7/1/2022')}
                            />
                        </div>
                    </div>
                </div>
                <TheDashboard />
            </div>
        </div>
    );
});

export default Dashboard;