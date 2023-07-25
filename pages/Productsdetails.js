import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
const Productsdetails = () => {
    
    return (
        <main className={`${styles.main} ${inter.className}`}>
            
            <div className=" card w-96 bg-base-100">
  {/* <figure><Image src='/images/img2.jpeg' width={200} height={200} alt=''></Image></figure> */}
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
<div className="justify-center card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
  
 
 
</div>



<div>
    <Link href='/comments'><h1 className='pt-20'>Comments</h1></Link>
</div>


        </main>
    );
};

export default Productsdetails;