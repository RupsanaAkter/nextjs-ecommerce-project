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
                <h6 className='font-bold text-sky-600'>{name}</h6>
                <p className="font-bold">Price: ${price}</p>
                <p className="font-bold">Manufacturer: {seller}</p>
                <p className="font-bold text-rose-600"> More..</p>
            </div>
           {/* <Link href='/blog'> */}
           <button onClick={() => handleAddToCart(props.product)} className='btn-cart btn-outline'>
                Details</button>
                
                 
           {/* </Link> */}
        </div>
        
    );
};

export default Allproducts;