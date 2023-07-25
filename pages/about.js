import Navbar from './Navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
const About = () => {
    return (
        <main className={`${styles.main} ${inter.className}`}> 
        <Navbar></Navbar>
        <div>
            <h1>This is About</h1>
        </div>
       </main>
    );
};

export default About;