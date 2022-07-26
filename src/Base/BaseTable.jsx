import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { listShoes } from '../assets/Resource/ConstList';
import "../Css/Base/BaseTable.css"

const BaseTable = memo((props) => {

    const {api,listFieldRender} = props
    const [data,setData] = useState([])
    const [isShowMenuContext,setIsShowDashboardMenu] = useState(false)

    useEffect(() => {

        // const getData = async () => {
        //     await axios.get(api)
        //         .then(res => {
        //             console.log(res);
        //             setData(res.data)
        //         })
        //         .catch(err => console.log(err))
        // }

        // getData()

        setData(listShoes)

    },[api,listFieldRender])

    return (
        <div className="nm-table-wrapper">
            <table border="0" cellSpacing="0">
                <thead>
                    <tr>
                        {
                            listFieldRender.map((field,index) => {
                                return (
                                    <th className={field.textPosition} key={index}>{field.label}</th>
                                )
                            })
                        }
                        <th className="nm-text-center">CHỨC NĂNG</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((row,index) => {
                            return (
                                <tr key={index}>
                                    {
                                        listFieldRender.map((field,index) => {
                                            return (
                                                <td className={field.textPosition} key={index}>
                                                    {field.fieldName == "ImageUrl" 
                                                    ? <div className="nm-image-td" style={{backgroundImage: `url("${row[field.fieldName]}")`}}></div> 
                                                    : field.fieldName == "Price" ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(row[field.fieldName])
                                                    : row[field.fieldName]}
                                                </td>
                                            )
                                        })
                                    }
                                    <td className="nm-text-center">
                                        <div>
                                            <div style={{color:'#F28B09'}}>Sửa</div>
                                            <div style={{color:'red'}}>Xóa</div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
});

export default BaseTable;