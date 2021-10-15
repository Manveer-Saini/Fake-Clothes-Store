import React from 'react';
import { Link, navigate } from '@reach/router';
import cart from '../images/cart.jpeg';
import fake from '../images/fake.png';


const NavBar = () =>{
    
    return (
        <div style={{ display:'flex', justifyContent:'space-around'}}> 
            <img src={fake} alt="fake"></img>       
            <Link to="/">Mens</Link> |
            <Link to="/">Women</Link> |
            <Link to="/">User Profile</Link>
            <Link to="/mycart"><img src ={cart} alt="cart"></img></Link>
        </div>

    )
}
export default NavBar;