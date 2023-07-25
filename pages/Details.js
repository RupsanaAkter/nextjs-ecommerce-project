// "use client"

// import Productsdetails from './Productsdetails'
// import { useEffect, useState } from 'react';


// const Details = () => {
//     const [details,setDetails]=useState([]);
//     useEffect(()=>{
//         fetch('productslist.json')
//         .then(res=>res.json())
//         .then(data=>setDetails(data))
//     },[])
//     return (
//         <div className=''>
                
    
//                 <div className="grid grid-cols-4 gap-5">
//                     {
//                         products.map(detail => <Productsdetails
//                             key={detail.id}
//                             detail={detail}
//                             // handleAddToCart={handleAddToCart}
//                         ></Productsdetails>)
//                     }
//                 </div>
                
//             </div>
//     );
// };

// export default Details;