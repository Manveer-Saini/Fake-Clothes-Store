import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Link } from "@reach/router";
import Container from "react-bootstrap/esm/Container";

const ReviewOrder = (props) => {

    const [cartList, setCartList] = useState([]);

    useEffect((props) => {
        axios.get('http://localhost:8000/api/items/reviewOrder')
        .then((res) => {
            console.log(res.data);
            setCartList(res.data);
        })
        .catch((err)=>console.log(err))
    }, [])

    return(
        // Put Header Code Here from Fumie's Code
        <div>
            
            <p>We are not a real consumer website and cannot actually send you anything.
            Therefore, we will recommend you go back to the home page and check our our project again!</p>
            <button><Link to={'/'}><span>Back to Home</span></Link></button>
            <button><Link to={'/api/user/logout'}><span>Logout</span></Link></button>
        </div>
        
    )
}
export default ReviewOrder;


