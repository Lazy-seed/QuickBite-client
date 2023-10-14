import React from 'react'
import img from './profile.jpg'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import './nav.scss'
export default function Nav() {
    return (
        <div className='proflile_navbar'>
            <div className='text-center mt-5'>
                <img src={img} alt="" srcset="" width={200} />
                <div>
                    <h3>Lisa Manabon</h3>
                </div>
            </div>
            <hr className='mt-5' />
            <div>
                <h5>Actions</h5>
                <ul className='fs-4 d-flex  flex-column gap-2 mt-2'>
                    
                    <Link to='/profile/info' className='text-black w-100'>
                        <li className=''>
                            <FiEdit />  Profile
                        </li>
                    </Link>
                    <Link to='/profile/orders' className='text-black w-100'>
                        <li className=''>
                            <FiEdit />  Orders
                        </li>
                    </Link>
                    <Link to='/profile/info' className='text-black w-100'>
                        <li className=''>
                            <FiEdit />  Address
                        </li>
                    </Link>
                    <Link to='/profile/info' className='text-black w-100'>
                        <li className=''>
                            <FiEdit />  Logout
                        </li>
                    </Link>
                   

                </ul>
            </div>
        </div>
    )
}
