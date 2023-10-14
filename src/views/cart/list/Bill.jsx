import React from 'react'
import { Link } from 'react-router-dom'

export default function Bill() {
    return (
        <div className='mt-5 '>
            <h3>Bill</h3>
            <div className='border rounded-4 py-4 px-4 '>
                <ul className='p-0 mb-2 mt-3'>
                    <li className='d-flex justify-content-between  align-items-center '>
                        <h4>Items </h4>
                        <h4> ₹ 300   </h4>
                    </li>
                    <li className='d-flex justify-content-between  align-items-center '>
                        <h4>Delivery </h4>
                        <h4>+ ₹ 300   </h4>
                    </li>

                    <li className='d-flex justify-content-between  align-items-center '>
                        <h4>Coupons </h4>
                    </li>
                    <div className='d-flex'>
                        <input type="text" className='input fs-4 rounded-end-0 ' />
                        <button className='btn btn-  rounded-start-0 fs-5 text-white'>Apply </button>
                    </div>
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
            <div className='text-center mt-3 px-2'>
                <Link to='/address' className='btn border w-100 text-white rounded-4 fs-3' style={{ background: "#7635f9" }}>Continue</Link>
            </div>
        </div>
    )
}
