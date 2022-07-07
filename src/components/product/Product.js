import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 
import './Product.css'
const Product = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  const params = useParams();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
 
      setData(await response.clone().json()); 
        setFilter()
        setLoading(false); 
        console.log(data);
    
 
    };
    getProduct();
  }, []);
  return (

    <div>
      <h3>Product Description</h3>
      <div className="product_info">
        <img src={data.image} alt="" />
        <div className='product_detail'>
           <h4>{data.title}</h4>
            <p>{data.description}</p> 

            <button>Add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default Product