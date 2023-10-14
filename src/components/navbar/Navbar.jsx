import React from 'react'
import { Link } from 'react-router-dom'
import { BsHandbag, BsBoxSeam } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import { MdRestaurantMenu } from 'react-icons/md'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'

import img from './img/profile.jpg'
import cart from './img/cooking.png'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
export default function Navbar() {
    return (
        <div className='home_navbar' >
            <nav className=' mt-4 py-2 d-flex justify-content-between align-items-center'>
                <Link to='/'><h1 className='display-5 fw-bolder m-0 text-black'>QuickBite</h1></Link>
                {/* <div className='fs-5 gap-3 m-0 d-none d-md-flex  '>
                    <Link to='/'>Home</Link>
                    <Link to='/menus'>Menu</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>About</Link>
                    <NavLink to="/tasks">
                        {({ isActive }) => (
                            <span className={isActive ? "active_link" : ""}>Tasks</span>
                        )}
                    </NavLink>
                </div> */}
                <div>
                    <NavLink to='/menu' className='fs-3 m-0 d-flex  justify-content-center  align-items-center text-dark ' >
                        < MdRestaurantMenu  />
                        <p className='fs-4 m-0 ms-2 fw-bold  '>See Menu</p>
                    </NavLink>
                </div>
                <div class="search w-50">
                    <input placeholder="Search..." type="text" />
                    <button type="submit">Go</button>
                </div>



                {/* <div className='d-flex gap-3'>
                    <div><button className='btn btn-outline-primary  px-4 py-2'> Login</button></div>
                    <div><button className='btn btn-primary text-white px-4 py-2'> SignUp</button></div>
                </div> */}

                <div className='d-flex gap-4 justify-content-center align-items-center'>

                    <Link className='fs-3 m-0 ' >< FaHeart color={"#FF165D"} /></Link>
                    <Link to='/cart' className='fs-3 m-0'><img src={cart} alt="" width={35} /></Link>
                    <Link to='/profile/info' className=''>
                        <img src={img} alt="" srcset="" width={80} />
                    </Link>
                </div>
            </nav>
        </div>
    )
}
