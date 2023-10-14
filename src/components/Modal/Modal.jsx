import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import { FaRegHeart, FaHeart } from 'react-icons/fa6'
import { BiFoodTag } from 'react-icons/bi'
import axios from 'axios';

export default function Modal({ setShowModal, ids, data }) {
    useEffect(() => {
     
    }, [])

    if (data === "") {
        return <>no data available</>
    }
    return (
        <div className='modal-open'>

            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button> */}

            <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "block", background: "#0008" }}>
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">


                        <div className='fs-5 position-absolute top-0 start-0 ms-3 mt-2' style={{ opacity: ".5", zIndex: '5' }}><BiFoodTag color='green' /></div>

                        <button type="button" class="btn-close position-absolute end-0 top-0 mt-3 me-3" style={{ zIndex: "5" }} data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                        <div class="modal-body">
                            <div className='w-100  position-relative text-center'>
                                <div className='fs-5 position-absolute bottom-0 end-0 me-3 mt-2' style={{ opacity: ".8" }}><FaRegHeart color='red' /></div>

                                {/* <img src="https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:product-header-desktop?wid=830&hei=456&dpr=off" class="img-fluid" alt="" /> */}
                                <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/jpeg/350/1686654778352762.jpeg" class="img-fluid " alt="" />
                                {/* <img src={data.imgUrl} class="img-fluid " alt="" /> */}
                            </div>
                            <div className=''>
                                <p className='m-0 text-secondary'> Beverage  </p>
                                <Row className='g-2'>
                                    <Col md="8" className=''>
                                        <h1 className='fs-2 m-0'>Quarter Pounder </h1>
                                        <h1 className='fs-4  m-0 ms-1'>$ 350</h1>
                                    </Col>
                                    <Col md="4" className=''>
                                        <button className='btn btn-primary text-white container'>add to cart</button>
                                        x 1

                                    </Col>
                                </Row>
                                <p className='text-secondary mt-2 px-2 lh-sm fw-lig' style={{ fontSize: '14px' }}>Each Double Quarter Pounder with Cheese features two quarter pound* 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
