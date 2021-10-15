import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const MensProductList = () => {
    const [allMensClothing, setAllMensClothing] = useState([]);

useEffect(() =>{
        axios.get("http://localhost:8000//api/items/mensClothing")
        .then(res => {
            console.log(res.data);
            setAllMensClothing(res.data);
            console.log(allMensClothing);
        })
        .catch(err => console.log(err))
    }, [])
useEffect(() =>{
    //not sure the men's clothing route? 
    axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch(err => 
            console.log(err))
    }, [allMensClothing]) 

    return (
        <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex start"}}>
            {
                allMensClothing.map((mensClothing, index) => (
                <div key={index} style={{
                    border:"solid black 1px",
                    margin:"30px",
                    width:"60px",
                    height:"60px",
                }}>   
                <span>{allMensClothing?.title}</span>
                <span>{allMensClothing?.price}</span>
                <p>{allMensClothing?.description}</p>
                </div>  
                )) 
            }
        </div>
            )
}

export default MensProductList;