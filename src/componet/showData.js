import React, { useEffect, useState, useCallback } from 'react'
import Header from './header'
import { db } from '../firebase'
import Swal from 'sweetalert2'

const ShowData = () => {

    const [count, setcount] = useState(0);
    const [data, setData] = useState([]);
    const forceUpdate = () => setcount(count + 1)

    useEffect(() => {
        let citiesRef = db.collection('data');
        console.log('gg')
        citiesRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }

                const updatedsnapshot = snapshot.docs.map(docSnapshot => docSnapshot.data());
                setData(snapshot.docs);

            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }, [count])

    const deleteData = async (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                db.collection("data").doc(id).delete().then(function () {
                    console.log("Document successfully deleted!");
                    Swal.fire({
                        position: 'Deleted!',
                        icon: 'success',
                        title: 'Your file has been deleted.',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    forceUpdate()
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });

            }
        })


    }

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='pt-5'>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">รายละเอียด</th>
                                <th scope="col">ราคา</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((element, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{element.data().detail}</td>
                                        <td>{element.data().money}</td>
                                        <td><button className="btn btn-warning btn-sm">แก้ไข</button> <button onClick={() => deleteData(element.id)} className="btn btn-danger btn-sm">ลบ</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
export default ShowData