import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    const pluginDownloadCount = 224000;

    return (
        <div className=''>
            <div className='flex justify-center mt-4 mb-8 flex-col items-center text-center container'>
                <h1 className='bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-red-400 bg-clip-text text-transparent text-4xl font-black'>
                    Minecraft Plugins
                </h1>
                <p className='font-muted text-gray-400 text-lg font-semibold mt-2'>
                    These are some of my most popular plugins currently.
                    <br />
                    They currently have over <span className='text-green-400 font-bold'>{pluginDownloadCount.toLocaleString()}</span> combined downloads just on SpigotMC!
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                <PluginCard logo='/plugin-logos/AuctionHouse.png' />
                <PluginCard logo='/plugin-logos/Markets.png' />
                <PluginCard logo='/plugin-logos/Shops.png' />
                <PluginCard logo='/plugin-logos/Skulls.svg' />
                <PluginCard logo='/plugin-logos/Spawners.png' />
            </div>
        </div>
    );
};

const PluginCard = ({ logo, url }: { logo: string; url?: string }) => {
    return <img className='plugin-card' src={logo} />;
};

export default AboutPage;
