import Head from 'next/head';
import { TypewriterClass } from 'typewriter-effect';
import Image from 'next/image'
import MyPhoto from "../../public/Images/Git.png";
import MyPhoto2 from "../../public/Images/Linked.png";
import MyPhoto3 from "../../public/Images/Twitter.png";
import Link from "next/link";
import TextAnimation from '../../components/TextAnimation';

export default function Contacts(){
    return(
      <div>
      <Head>
      <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='min-h-screenr justify-center '>
  <div className='flex sm:h-96 items-center justify-center pt-56'>
    <div className='p-6'>
      <TextAnimation className='text-7xl text-white font-bold sm:text-4xl' text="Contacts and Socials" />
    </div>
  </div>
  <div className='flex flex-wrap sm:flex-nowrap items-center justify-evenly sm:p-10'>
    <div className='flex flex-col items-center '>
      <Link href='https://github.com/TomJuddy'>
        <Image src={MyPhoto} className="max-w-full h-auto align-middle border-none object-cover h-64 w-64" />
      </Link>
      <p className='text-2xl'>Git</p>
    </div>
    <div className='flex flex-col items-center '>
      <Link href='https://www.linkedin.com/in/thomas-judd-52089a270/'>
        <Image src={MyPhoto2} className="max-w-full h-auto align-middle border-none object-cover h-64 w-64" />
      </Link>
      <p className='text-2xl'>LinkedIn</p>
    </div>
    <div className='flex flex-col items-center '>
      <Link href='https://twitter.com/RealThomasJudd'>
        <Image src={MyPhoto3} className="max-w-full h-auto align-middle border-none object-cover h-64 w-64" />
      </Link>
      <p className='text-2xl'>Twitter</p>
    </div>
  </div>
  <div className='flex text-7xl text-white font-bold justify-center sm:text-5xl'>Email Me At</div>
  <div className='flex h-96 items-center justify-evenly pb-32 '>
    <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=thomas@judd.co.uk&su=Write Subject Here&body=Write Here&bcc=juddthomas3@gmail.com'>
      <div className='text-5xl text-white font-bold sm:text-3xl sm:text-center'>Click Here To Email Me Now!</div>
    </Link>
  </div>
</main>
</div>

)
}