import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { loadCartProducts } from '../api'


const Cart = () => {
    var total=0;
    const[cart_total,setCart_total]=useState()
    const token=localStorage.getItem("ECOM_TOKEN");
    const[data,setData]=useState([])

    const loadCart=async ()=>{
        const response=await loadCartProducts();
       console.log(response);
        setData(response.data)
        

    }

    useEffect(()=>{
     loadCart()
     totalCart()
    },[])
   
   const totalCart=()=>{
    {
        data.map((item)=>{
            total=total+item.price;
        })
        setCart_total(total);
    }
   } 
   return(
    
  <div>
    {
        data.map((product)=>{
            <>
            <h1>{product.name}</h1>
            <img src={data.image}/>
            </>

        })
}
     <h1>cartpage</h1>  
  </div>
        
    )
   }
   





export default Cart