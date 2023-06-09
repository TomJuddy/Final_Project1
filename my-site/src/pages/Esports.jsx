import Head from 'next/head';
import { TypewriterClass } from 'typewriter-effect';
import Image from 'next/image'
import MyPhoto from "../../public/Images/PlaceHolder.png";
import MyPhoto2 from "../../public/Images/PlaceHolder.png";
import MyPhoto3 from "../../public/Images/PlaceHolder.png";
import Link from "next/link";

export default function Esports(){
    return(
      <div>
        <Head>
          <meta name="description" content="Generated by create next app" />
        </Head>
     
        <main className='min-h-screenr'>
        <div className='flex h-150 items-center justify-center sm:grid sm:pt-20 sm:h-auto'>
          
          <div class="p-2 ">
                  <Image src={MyPhoto2} 
                     class="shadow-lg rounded max-w-full h-auto align-middle border-none object-cover h-1279 w-96" />  
          </div>
          <div class="p-2">
                  <Image src={MyPhoto} class="shadow-lg rounded max-w-full h-auto align-middle border-none object-cover h-1279 w-96" />  
          </div>
          <div class="p-2">
                  <Image src={MyPhoto3} class="shadow-lg rounded max-w-full h-auto align-middle border-none object-cover h-1279 w-96" />  
          </div>
          
        </div>
        <div className='flex items-center justify-center '>
        <div className='text-7xl text-center text-white sm:text-5xl '>Title Place holder</div>
        </div>
        <div className='flex items-center justify-evenly '>
        <div className='text-2xl text-center text-white p-10 sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur congue dolor, vitae mattis ipsum ultricies a. Praesent porttitor, ligula sit amet vestibulum placerat, felis sapien laoreet erat, vel faucibus arcu nisi sit amet diam. Maecenas euismod elementum elit nec fermentum. Donec at libero tincidunt, posuere mi quis, laoreet eros. Proin interdum consectetur lorem a tristique. Vestibulum id faucibus tortor. Phasellus eleifend viverra pulvinar. Curabitur laoreet facilisis risus vitae ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vestibulum velit nisl, finibus ultrices sapien gravida non. Proin elementum dolor sed quam gravida, sit amet sodales ipsum rhoncus. Morbi tellus velit, consequat a finibus in, auctor nec nulla. Nulla mauris nisl, venenatis sit amet risus in, scelerisque sollicitudin arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</div>
        </div>
        <div className='flex items-center justify-center pb-10'>
          <Link href='/Projects'><button class="mt-2 rounded-lg bg-Pink py-1 px-2 text-m hover:bg-Pink">Back To Projects Page</button></Link> 
        </div>
        </main>
      </div>

)
}