'use client'
import Link from 'next/link';
import { Button } from '../ui/button';
import { loginAction, logoutAction } from '@/actions';

const Header = ({ user }) => {
    async function handleSignIn(){
        await loginAction();
    }

    async function handleLogOut(){
        await logoutAction();
    }
    return (
        <header className='flex shadow-md p-4 bg-white min-h-[70px] tracking-wide relative z-50 max-w-6xl mx-auto'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full font-bold'>
                <Link href={'/'}>Home</Link>
            </div>
            <div>
                <ul className='gap-6 flex items-center justify-center mr-10'>
                    <li className='font-semibold'>
                        <Link href={'/'}>Products</Link>
                    </li>
                    <li className='font-semibold'>
                        <Link href={'/cart'}>Cart</Link>
                    </li>
                </ul>
            </div>
            <div className='flex space-x-3'>
                <form action={user ? handleLogOut : handleSignIn}>
                    <Button variant='outline' type='submit'>{user ? 'Logout' : 'Login'}</Button>
                </form>
            </div>
        </header>
    );
};

export default Header;