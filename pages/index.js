import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from './Navbar'
import Products from './Products'
import Baselayout from './Baselayout'
import Slider from './Slider'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className={`${styles.main} ${inter.className}`}> 
      <div className='mx-20'>
      <Navbar></Navbar>
       <Baselayout> <Slider></Slider> </Baselayout>
       <Products></Products>
      </div>
      </main>
    </>
  )
}
