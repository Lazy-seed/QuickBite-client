import React from 'react'
import { Col, Row, Card } from 'reactstrap'
import { BiFoodTag } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

export default function List() {
    return (
        <div className='mt-5'>
            <h3 className='fw-bold'>Orders </h3>


            {[1, 1, 1, 1, 1].map(() => {
                return (
                    <Card className=' product-card-box position-relative d-flex flex-row align-items-center border p-2 m-1 my-3 '>
                        <div className='fs-5 position-absolute top-0 end-0 me-3 mt-2' style={{ opacity: ".5" }}><BiFoodTag color='green' /></div>
                        <div className='fs-4 position-absolute bttom-0 end-0 me-3 mt-2' style={{ opacity: ".5" }}><MdDeleteOutline color='black' /></div>
                        <div className='img-box' >
                            <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/228/BSPWRP-74-1-74.png" alt="" />
                        </div>
                        <div className='d-flex flex-column justify-content-between w-100 ms-3'>
                            <div className='ms-3 me-3'>
                                <h3 className=' mb-0 '>burger king sads    </h3>
                                <h5 className='d-flex justify-content-start gap-3  align-items-center'>rs 350  <span className='fs-5'>x   4</span></h5>
                            </div>
                            <div className=' mx-3 me-2'>
                                <div class="btn-group  mt-1  align-items-center" role="group" aria-label="Basic outlined example">
                                    <button type="button" class="btn  ">-</button>
                                    <div type="" class="fw-bold px-3 ">1</div>
                                    <button type="button" class="btn ">+</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}
