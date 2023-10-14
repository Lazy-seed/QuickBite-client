import React from 'react'
import { Card } from 'reactstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'
import { BiFoodTag } from 'react-icons/bi'


export default function Card2() {
    return (
        <Card className='  d-flex flex-column align-items-center border p-2 m-0 '>
            <div className='fs-5 position-absolute top-0 start-0 ms-3 mt-2' style={{ opacity: ".5" }}><BiFoodTag color='green' /></div>

            <div className='img-box' >
                <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/228/BSPWRP-74-1-74.png" alt="" />
            </div>
            <div className='d-flex flex-column justify-content-between w-100 '>
                <div className='ms-3 me-3'>
                    <h4 className='fs-5 mb-0 text-center'>Quarter Pounder Quarter    </h4>
                    {/* <p className=' text-secondary m-0 fw-lig'>Quarter Pounder Quarter.....  </p> */}
                    <h6 className='text-primary fw-bold mt-2'>$ 230</h6>
                </div>
                <div className='d-flex justify-content-between mx-3 me-2'>
                    <button className='btn btn-outline-primary text-primary fs-6 px-3 ' style={{ height: "26px", display: "flex", justifyContent: "center", alignItems: "center", opacity: ".8" }}><h6 className='m-0 p-0'> view</h6></button>
                    <div className='fs-5' style={{ opacity: ".8" }}><FaRegHeart color='red' /></div>
                </div>
            </div>
        </Card>
    )
}
