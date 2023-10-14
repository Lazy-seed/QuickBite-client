import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import ProductCard from '../../../../components/card/ProductCard'
import { BsFire } from 'react-icons/bs'
import axios from 'axios'

export default function Section1() {

    useEffect(() => {
        axios.get('http://localhost:8000/v1/api/getRandomProducts/5').then((res) => {
            // console.log(res.data.products)
            setlist(res.data.products)
        })
    }, [])

    const [list, setlist] = useState('')
    const [Short, setShort] = useState('')
    if (list === '') {
        return null
    }
    return (
        <div className=' mt-5'>
            <div className='d-flex gap-2  flex-wrap '>
                <button onClick={() => setShort("")} className={`btn  border shadow-sm py-2   px-4 fs-6 fw-bold d-flex align-items-center  ${Short === "" ? 'btn-high' : 'btn-outline-black'}`}><BsFire className='me-1' />Hot Deal</button>
                <button onClick={() => setShort("todays")} className={`btn  border shadow-sm py-2  px-4 fs-6 fw-bold ${Short === "todays" ? 'btn-high' : 'btn-outline-black'}`}>Todays fav</button>
                <button onClick={() => setShort("popular")} className={`btn  border shadow-sm py-2  px-4 fs-6 fw-bold ${Short === "popular" ? 'btn-high' : 'btn-outline-black'}`}>Popular</button>
                <button onClick={() => setShort("liked")} className={`btn  border shadow-sm py-2  px-4 fs-6 fw-bold ${Short === "liked" ? 'btn-high' : 'btn-outline-black'}`}>Most Liked</button>
                <button onClick={() => setShort("demo")} className={`btn  border shadow-sm py-2  px-4 fs-6 fw-bold ${Short === "demo" ? 'btn-high' : 'btn-outline-black'}`}>Demo</button>
            </div>
            <Row className='g-3 mt-3 px-3'>

                {
                    list.map((data) => {
                        return (
                            <Col lg="4" md="6" sm="6">
                                <ProductCard data={data} />
                            </Col>
                        )
                    })
                }

            </Row>
        </div>
    )
}
