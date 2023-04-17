import React from "react";
import Link from "next/link";
import {ImHome} from "react-icons/im";
import {BsCodeSlash,BsFillPersonLinesFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";


const Navbar = () => {
    return(
    <nav className="fixed top-10 lg:bottom-8 w-full overflow-hidden">
    <div className="container mx-auto">
    <div className="w-full square border-2 border-dark h-[px] rounded-xl max-w-[570px] max-auto px-5 flex justify-between ml-auto  text-gray-300">
    <Link href="/" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
    <ImHome className="h-20 w-20"/>
    </Link>
    <Link href="/Projects" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
    <BsCodeSlash className="h-20 w-20"/>
    </Link>
    <Link href="/About" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
    <BsFillPersonLinesFill className="h-20 w-20"/>
    </Link>
    <Link href="/Contact" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
    <HiOutlineMail className="h-20 w-20"/>
    </Link>
   
    
      </div>
    </div>
  </nav> 
  )
}

export default Navbar;

