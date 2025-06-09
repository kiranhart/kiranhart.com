import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react';

const Plugins = () => {
    const pluginDownloadCount = 224000;

    return (
        <>
            <div className='flex justify-center mt-4 mb-8 flex-col items-center text-center container'>
                <h1 className='bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-red-400 bg-clip-text text-transparent text-4xl font-black'>
                    Minecraft Plugins
                </h1>
                <p className='font-muted text-gray-400 text-lg font-semibold mt-2'>
                    These are some of my most popular plugins currently.
                    <br />
                    They currently have over{' '}
                    <span className='text-green-400 font-bold'>{pluginDownloadCount.toLocaleString()}</span> combined
                    downloads just on SpigotMC!
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                <PluginCard
                    logo='/plugin-logos/AuctionHouse.webp'
                    content={
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>
                                Auction House <Badge className='bg-green-700'>Paid - $12</Badge>
                            </DialogTitle>
                            <DialogDescription>
                                Auction House is an all in one auction system for Spigot servers.
                                <br />
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='http://github.com/kiranhart/auction-house'>
                                    http://github.com/kiranhart/auction-house
                                </Link>
                                <br />
                                <h3 className='font-bold mt-4'>View on Store(s)</h3>
                                <div className='flex gap-2 mt-2'>
                                    <Link
                                        className='cursor-pointer'
                                        href='https://www.spigotmc.org/resources/auction-house-the-ultimate-auction-house.60325/'
                                    >
                                        <Button>SpigotMC</Button>
                                    </Link>
                                    <Link
                                        className='cursor-pointer'
                                        href='https://polymart.org/resource/auction-house.79'
                                    >
                                        <Button>Polymart</Button>
                                    </Link>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    }
                />
                <PluginCard
                    logo='/plugin-logos/Markets.webp'
                    content={
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>
                                Markets<Badge className='bg-green-700'>Paid - $12</Badge>
                            </DialogTitle>
                            <DialogDescription>
                                Markets is a completely new take on traditional player owned shops
                                <br />
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='http://github.com/tweetzy/markets'>http://github.com/tweetzy/markets</Link>
                                <br />
                                <h3 className='font-bold mt-4'>View on Store(s)</h3>
                                <div className='flex gap-2 mt-2'>
                                    <Link
                                        className='cursor-pointer'
                                        href='https://www.spigotmc.org/resources/markets-the-ultimate-player-shop.92178/'
                                    >
                                        <Button>SpigotMC</Button>
                                    </Link>
                                    <Link className='cursor-pointer' href='https://polymart.org/resource/markets.1159'>
                                        <Button>Polymart</Button>
                                    </Link>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    }
                />
                <PluginCard
                    logo='/plugin-logos/Shops.webp'
                    content={
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>
                                Shops<Badge className='bg-green-700'>Paid - $12</Badge>
                            </DialogTitle>
                            <DialogDescription>
                                Ever wanted to create categorized server shops, well you've found that plugin.
                                <br />
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='http://github.com/tweetzy/shops'>http://github.com/tweetzy/shops</Link>
                                <br />
                                <h3 className='font-bold mt-4'>View on Store(s)</h3>
                                <div className='flex gap-2 mt-2'>
                                    <Link
                                        className='cursor-pointer'
                                        href='https://www.spigotmc.org/resources/shops-the-ultimate-server-shop.75600/'
                                    >
                                        <Button>SpigotMC</Button>
                                    </Link>
                                    <Link className='cursor-pointer' href='https://polymart.org/product/80/shops'>
                                        <Button>Polymart</Button>
                                    </Link>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    }
                />
                <PluginCard
                    logo='/plugin-logos/Skulls.webp'
                    content={
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>
                                Shops<Badge className='bg-green-700'>Free</Badge>
                            </DialogTitle>
                            <DialogDescription>
                                Skulls is a collection of 100k+ custom textured Minecraft heads. A free alternative to
                                Head Database
                                <br />
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='http://github.com/tweetzy/skulls'>http://github.com/tweetzy/skulls</Link>
                                <br />
                                <h3 className='font-bold mt-4'>View on Store(s)</h3>
                                <div className='flex gap-2 mt-2'>
                                    <Link
                                        className='cursor-pointer'
                                        href='https://www.spigotmc.org/resources/skulls-the-ultimate-head-database.90098/'
                                    >
                                        <Button>SpigotMC</Button>
                                    </Link>
                                    <Link
                                        className='cursor-pointer'
                                        href='https://polymart.org/product/1644/skulls-ultimate-head-database'
                                    >
                                        <Button>Polymart</Button>
                                    </Link>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    }
                />
                <PluginCard
                    logo='/plugin-logos/Spawners.webp'
                    content={
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>
                                Spawners<Badge className='bg-green-700'>Paid - $12</Badge>
                            </DialogTitle>
                            <DialogDescription>
                                Mineable spawners, chunk/player limits, custom spawner levels, presets, upgrading,
                                spawner shops
                                <br />
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='http://github.com/tweetzy/skulls'>http://github.com/tweetzy/spawners</Link>
                                <br />
                                <h3 className='font-bold mt-4'>View on Store(s)</h3>
                                <div className='flex gap-2 mt-2'>
                                    <Link
                                        className='cursor-pointer'
                                        href='https://www.spigotmc.org/resources/spawners-the-ultimate-spawner-solution.102575/'
                                    >
                                        <Button>SpigotMC</Button>
                                    </Link>
                                    <Link className='cursor-pointer' href='https://polymart.org/product/2530/spawners'>
                                        <Button>Polymart</Button>
                                    </Link>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    }
                />
            </div>
        </>
    );
};

const PluginCard = ({ logo, content }: { logo: string; content: React.ReactNode }) => {
    return (
        <Dialog className=''>
            <DialogTrigger className='hover:scale-105 transition-all duration-300 cursor-pointer'>
                <img className='plugin-card' src={logo} />
            </DialogTrigger>
            <DialogContent>{content}</DialogContent>
        </Dialog>
    );
};

export default Plugins;
