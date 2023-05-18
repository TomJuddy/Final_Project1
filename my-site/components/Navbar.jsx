import React from "react";
import Link from "next/link";
import Logo from "./Logo";



const Navbar = () => {
    return(
   <div className="fixed top-0 h-20 w-screen bg-gradient-to-r from-Gray1 from-10% via-Gray2 via-30% to-Gray3 to-90% opacity-90">
    <nav className="fixed top-0 h-20 w-screen overflow-hidden ">
      
    <div className="container mx-auto sm:hidden ">
    <div className="fixed right-10 top-7 lg:top  -8 w-full max-w-[570px] max-auto px-5 flex justify-between ml-auto text-gray-300 ">
    
    <Link href="/"className="text-xl font-mono text-light">HOME</Link>
    <Link href="/About"className="text-xl font-mono text-light">ABOUT</Link>
    <Link href="/Projects"className="text-xl font-mono text-light">PROJECTS</Link>
    <Link href="/Contacts"className="text-xl font-mono text-light">CONTACTS</Link>
      </div>
    </div>
    <div className="sm:flex items-center justify-center">
    <Logo/>
    </div>
    <div className="fixed right-10 top-6 gg:hidden" >
   
    <div class="">

    <div class="dropdown inline-block relative">
  <button class="bg-gradient-to-r from-Gray1 to-Gray2 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
    <span class="mr-1">Menu</span>
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul class="dropdown-menu absolute hidden text-white pt-1">
    <li class=""><a class="rounded-t bg-gradient-to-r from-Gray1 to-Gray2 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Home</a></li>
    <li class=""><a class="bg-gradient-to-r from-Gray1 to-Gray2 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="About">About me</a></li>
    <li class=""><a class="bg-gradient-to-r from-Gray1 to-Gray2 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="Projects">Projects</a></li>
    <li class=""><a class="rounded-b bg-gradient-to-r from-Gray1 to-Gray2 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="Contacts">Contacts</a></li>
    
  </ul>
</div>

</div>

    </div>
  </nav>
  </div> 
     
  )
}

export default Navbar;

{/* <Link href="/" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
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
    </Link> */}
    // import {ImHome} from "react-icons/im";
    // import {BsCodeSlash,BsFillPersonLinesFill} from "react-icons/bs";
    // import {HiOutlineMail} from "react-icons/hi";