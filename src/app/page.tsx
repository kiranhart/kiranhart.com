'use client';
import Navbar from '@/components/Navbar';
import useBStats from '@/hooks/useBStats';
import Map from '@/icons/Map';
import Image from 'next/image';
import PLUGINS from './data/PluginIds';
import { Badge } from '@/components/ui/badge';

export default function Home() {
    const [totalServers, totalPlayers] = useBStats(PLUGINS.map((pl) => pl.bstat_id));

    return (
        <div className='w-full'>
            <div className='container mx-auto w-full text-center flex flex-col items-center h-full gap-7 mt-32 px-4'>
                <h1 className='bg-gradient-to-tr from-purple-400 via-fuchsia-400-400 to-red-400 bg-clip-text text-transparent text-6xl font-black'>
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

            {/* Number show off */}
            <div className='mx-auto flex mt-48 text-center flex-col justify-center'>
                <p className='text-gray-400 text-xl font-bold px-3'>
                    These numbers only represent servers that allow this data to be collected.
                </p>
                <div className='flex mx-auto gap-4 mt-4'>
                    <Badge variant='outline' className='py-2 px-4 font-black text-xl text-gray-500'>
                        Active Servers: <span className='font-medium text-green-500'>{totalServers}</span>
                    </Badge>
                    <Badge variant='outline' className='py-2 px-4 font-black text-xl text-gray-500'>
                        Active Players: <span className='font-medium text-green-500'>{totalPlayers}</span>
                    </Badge>
                </div>
            </div>
        </div>
    );
}
