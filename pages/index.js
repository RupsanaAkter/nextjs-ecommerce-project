import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from './Navbar'
// import Products from './Products'
import Baselayout from './Baselayout'
import Slider from './Slider'
import Footer from './Footer'
import MainSection from './MainSection'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs-Ecommerce-Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
     <main className={`${styles.main} ${inter.className}`}> 
      <div className=''>
      <Navbar></Navbar>
       <Baselayout> <Slider></Slider> </Baselayout>
       
       
       <MainSection></MainSection>
       <Footer></Footer>
      </div>
      </main>
    </>
  )
}
