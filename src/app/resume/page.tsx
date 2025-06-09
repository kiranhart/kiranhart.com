import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const gradientText = 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent';

const resume = {
    name: 'Kiran Hart',
    title: 'Full-Stack Developer',
    website: 'kiranhart.com',
    email: 'kiran.hart@live.com',
    phone: '+1 647-327-6010',
    location: 'Toronto, Ontario, Canada',
    about: "I'm an experienced developer who is always looking for their next project. Throughout the years, I became my own boss by selling game-server plugins to more than a thousand people. I'm a good problem solver and great communicator, I work well in teams or individually. I'm always looking to expand my skills as a developer.",
    education: [
        {
            institution: 'Sheridan College Institute of Technology and Advanced Learning',
            period: 'Sept 2019 - Apr 2021',
            degree: 'Associates Degree - Computer Programming',
            courses: [
                'Database Design & Implementation',
                'Data Structures & Algorithms using C',
                '.NET Technologies using C#',
                'Interactive UI Design',
                'Enterprise Java Development',
                'RDBMS Application Development',
            ],
        },
    ],
    skills: [
        'Java',
        'Javascript',
        'Typescript',
        'MySQL',
        'HTML',
        'CSS',
        'Git',
        'ReactJS and NextJS',
        'TailwindCSS',
        'React Query',
        'ExpressJS',
        'PrismaJS',
        'REST APIs',
        'OOP',
        'Cable Crimping (RJ45)',
        'PC Building and Troubleshooting',
    ],
    experience: [
        {
            company: 'Clutch',
            period: 'April 2025 - Present',
            role: 'Vehicle Uploader',
            details: ['Check vehicle for correct features', 'Handle uploading vehicles to the Clutch website'],
        },
        {
            company: 'Self Employed',
            period: 'September 2018 - Present',
            role: 'Java Plugin Developer',
            details: [
                'Develop plugins using Spigot API in Java',
                'Plugins are used by over a thousand servers with thousands of players combined',
                'Develop Web APIs to interact with some plugins',
            ],
        },
        {
            company: "Canada's Wonderland",
            period: 'July 2022- December 2023',
            role: 'Special Crew (Park Services)',
            details: [
                'Assisting with various tasks around the park.',
                'Using hand tools to install / fix various things',
                'Driving a tug to pull cardboard trailers',
                'Using forklift to move warehouse shipments',
            ],
        },
        {
            company: 'Kiran & Kaden Delivery',
            period: 'April 2020 - Present',
            role: 'Data Entry & General Labour',
            details: [
                'Entering invoice / bill information into an excel sheet',
                'Keeping scanned documents organized, as well as hard copies',
                'Picking / Delivering orders',
            ],
        },
    ],
    certifications: [
        {
            name: 'Forklift License',
            date: 'June 2022',
            issuer: 'PHS Forklift Training',
            details: ['Walkie Pallet Truck', 'Counterbalanced Forklift (Propane & Electric)'],
        },
    ],
    volunteer: [
        {
            organization: 'The Salvation Army',
            period: 'February 2019- April 2019',
            role: 'Packer / Organizer',
            details: [
                'Organizing and sorting any goods that were donated, grouping them, then packing them accordingly',
            ],
        },
        {
            organization: 'Ste Louise Outreach Of Peel',
            period: 'December 2018 - February 2019',
            role: 'Sorter / Packer',
            details: [
                'When a food donation would arrive, I was in charge of checking the items (ie. expiration date, no damage)',
                'Grouping similar items together, then putting them onto shelfs or into storage',
            ],
        },
    ],
};

