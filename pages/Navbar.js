import Image from "next/image";
import Link from "next/link";


const navbar = () => {
    return (
        <div className="">
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/products'>All Products</Link></li>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/contact'>Contact</Link></li>
      <li><Link href='/login'>Login</Link></li>
      <li><Link href='/signup'>Sign up</Link></li>
      {/* <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered " />
    
  </div>
</div> */}
<button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
        </ul>
    </div>
    
      <Image src='/images/logo.png' width={50} height={50} alt=""></Image>
  
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
    <li><Link href='/'>Home</Link></li>
    <li><Link href='/about'>About</Link></li>
      <li><Link href='/contact'>Contact</Link></li>
      <li><Link href='/login'>Login</Link></li>
      <li><Link href='/signup'>Sign up</Link></li>
      <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default navbar;