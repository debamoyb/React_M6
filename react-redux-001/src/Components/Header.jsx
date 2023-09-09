import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div id='nav'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/service'>Service</Link>
    </div>
  )
}

export default Header;