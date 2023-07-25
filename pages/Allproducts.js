import Link from "next/link";

const Allproducts = (props) => {
    console.log(props.product);
    const { img, name, seller, ratings, price } = props.product;
    return (
      
        <div className='product'>
           
            <div className='magnifyContainer'>
            <Link href='/Productsdetails'>
            <img src={img} width={286} height={286} alt="" className='magnifyImage'></img>.
            </Link>
            </div>
            <div className='ml-14'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
           {/* <Link href='/blog'> */}
           <button onClick={() => handleAddToCart(props.product)} className='btn-cart btn-outline'>
                Details</button>
                
                 
           {/* </Link> */}
        </div>
        
    );
};

export default Allproducts;