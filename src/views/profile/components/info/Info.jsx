import React from 'react'
import { Col, Row } from 'reactstrap'
import img from '../nav/profile.jpg'
import './info.scss'
export default function Info() {
    return (
        <div className='user_info mt-5'>
            <div className='text-center'>
                <img src={img} alt="" srcset="" width={200} />
            </div>
            <Row className='justify-content-center  mt-5'>

                <Col md="4">
                    <label for="" class="form-label">First Name</label>
                    <input type="text" class="input " placeholder="Lisa " />
                </Col>
                <Col md="4">
                    <label for="" class="form-label">Last Name</label>
                    <input type="text" class="input" placeholder="manbon" />
                </Col>
            </Row>

            <Row className='justify-content-center mt-3'>

                <Col md="4">
                    <label for="" class="form-label">Phone no.</label>
                    <input type="text" class="input" placeholder="Lisa " />
                </Col>
                <Col md="4">
                    <label for="" class="form-label">Email</label>
                    <input type="text" class="input" placeholder="manbon" />
                </Col>
            </Row>

            <div className='text-center mt-5'>
                <button className='btn btn-success '>Edit Profile</button>
            </div>
        </div>
    )
}
