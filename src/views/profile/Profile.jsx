import React from 'react'
import { Col, Row } from 'reactstrap'
import Nav from './components/nav/Nav'
import Info from './components/info/Info'
import { Outlet } from 'react-router-dom'

export default function Profile() {
    return (
        <div>
            <Row >
                <Col md="4" className='bg-'>
                    <Nav />
                </Col>


                <Col md="8" className='bg-'>
                    {/* <Info /> */}
                    <Outlet/>
                </Col>
            </Row>
        </div>
    )
}
