import Link from "next/link";

const Allproducts = (props) => {
    console.log(props.product);
    const { img, name, seller, price,review } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
      
        <div className='product'>
           
            <div className='magnifyContainer'>
            
            <img src={img} width={286} height={286} alt="" className='magnifyImage'></img>.
           
            </div>
            <div className='ml-14'>
                <h6 className='font-bold text-sky-600'>{name}</h6>
                <p className="font-bold">Price: ${price}</p>
                <p className="font-bold">Manufacturer: {seller}</p>
               
                <Link href='/Productsdetails'>
                <h1 className="text-red-600 font-bold">More..</h1>
                </Link>
            </div>
           
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart btn btn-outlet'>
                Add to Cart
                {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                </button>
                
                 
          
        </div>
        
    );
};

export default Allproducts;