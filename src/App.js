import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Navbar from './components/navbar/Navbar';
import Menu from './views/menu/Menu';
import Home from './views/home/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './views/profile/Profile';
import Info from './views/profile/components/info/Info';
import Orders from './views/profile/components/orders/Orders';
import NotFound from './components/notFound/NotFound';
import { Col, Row } from 'reactstrap';
import Cart from './views/cart/Cart';
import Address from './views/address/Address';

function App() {
  const [ShowModal, setShowModal] = useState(false)
  return (
    <div className='App '>
      <Row className='justify-content-center m-0 p-0'>
        <Col md="10" xs="12">

          {ShowModal ? <Modal setShowModal={setShowModal} /> : ''}

          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/address' element={<Address />} />


            <Route path='/profile' element={<Profile />} >
              <Route path='/profile/info' element={<Info />} />
              <Route path='/profile/orders' element={<Orders />} />

            </Route>
            <Route path='*' element={<NotFound />} />

          </Routes>

          {/*  */}


        </Col>

      </Row>


    </div>
  );
}

export default App;
