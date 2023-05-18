import Head from 'next/head';
import { TypewriterClass } from 'typewriter-effect';
import Image from 'next/image'
import MyPhoto from "../../public/Images/PicOfMe.jpeg";
import MyPhoto2 from "../../public/Images/code.png";
import Link from "next/link";
import TextAnimation from '../../components/TextAnimation';


export default function Test(){
    return(
      <div>
      <Head>
      <meta name="description" content="Generated by create next app" />
      </Head>
     <main className='max-h-screen'>
      <div className='flex h-screen items-center justify-evenly'>
        <div class="p-3">
          <Image src={MyPhoto} class="shadow-lg rounded max-w-full h-auto align-middle border-none object-cover h-1279 w-96" /> 
        </div> 
        <div className='p-6 rounded-lg bg-opacity-10 shadow-lg rounded'>
          <TextAnimation className='text-7xl text-white font-bold' text="Hi I'm Tom." />
          <TextAnimation className='text-4xl text-center' text="Im a junior developer currently in college." />
        </div>
      </div>
    </main>





</div>
     

)
}{/* <div class="group h-96 w-150 [perspective:1000px]">
      <p className='text-center text-xl text-white p-6'>2D Game Devlopment</p>
      <div class="relative justify-center h-full w-150 rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        c
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">To develop a prototype video game using the Unity Engine.</h1>
          <p class="text-lg">Based upon 'Asteroids' and 'Geomatry Wars'</p>
          <p class="text-base">Rewared a Merit</p>
          <Link href='/2D'><button class="mt-2 rounded-lg bg-neutral-800 py-1 px-2 text-m hover:bg-neutral-900">Read More</button>
        </Link>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="flex h-screen items-center justify-center">
      <div class="group h-96 w-150 [perspective:1000px]">
      <div class="relative justify-center h-full w-150 rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <Image class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={MyPhoto2}/>
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">2D Game Development</h1>
          <p class="text-lg">Lorem ipsum dolor</p>
          <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <Link href='/2D'><button class="mt-2 rounded-lg bg-neutral-800 py-1 px-2 text-m hover:bg-neutral-900">Read More</button>
        </Link>
        </div>
      </div>
    </div>
  </div> */}