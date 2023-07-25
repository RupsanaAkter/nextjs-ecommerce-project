import Link from "next/link";

const Allproducts = (props) => {
    console.log(props.product);
    const { img, name, seller, price } = props.product;
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
            
            </div>
           <Link href='/Productsdetails'>
           <button  className='btn btn-outline btn-cart'>
                Details

                </button>
                </Link>
                 
          
        </div>
        
    );
};

export default Allproducts;