// src/components/Navbar.tsx
import React, { useState } from 'react';
import './navbar.css';
import log2 from '../../assets/log2.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<string>('shop');

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={log2} alt="Logo" />
        {/* <p> SHOPPER</p> */}
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to="/">Shop</Link> 
          {menu === 'shop' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('Men')}>
          <Link style={{ textDecoration: 'none' }} to="/men-items">Men</Link> 
          {menu === 'Men' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: 'none' }} to="/women-items">Women</Link>
          {menu === 'womens' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to="/kids-items">Kids</Link> 
          {menu === 'kids' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('bags')}>
          <Link style={{ textDecoration: 'none' }} to="/accessories">Bags</Link> 
          {menu === 'bags' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('shoes')}>
          <Link style={{ textDecoration: 'none' }} to="/accessories">Shoes</Link>
          {menu === 'shoes' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('blogs')}>
          <Link style={{ textDecoration: 'none' }} to="/blogs">Blogs</Link>
          {menu === 'blogs' ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="Cart" /></Link>
      </div>
      <div className="nav-cart-count">0</div>
    </div>
  );
};

export default Navbar;
