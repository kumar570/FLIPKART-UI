import React from 'react'
import { Data } from './Data'


const Product = () => {
  return (
    <div>

<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}></div>
{
    Data.map(temp => (
        <div>
            <img src={temp.image} style={{  width: 64 }} />
            <p style={{marginTop:"0px"}}>{temp.name}</p>
            <p style={{marginTop:"0px"}}><span>Discount:</span>{temp.discountprice}</p>
            <button>ADD to cart</button>
        </div>
    ))
}
</div>


    
  )
}

export default Product



    
