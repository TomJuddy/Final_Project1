import Head from 'next/head';
import { TypewriterClass } from 'typewriter-effect';
import Image from 'next/image'
import MyPhoto from "../../public/Images/Game.png";
import MyPhoto2 from "../../public/Images/code.png";
import MyPhoto3 from "../../public/Images/code2.png";
import Link from "next/link";


export default function Projects(){
    return(
      <div>
        <Head>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main className='min-h-screenr'>
          <div className='flex h-screen items-center justify-evenly sm:p-10'>
            
            <div className='flex items-center justify-around h-150 w-200 hover:bg-gradient-to-r from-Gray2 from-30% to-Gray1 to-70% bg-opacity-10 shadow-lg rounded '>
              <div class="p-5 w-140 sm:hidden">
                <Image src={MyPhoto} class="shadow-lg rounded max-w-full h-auto align-middle border-none object-cover h-1279 w-96" /> 
              </div>
            <div class="text-7xl text-left text-white font-bold sm:w-auto sm:text-5xl sm:p-3">
              <p>2D Game Development</p>
              <div className='text-4xl text-left'>Outcome was to develop a prototype video game using the Unity Engine.</div>
              <div className='text-xl text-left sm:bg-Gray1'>Graded a Merit</div>
              <Link href='/2D'>
                <button class="mt-2 rounded-lg bg-neutral-800 py-1 px-2 text-sm hover:bg-LightBlue hover:text-black">Read More</button>
              </Link>
            </div>
            
            </div>
            
          </div>
          <div className='flex h-screen items-center justify-evenly sm:p-10'>
            <div className='flex items-center justify-around h-150 w-200 hover:bg-gradient-to-r from-Gray2 from-30% to-Gray1 to-70% bg-opacity-10 shadow-lg rounded'>
            <div class="text-5xl text-right text-white font-bold sm:w-auto sm:text-3xl sm:p-3">
              <p>Esports Website with a database</p>
              <div className='text-2xl text-right'>Outcome was to develop, design and implement some web user interfaces to display data about the ESports Championship</div>
              <div className='text-xl text-right sm:bg-Gray1'>Graded a Merit</div>
              
              <Link href='/Esports'>
                <button class="right mt-2 rounded-lg bg-neutral-800 py-1 px-2 text-sm hover:bg-LightBlue hover:text-black">Read More</button>
              </Link>
            </div>
            <div class="p-5 w-140 sm:hidden">
                <Image src={MyPhoto2} class="shadow-lg rounded max-w-full h-auto align-middle border-none object-cover h-1279 w-96" /> 
              </div>
            </div>
            
          
          </div>

          <div className='flex h-screen items-center justify-evenly sm:p-10'>
            <div className='flex items-center justify-around h-150 w-200 hover:bg-gradient-to-r from-Gray2 from-30% to-Gray1 to-70% bg-opacity-10 shadow-lg rounded'>
              <div class="flex p-5 w-145 items-center sm:hidden">
              <Image src={MyPhoto3} class="shadow-lg rounded max-w-full h-145 align-middle border-none object-cover h-1279 w-96" /> 
              </div>
            <div class="text-6xl text-left text-white font-bold sm:w-auto sm:text-4xl sm:p-3">
              <p>Bouncing Images Project</p>
              <div className='text-4xl text-left sm:text-2xl'>The outcome was to create a web page with one or more images that bounce around the screen.</div>
              <div className='text-xl text-left sm:bg-Gray1'>Graded a Pass</div>
              <Link href='/BouncingImages'>
                <button class="mt-2 rounded-lg bg-neutral-800 py-1 px-2 text-sm hover:bg-LightBlue hover:text-black">Read More</button>
              </Link>
            </div>
            
            </div>
            
          </div>
        </main>
      </div>

)
}