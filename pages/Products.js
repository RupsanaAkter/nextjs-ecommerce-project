"use client"

import Allproducts from './Allproducts';
import { useEffect, useState } from 'react';

const Products = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('productslist.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
    }
        return (
            <div className='mt-10 ml-10 shop-container'>
                
    
                <div className="grid grid-cols-3 gap-4 ">
                    {
                        products.map(product => <Allproducts
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Allproducts>)
                    }
                </div>
                
                <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
            </div>
    );
};

export default Products;