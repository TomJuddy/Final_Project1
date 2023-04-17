import React from "react";
import { Link } from "react-scroll";
import {ImHome} from "react-icons/im";

const Navbar = () => {
    return(
    <nav className="fixed top-4 lg:bottom-8 w-full overflow-hidden">
    <div className="container mx-auto">
    <div className="w-full square border-2 border-light h-[60px] rounded-xl max-w-[550px] max-auto px-5 flex justify-between mr-auto ml-auto text-light/90">
    <Link href="/" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
    <ImHome className="h-10 w-10"/>
    </Link>
      </div>
    </div>
  </nav> 
  )
}

export default Navbar;

