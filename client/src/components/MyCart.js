import React, {useState, useEffect} from "react";
import {Link} from '@reach/router';
import axios from 'axios';
import cart from '../images/cart.jpeg';
import fake from '../images/fake.png';
import NavBar from '../components/NavBar.js';
// import DeleteItem from "./DeleteItem"; Need to create this still.

const MyCart = (props) =>{

    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/items/myCart')
        .then((res) => {
            console.log(res.data);
            setCartList(res.data);
        })
        .catch((err)=>console.log(err))
    }, [])
    // Put a Delete item filter in here? - Austin

    return(
        <div style={{textAlign:"center"}}>
            <NavBar />
            <div className="myCart">
                <h2 style={{marginTop:"100px", fontSize: "50px", fontStyle:"oblique"}}><u>Your Cart: (Total Item Cost Here) (Item Count Here)</u></h2>
                <table style={{border:"1px solid black"}}>
                {
                    cartList?
                        cartList.map((item, index)=>(
                            <div key={index}>
                                <thead>
                                    <tr>
                                        <th>Image:</th>
                                        <th>Title:</th>
                                        <th>Price</th>
                                        <th>Details</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={index}>
                                        <td>{item.image}</td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td><Link to={`/item/${item._id}`}><span>Details </span></Link></td>
                                        {/* <td><DeleteItem deleteFilter={deleteFilter} id={item._id}/></td> */}
                                    </tr>
                                </tbody>
                            </div>
                        ))
                    :null
                }
                </table>
                <button type="button" className="btn btn-outline-primary"><Link to={'/home'}><span>Add More Items!</span></Link></button>
                <button type="button" className="btn btn-outline-warning"><Link to={'/revieworder'}><span>Checkout</span></Link></button>
            </div>
        </div>
        
    )
}
export default MyCart;