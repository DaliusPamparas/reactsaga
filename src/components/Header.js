import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <div>
          
            <Link to='/'>1Hem</Link>
            <Link to='/varukorg'>Varukorg</Link>
     
        </div>
    );
};

export default Header;