import React from 'react';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WebProjects = () => {
    return (
        <>
            <div className='flex justify-center mt-4 mb-8 flex-col items-center text-center container px-4'>
                <h1 className='bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-red-400 bg-clip-text text-transparent text-4xl font-black'>
                    Web/App Projects
                </h1>
                <p className='font-muted text-gray-400 text-lg font-semibold mt-2'>
                    Some web projects I've made for fun and learning purposes.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center mb-12 px-4 gap-4'>
                <Dialog>
                    <DialogTrigger className='hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <Card>
                            <CardHeader>
                                <CardTitle>LinkHub</CardTitle>
                                <CardDescription>A link sharing website inspired by Linktree</CardDescription>
                            </CardHeader>
                        </Card>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>LinkHub</DialogTitle>
                            <DialogDescription>
                                LinkHub is a simple link sharing website inspired by Linktree, allowing users to create
                                a personalized page with links to their websites and social media profiles.
                                <br />
                                <h3 className='font-bold mt-4'>Technologies Used</h3>
                                <ul className='list-disc ml-6'>
                                    <li>Next.js</li>
                                    <li>TypeScript</li>
                                    <li>AuthJS</li>
                                    <li>Tailwind CSS</li>
                                    <li>Prisma</li>
                                    <li>MySQL</li>
                                </ul>
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='https://github.com/kiranhart/LinkHub'>
                                    https://github.com/kiranhart/LinkHub
                                </Link>
                                <br />
                                <br />
                                <Link className='cursor-pointer mt-4' href='https://linkhub.ca'>
                                    <Button>View LinkHub.ca</Button>
                                </Link>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                 <Dialog>
                    <DialogTrigger className='hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Covid Tracker</CardTitle>
                                <CardDescription>Used to track / view current covid statistics</CardDescription>
                            </CardHeader>
                        </Card>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>Covid Tracker</DialogTitle>
                            <DialogDescription>
                                Covid Tracker is a simple web application that allows users to track and view current COVID-19 statistics globally.
                                <br />
                                <h3 className='font-bold mt-4'>Technologies Used</h3>
                                <ul className='list-disc ml-6'>
                                    <li>React</li>
                                    <li>React Router</li>
                                    <li>Redux</li>
                                    <li>Redux Saga & Toolkit</li>
                                    <li>Styled Components</li>
                                    <li>Disease.sh API</li>
                                </ul>
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='https://github.com/kiranhart/covid-tracker'>
                                    https://github.com/kiranhart/covid-tracker
                                </Link>
                                <br />
                                <br />
                                <Link className='cursor-pointer mt-4' href='https://covid-tracker-indol-chi.vercel.app/'>
                                    <Button>View Live Version</Button>
                                </Link>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger className='hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Anime Filler API</CardTitle>
                                <CardDescription>Used to check filler/cannon episodes for Anime</CardDescription>
                            </CardHeader>
                        </Card>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>Anime Filler API</DialogTitle>
                            <DialogDescription>
                                An unofficial API for checking filler and cannon episodes of various anime. Data is scrapped from animefillerlist.com.
                                <br />
                                <h3 className='font-bold mt-4'>Technologies Used</h3>
                                <ul className='list-disc ml-6'>
                                    <li>TypeScript</li>
                                    <li>NodeJS</li>
                                    <li>Axios</li>
                                    <li>Cheerio</li>
                                    <li>Zod</li>
                                </ul>
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='https://github.com/kiranhart/Anime-Filler-List-API'>
                                    https://github.com/kiranhart/Anime-Filler-List-API
                                </Link>
                                <br />
                                <br />
                                <Link className='cursor-pointer mt-4' href='https://www.npmjs.com/package/anime-filler-api'>
                                    <Button>View NPM Package</Button>
                                </Link>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger className='hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <Card>
                            <CardHeader>
                                <CardTitle>AniQuiz</CardTitle>
                                <CardDescription>An Android quiz app for guessing anime characters</CardDescription>
                            </CardHeader>
                        </Card>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>AniQuiz</DialogTitle>
                            <DialogDescription>
                                An android that allows users to guess anime characters based on their images. The app fetches character data from the AniList API and provides a fun quiz experience.
                                <br />
                                <h3 className='font-bold mt-4'>Technologies Used</h3>
                                <ul className='list-disc ml-6'>
                                    <li>Expo</li>
                                    <li>React Native</li>
                                    <li>GraphQL</li>
                                    <li>NativeWind</li>
                                    <li>TypeScript</li>
                                </ul>
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='https://github.com/kiranhart/aniquiz'>
                                    https://github.com/kiranhart/aniquiz
                                </Link>
                                <br />
                                <br />
                                <Link className='cursor-pointer mt-4' href='https://play.google.com/store/apps/details?id=ca.tweetzy.aniquiz'>
                                    <Button>View App</Button>
                                </Link>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger className='hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Anilist Account Creation Check</CardTitle>
                                <CardDescription>Used to check the account age of older accounts</CardDescription>
                            </CardHeader>
                        </Card>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className='text-left'>
                            <DialogTitle className='flex gap-2 items-center'>Anilist Acc Age Check</DialogTitle>
                            <DialogDescription>
                                Simply used to check the age of an Anilist account, since accounts made before a certain
                                date do provide that information to the user.
                                <br />
                                <h3 className='font-bold mt-4'>Technologies Used</h3>
                                <ul className='list-disc ml-6'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                                <h3 className='font-bold mt-4'>Source Code</h3>
                                <Link href='https://github.com/kiranhart/Anilist-Account-Creation-Check'>
                                    https://github.com/kiranhart/Anilist-Account-Creation-Check
                                </Link>
                                <br />
                                <br />
                                <Link className='cursor-pointer mt-4' href='https://anilist-account-age.vercel.app/'>
                                    <Button>View Live Version</Button>
                                </Link>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default WebProjects;
