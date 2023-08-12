import React, { useState } from 'react';
import Model from '../Model'
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Mainscreen/Cart.js';
import { useCart } from './ContextReducer.js';
import Badge from 'react-bootstrap/Badge';

function Navbar() {

  const navigate = useNavigate();
  let data = useCart();
  const [cartView, setCartView] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
        style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">Foodie</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>

              </li>
              {(localStorage.getItem('autoToken')) ?
                <li className='nav-item'>
                  <Link className='nav-link active fs-5' aria-current='page' to="/myorder">My Order</Link>
                </li> : ""}
            </ul>
            {(localStorage.getItem('autoToken')) ?
              <form className='d-flex'>
                <Link className='btn bg-white text-success mx-1' to="/login">Login</Link>
                <Link className='btn bg-white text-success mx-1' to="/signin">signin</Link>
              </form> :
              <div>
                <div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true) }}>
                  My Cart {" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                  
                </div>
                {cartView ? <Model onClose={() => setCartView(false)}><Cart></Cart></Model> : ""}
                
                <div className='btn bg-white text-success mx-2' onClick={handleLogout}>
                  Logout
                </div>
              </div>

            }

          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;