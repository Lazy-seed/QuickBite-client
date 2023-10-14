import React, { useEffect, useState } from 'react'
import { Card } from 'reactstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'
import { BiFoodTag } from 'react-icons/bi'
import axios from 'axios';
import './productCard.scss'
import Modal from '../Modal/Modal';

export default function ProductCard({  data }) {
    // useEffect(() => {
    //     axios.get(`http://localhost:8000/v1/api/getOneProduct/${id}`).then((res) => {
    //         // console.log(res.data.product);
    //         setdata(res.data.product)
    //     })
    // }, [])
    // const [data, setdata] = useState('')
    const [ShowModal, setShowModal] = useState(false)
    if (data === '') {
        return <>loading....</>
    }

    return (
        <div>

            <Card className=' product-card-box d-flex flex-row align-items-center border p-2 m-0 '>
                <div className='fs-5 position-absolute top-0 end-0 me-3 mt-2' style={{ opacity: ".5" }}><BiFoodTag color='green' /></div>

                <div className='img-box' >
                    {/* <img src="https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-4-product-tile-desktop" alt="" width={110} /> */}
                    <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/228/BSPWRP-74-1-74.png" alt="" />
                    {/* <img src={data.imgUrl} alt="error" /> */}
                </div>
                <div className='d-flex flex-column justify-content-between w-100 '>
                    <div className='ms-3 me-3'>
                        <h4 className='fs-5 mb-0 '>{"data.name"}    </h4>
                        {/* <p className=' text-secondary m-0 fw-lig'>Quarter Pounder Quarter.....  </p> */}
                        <h6 className='text-black fw-bold mt-2'>₹ {"data.price"}</h6>
                    </div>
                    <div className='d-flex justify-content-between mx-3 me-2'>
                        <button onClick={() => setShowModal(true)} className='btn btn-outline-primary  fs-6 px-3 d-flex justify-content-center align-items-center' style={{ height: "26px", opacity: ".8" }}><h6 className='m-0 p-0'> view</h6></button>
                        <div className='fs-5' style={{ opacity: ".8" }}><FaRegHeart color='red' /></div>
                    </div>
                </div>
            </Card>

            {ShowModal ? <Modal setShowModal={setShowModal}  data={data} /> : ''}

        </div>

    )
}
