import React from 'react'
import './order.scss'
import { Card } from 'reactstrap'

export default function Orders() {
    return (
        <div className='orders mt-5'>

            <h2 className='fw-bold'>Orders</h2>

            {
                [1, 1, 2, 1, 1].map((data) => {
                    
                    return (
                        <div className='mt-3'>
                        {data===2 ? <h5 className='mt-4 fw-bold'>21 aug</h5>:''}
                            <Card className=' product-card-box position-relative d-flex flex-row align-items-center border p-2 m-0 '>
                                <h6 className='position-absolute end-0 top-0 mt-3 me-2'>Status : <span className='bg-success text-white rounded-3 p-1 px-2'>Preparing</span></h6>
                                <div className='img-box' >
                                    {/* <img src="https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-4-product-tile-desktop" alt="" width={110} /> */}
                                    <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/228/BSPWRP-74-1-74.png" alt="" />
                                </div>
                                <div className='d-flex flex-column justify-content-between w-100 '>
                                    <div className='ms-3 me-3'>
                                        <h4 className='fs-5 mb-0 '>OrderID : #267654981    </h4>
                                        <h6 className='text-black  mt-2'>burgre x 1, missalpav x 3, rabdi ...</h6>
                                    </div>
                                    <div className='d-flex gap-5 justify-content-between mx-3 me-2'>
                                        <h6 className='fw-bold'>tolal rs 3500</h6>
                                        <button className='btn btn-primary text-white fs-6 px-3 ' style={{ height: "26px", display: "flex", justifyContent: "center", alignItems: "center", opacity: ".8" }}><h6 className='m-0 p-0'> view</h6></button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )
                })
            }





        </div>
    )
}
