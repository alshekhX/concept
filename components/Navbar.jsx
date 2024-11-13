"use client";

import Link from 'next/link'
import { useState } from 'react';
import {usePathname} from 'next/navigation'


const Navbar = () => {

    const pathName= usePathname();
    const [isLoggedIn,setIsLoggedIn]= useState(true); 


const [isMobileMenuOpen, setIsMobileMenuOpen]=useState();
const [isProfileMenuOpen, setIsProfileMenuOpen]=useState();


  return (
    <header className=' bg-darkBlue py-5 px-5 '>
      <nav className=' text-wall container  px-4 mx-auto  flex flex-row justify-between items-center'>
<Link href='/'>
<div className=' text-2xl  font-semibold  '>Concept</div>
</Link>

<ul className=' flex text-xl  gap-7 '>

  <li className=' '>Home</li>
  <li className=' '>Services</li>
  <li className=' '>About</li>
  <li className=' '>Contact</li>
  <li className=' '>Projects</li>


</ul>
<Link href='/'>
<div className='  '>العربية</div>
</Link>
</nav>

    </header>
  );
};

export default Navbar;
