"use client"

import Allproducts from './Allproducts';
import { useEffect, useState } from 'react';
import Cart from './cart';
import { addToDb, getShoppingCart } from './utilities'
const Products = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('productslist.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect( () =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for(const id in storedCart){
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])
    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
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
                
                <Cart cart={cart}></Cart>
            </div>
            </div>
    );
};

export default Products;