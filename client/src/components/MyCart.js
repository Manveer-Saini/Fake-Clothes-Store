import React, {useState, useEffect} from "react";
import {Link} from '@reach/router';
import axios from 'axios';
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
        // Put Fumie's Navbar Code Here
        <div className="myCart">
            <h2>Your Cart:</h2>
            <table>
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
            <button><Link to={'/Home'}><span>Add More Items!</span></Link></button>
            <button><Link to={'/ReviewOrder'}><span>Checkout</span></Link></button>
        </div>
    )
}
export default MyCart;