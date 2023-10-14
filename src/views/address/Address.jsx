import React from 'react'
import { Col, Row, Card } from 'reactstrap'
import { BiFoodTag } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'



export default function Address() {
    return (
        <div className='address'>
            <Row >
                <Col lg="8" className=''>
                    <div className='mt-5'>
                        <h3 className='fw-bold'>Address</h3>
                        <Row className='mt-5 px-5'>
                            <Col md="6" className='mt-4'>
                                <h4>House</h4>
                                <input type="text" className='input' name="" id="" />
                            </Col>
                            <Col md="6" className='mt-4'>
                                <h4>Area</h4>
                                <input type="text" className='input' name="" id="" />
                            </Col>
                            <Col md="6" className='mt-4'>
                                <h4>City</h4>
                                <input type="text" className='input' name="" id="" />
                            </Col>
                            <Col md="6" className='mt-4'>
                                <h4>Pincode</h4>
                                <input type="text" className='input' name="" id="" />
                            </Col>
                        </Row>
                        <div className='text-center mt-5 px-2'>
                            <button className='btn border w-75 text-white rounded-4 fs-3' style={{ background: "#7635f9" }}>Continue to Pay</button>
                        </div>
                    </div>
                </Col>


                <Col lg="4" className=''>
                    <div className='mt-5 '>
                        <h3 className='fw-bold'>Bill</h3>
                        <div className='border rounded-4 py-4 px-4  mt-5'>
                            <ul className='p-0 mb-2 mt-3'>
                                <li className='d-flex justify-content-between  align-items-center '>
                                    <h4>Items </h4>
                                    <h4> ₹ 300   </h4>
                                </li>
                                <li className='d-flex justify-content-between  align-items-center '>
                                    <h4>Delivery </h4>
                                    <h4>+ ₹ 300   </h4>
                                </li>

                                <li className=' '>
                                    <h4 className='fw-bold'>Applied Coupon </h4>
                                    <h5 className=''>ARD440 </h5>
                                </li>

                                <li className='d-flex justify-content-between  align-items-center mt-2'>
                                    <h4>Discount </h4>
                                    <h4>- ₹ 300   </h4>
                                </li>
                                <hr />
                                <li className='d-flex justify-content-between  align-items-center '>
                                    <h4>Payable </h4>
                                    <h4> ₹ 980   </h4>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
