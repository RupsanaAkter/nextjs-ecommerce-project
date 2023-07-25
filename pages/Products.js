"use client"

import Allproducts from './Allproducts';
import { useEffect, useState } from 'react';

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('productslist.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
        return (
            <div className='mt-10'>
                
    
                <div className="grid grid-cols-4 gap-5">
                    {
                        products.map(product => <Allproducts
                            key={product.id}
                            product={product}
                            // handleAddToCart={handleAddToCart}
                        ></Allproducts>)
                    }
                </div>
                
            </div>
    );
};

export default Products;