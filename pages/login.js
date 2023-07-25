"use client"
import Navbar from './Navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

import { useForm } from 'react-hook-form';
// import { useLocation, useNavigate } from 'next/router';
import {  useState } from 'react';
const inter = Inter({ subsets: ['latin'] })
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <main className={`${styles.main} ${inter.className}`}> 
        <Navbar></Navbar>
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="w-full max-w-xs input input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="w-full max-w-xs input input-bordered" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='w-full btn btn-accent' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p><Link href='/signup'className='text-secondary'>Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
       </main>
    );
};

export default Login;