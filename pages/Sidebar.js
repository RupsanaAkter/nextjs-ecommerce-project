import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <section className="flex mt-10">
        <div className="drawer lg:drawer-open">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content w-50% ">


</div> 
<div className="drawer-side">

<ul className="p-4 sidebar menu w-80 bg-base-200 text-base-content">
 {/* Sidebar content here */}

<h1 className='text-2xl font-bold'>TOP CATEGORIES</h1>
 <li><Link href='/'>Gents Fashion</Link></li>
 <li><Link href='/'>Ladies Fashion</Link></li>
 <li><Link href='/'>Kids Section</Link></li>
 <li><Link href='/'>Couple Set</Link></li>
</ul>




</div>
       </div>


      
      </section>
    );
};

export default Sidebar;