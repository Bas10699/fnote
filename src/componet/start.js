import React, { useState } from "react"
import Header from "./header";
import "../App.css"
import firebase, { db } from '../firebase'
import moment from 'moment'
import Swal from 'sweetalert2'
const Start = () => {
    const [detail, setDetail] = useState('');
    const [money, setMoney] = useState('');

    const AddData = async () => {
        if (detail && money) {
            await db.collection("data").add({
                detail: detail,
                money: money,
                date: moment().format('L'),
                time: moment().format('LT')
            })
                .then(function () {
                    console.log("Document successfully written!");
                    Swal.fire({
                        icon: 'success',
                        title: 'บันทึกข้อมูลสำเร็จ',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    setMoney('')
                    setDetail('')

                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        } else {
            alert('กรุณากรอกข้อมูลให้ครบ!')
        }



    }

    return (
        <div>
            <Header />
            <div className="container pt-5">

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">รายละเอียด</label>
                    <textarea type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)} />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">จำนวนเงิน</label>
                    <input type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={money}
                        onChange={(e) => setMoney(e.target.value)} />
                </div>
                <button className="btn btn-primary float-right"
                    onClick={AddData}>บันทึก</button>


            </div>
        </div>

    )
}
export default Start