'use client';
import Moon from '@/icons/Moon';
import TripleBar from '@/icons/TripleBar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

let NAVBAR_ELEMENTS = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Media', path: '/media' },
];

const Navbar = () => {
    const pathName = usePathname();

    return (
        <nav className='py-8 flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-[1fr_auto_1fr] justify-between items-center'>
            {/* Avatar */}
            <div className='mx-auto md:mx-0 text-center md:text-left'>
                <h4 className='bg-gradient-to-tr from-gray-400 via-zinc-400 to-zinc-800 bg-clip-text text-transparent text-3xl font-black uppercase'>
                    Kiran Hart
                </h4>
                <p className='text-gray-500 text-lg font-semibold'>Software Developer</p>
            </div>

            {/* Menu */}
            <ul className='flex gap-4 bg-[#EDE9E9] items-center justify-center py-2 px-2 rounded-full'>
                {NAVBAR_ELEMENTS.map((item, index) => {
                    return (
                        <NavBarItem
                            key={item}
                            content={item.name}
                            focused={pathName == item.path}
                            path={item.path}
                        />
                    );
                })}
            </ul>

            <div className='flex-col items-end hidden md:flex'>
                <Moon />
            </div>
        </nav>
    );
};

interface NavbarItemProps {
    focused: boolean;
    content: string;
    path: string;
}

const NavBarItem = ({ focused, content, path }: NavbarItemProps) => {
    return (
        <Link
            prefetch={true}
            href={path}
            className={focused ? 'bg-white py-2 px-4 rounded-full' : 'bg-none py-2 px-4 rounded-full'}
        >
            {content}
        </Link>
    );
};

export default Navbar;
