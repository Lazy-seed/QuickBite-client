import React from 'react'
import { Col, Row, Card } from 'reactstrap'
import { BiFoodTag } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import List from './list/List'
import Bill from './list/Bill'

export default function Cart() {
    return (
        <div className='cart'>
            <Row >
                <Col lg="8" className='bg-'>
                    <List />
                </Col>


                <Col lg="4" className=''>
                    <Bill />
                </Col>
            </Row>
        </div>
    )
}