export default function ResumePage() {
    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-start animate-gradient-x px-4 py-8 text-clip'>
            {/* Header */}
            <div className='w-full max-w-3xl flex flex-col items-center mb-10'>
                <h1 className={`text-5xl md:text-6xl font-extrabold ${gradientText} mb-2 tracking-tight`}>
                    {resume.name}
                </h1>
                <h2 className='text-2xl font-semibold text-gray-700 mb-2'>{resume.title}</h2>
                <div className='flex flex-col md:flex-row items-center gap-2 text-gray-500 text-lg'>
                    <span>📍 {resume.location}</span>
                    <span>•</span>
                    <a href={`mailto:${resume.email}`} className='underline hover:text-pink-500'>
                        {resume.email}
                    </a>
                    <span>•</span>
                    <a
                        href={`https://${resume.website}`}
                        className='underline hover:text-blue-500'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {resume.website}
                    </a>
                </div>
                <div className='flex gap-4 justify-center mt-4'>
                    <Button>
                        <Link href='https://github.com/kiranhart'>Personal GitHub</Link>
                    </Button>
                    <Button>
                        <Link href='https://github.com/tweetzy'>Tweetzy GitHub (For the Plugins)</Link>
                    </Button>
                </div>
            </div>

            {/* About */}
            <section className='w-full max-w-3xl rounded-3xl bg-white/70 shadow-lg p-8 mb-8'>
                <h3 className={`text-2xl font-bold mb-2 ${gradientText}`}>About Me</h3>
                <p className='text-gray-700 text-lg'>{resume.about}</p>
            </section>

            {/* Education */}
            <section className='w-full max-w-3xl rounded-3xl bg-white/70 shadow-lg p-8 mb-8'>
                <h3 className={`text-2xl font-bold mb-2 ${gradientText}`}>Education</h3>
                {resume.education.map((edu, i) => (
                    <div key={i} className='mb-4'>
                        <div className='font-semibold text-lg'>{edu.institution}</div>
                        <div className='text-gray-500'>{edu.period}</div>
                        <div className='italic'>{edu.degree}</div>
                        <ul className='list-disc ml-6 mt-2 text-gray-700'>
                            {edu.courses.map((course, j) => (
                                <li key={j}>{course}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Skills */}
            <section className='w-full max-w-3xl rounded-3xl bg-white/70 shadow-lg p-8 mb-8'>
                <h3 className={`text-2xl font-bold mb-2 ${gradientText}`}>Skills</h3>
                <div className='flex flex-wrap gap-2'>
                    {resume.skills.map((skill, i) => (
                        <span
                            key={i}
                            className='bg-gradient-to-r from-pink-200 to-purple-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium shadow'
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className='w-full max-w-3xl rounded-3xl bg-white/70 shadow-lg p-8 mb-8'>
                <h3 className={`text-2xl font-bold mb-2 ${gradientText}`}>Experience</h3>
                {resume.experience.map((exp, i) => (
                    <div key={i} className='mb-6'>
                        <div className='font-semibold text-lg'>{exp.company}</div>
                        <div className='text-gray-500'>{exp.period}</div>
                        <div className='italic'>{exp.role}</div>
                        <ul className='list-disc ml-6 mt-2 text-gray-700'>
                            {exp.details.map((d, j) => (
                                <li key={j}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Certifications */}
            <section className='w-full max-w-3xl rounded-3xl bg-white/70 shadow-lg p-8 mb-8'>
                <h3 className={`text-2xl font-bold mb-2 ${gradientText}`}>Certifications</h3>
                {resume.certifications.map((cert, i) => (
                    <div key={i} className='mb-2'>
                        <div className='font-semibold'>{cert.name}</div>
                        <div className='text-gray-500'>
                            {cert.date} - {cert.issuer}
                        </div>
                        <ul className='list-disc ml-6 text-gray-700'>
                            {cert.details.map((d, j) => (
                                <li key={j}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Volunteer */}
            <section className='w-full max-w-3xl rounded-3xl bg-white/70 shadow-lg p-8 mb-8'>
                <h3 className={`text-2xl font-bold mb-2 ${gradientText}`}>Volunteer Experience</h3>
                {resume.volunteer.map((vol, i) => (
                    <div key={i} className='mb-4'>
                        <div className='font-semibold'>{vol.organization}</div>
                        <div className='text-gray-500'>{vol.period}</div>
                        <div className='italic'>{vol.role}</div>
                        <ul className='list-disc ml-6 text-gray-700'>
                            {vol.details.map((d, j) => (
                                <li key={j}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Projects */}
        </div>
    );
}
