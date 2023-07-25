import Navbar from './Navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
const Comments = () => {
    return (
        <main className={`${styles.main} ${inter.className}`}> 
        <Navbar></Navbar>
        <div>
            <h1>This is comments section</h1>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
       </main>
    );
};

export default Comments;