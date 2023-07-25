import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const Productsdetails = () => {
 
    return (
        <main className={`${styles.main} ${inter.className}`}>
            
           <section className='mt-20 lg:ml-20  sm:ml-2 shop-container '>
           <div className=" card w-96 bg-base-100">
  
  <div className="card-body">
    <h2 className="font-bold">Description: <span className='font-thin'> We believe in supporting our local economy and helping to </span></h2>
    <p>Size: S M XL XXL</p>
    <div className=''>
  <span className="label-text">Blue </span>
<input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
<span className="label-text">red </span>
<input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
<span className="label-text">green </span>
<input type="radio" name="radio-10" className="radio checked:bg-green-500" checked />
<span className="label-text">black </span>
<input type="radio" name="radio-10" className="radio checked:bg-black-500" checked />
  </div>
  <div className="rating">
  <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
  <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
  <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
  <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
  <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
</div>
<div className="justify-center pt-7 card-actions">
<button className='font-bold text-black btn-cart btn btn-outlet'>
               
                
                </button>
    </div>
  </div>
  

 
           </div>
          
           </section>

           <h1 className='pt-20 pl-20 font-bold'>Comments</h1>

         <div>
         <div className='flex' >
          <div className="avatar placeholder pt-10 pl-20">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span className="text-xs">AA</span>
  </div>
</div>
<div>
    <h1 className='pl-2 pt-11 font-bold'>Abram Akra</h1>
   </div>
        </div>
       <h1 className='pl-20'>Totally its good products</h1> 
        </div>
 
         <div>
         <div className='flex' >
          <div className="avatar placeholder pt-10 pl-20">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span className="text-xs">JH</span>
  </div>
</div>
<div>
    <h1 className='pl-2 pt-11 font-bold'>John Hor</h1>
   </div>
        </div>
       <h1 className='pl-20'>Wow</h1> 
        </div>
 
         <div>
         <div className='flex' >
          <div className="avatar placeholder pt-10 pl-20">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span className="text-xs">PK</span>
  </div>
</div>
<div>
    <h1 className='pl-2 pt-11 font-bold'>Provash Kir</h1>
   </div>
        </div>
       <h1 className='pl-20'>very good products</h1> 
        </div>
 
         <div>
         <div className='flex' >
          <div className="avatar placeholder pt-10 pl-20">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span className="text-xs">KB</span>
  </div>
</div>
<div>
    <h1 className='pl-2 pt-11 font-bold'>Kabir Bora</h1>
   </div>
        </div>
       <h1 className='pl-20'>Best Products</h1> 
        </div>
 
          





          <div>
    <div>
           
            <input type="text" placeholder="Type here" className="input input-bordered lg:w-full sm:w-1/2 max-w-xs mt-5 ml-20" />
        </div>
          </div>

          


        </main>
    );
};

export default Productsdetails;