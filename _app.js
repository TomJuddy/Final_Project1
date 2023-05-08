import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '../../components/Navbar';



export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <main className='font-mon bg-gradient-to-r from-Gray1 from-10% via-Gray2 via-30% to-Gray3 to-90% w-full min-h-screen '>
    <Navbar/>
      <Component {...pageProps} />
    </main>
    </>
  );
}
