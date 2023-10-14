import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import ProductCard from '../../components/card/ProductCard'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Menu() {

    useEffect(() => {
        axios.get('http://localhost:8000/v1/api/getByCatg/burger').then((res) => {
            // console.log(res.data.catgPtoducts)
            setlist(res.data.catgPtoducts)
        })
    }, [])
    const [list, setlist] = useState('')
   if (list === '') {
    return null
   }
    return (
        <div className=' mt-5'>
            <div className='d-flex justify-content-center gap-2  flex-wrap '>
                <button  className='btn  border shadow-sm py-2 text-dark  px-4 fs-6 fw-bold'>Burger</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Dinks</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Popular</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Most Liked</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Demo</button>
                <button  className='btn  border shadow-sm py-2 text-secondary  px-4 fs-6 fw-bold'>Hot Deal</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Todays fav</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Popular</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Most Liked</button>
                <button  className='btn  border shadow-sm py-2 text-secondary px-4 fs-6 fw-bold'>Demo</button>
            </div>
            <Row className='g-3 mt-3 px-3'>

                {
                    list.map((data) => {
                        return (
                            <Col lg="4" md="6" sm="6">
                                <ProductCard   data={data} />
                            </Col>
                        )
                    })
                }


            </Row>
        </div>
    )
}
