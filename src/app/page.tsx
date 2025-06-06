'use client';
import Navbar from '@/components/Navbar';
import useBStats from '@/hooks/useBStats';
import Map from '@/icons/Map';
import Image from 'next/image';
import PLUGINS from './data/PluginIds';
import { Badge } from '@/components/ui/badge';
import useSupportDiscordCount from '@/hooks/useSupportDiscordCount';
import Link from 'next/link';

export default function Home() {
    const [totalServers, totalPlayers] = useBStats(PLUGINS.map((pl) => pl.bstat_id));
    const [memberCount, onlineCount] = useSupportDiscordCount();

    return (
        <div className='w-full'>
            <div className='container mx-auto w-full text-center flex flex-col items-center h-full gap-7 mt-32 px-4'>
                <h1 className='bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-red-400 bg-clip-text text-transparent text-6xl font-black'>
                    Hi, I'm Kiran
                </h1>

                <span className='flex gap-2'>
                    <Map />
                    <p className='text-gray-400 text-lg font-semibold'>Toronto, Canada</p>
                </span>
                <p className='text-gray-400 text-lg font-medium max-w-xl'>
                    Currently working on side projects, which include web projects & many Minecraft plugins using
                    spigot/paper which have thousands of users.
                </p>
            </div>

            <div className='container flex justify-center mt-12'>
                <Link
                    className='group inline-block rounded-sm bg-gradient-to-r from-purple-400 via-fuchsia-400 to-red-400 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden'
                    href='/projects'
                >
                    <span className='block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent group-hover:text-white'>
                        <p className='bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-red-400 bg-clip-text text-transparent text-lg font-medium group-hover:text-white hover:text-white'>
                            View My Projects
                        </p>
                    </span>
                </Link>
            </div>

            {/* Number show off */}
            <div className='mx-auto flex mt-36 text-center flex-col justify-center mb-12'>
                <p className='text-gray-400 text-xl font-bold px-3'>
                    These numbers only represent servers that allow this data to be collected.
                </p>
                <div className='flex flex-wrap mx-auto gap-4 mt-4 px-4 md:px-12'>
                    {/* First Badge */}
                    <Badge
                        variant='outline'
                        className='py-2 px-4 font-black text-xl text-gray-500 flex-1 min-w-[45%] md:min-w-0 md:flex-none md:w-auto'
                    >
                        Active Servers:{' '}
                        <span className='font-medium text-green-500'>{totalServers.toLocaleString()}</span>
                    </Badge>
                    {/* Second Badge */}
                    <Badge
                        variant='outline'
                        className='py-2 px-4 font-black text-xl text-gray-500 flex-1 min-w-[45%] md:min-w-0 md:flex-none md:w-auto'
                    >
                        Active Players:{' '}
                        <span className='font-medium text-green-500'>{totalPlayers.toLocaleString()}</span>
                    </Badge>
                    {/* Third Badge */}
                    <Badge
                        variant='outline'
                        className='py-2 px-4 font-black text-xl text-gray-500 w-full flex justify-center md:w-auto md:flex-1 md:justify-start'
                    >
                        Discord Members:{' '}
                        <span className='font-medium text-green-500'>{memberCount.toLocaleString()}</span>
                    </Badge>
                </div>
            </div>
        </div>
    );
}
