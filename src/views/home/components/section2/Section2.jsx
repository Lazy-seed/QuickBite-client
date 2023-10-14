import React from 'react'
import { Col, Row } from 'reactstrap'
import ProductCard from '../../../../components/card/ProductCard'

export default function Section2() {
    return (
        <div className=' mt-5'>
            <div className=''>
                <h1 className='fs-1 py-2 text-dark  fs-6 fw-bold m-0' >Hot Deal</h1>
            </div>
            <Row className='g-3  px-3'>
                <Col lg="4" md="6" sm="6">
                    <ProductCard />
                </Col>
                <Col lg="4" md="6" sm="6">
                    <ProductCard />
                </Col>
                <Col lg="4" md="6" sm="6">
                    <ProductCard />
                </Col>
                <Col lg="4" md="6" sm="6">
                    <ProductCard />
                </Col>
                <Col lg="4" md="6" sm="6">
                    <ProductCard />
                </Col>
                
               
            </Row>
        </div>
    )
}
