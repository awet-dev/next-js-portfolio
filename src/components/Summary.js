'use client'

import {useEffect} from "react";
import Link from "next/link";

const Summary = () => {

    useEffect(() => {
        const use = async () => {
            const { Ripple, initTE } = await import('tw-elements');
            initTE({ Ripple });
        };
        use();
    }, []);

    return (
        <div
            className="rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
            <h2 className="mb-5 text-3xl font-semibold">About Me</h2>
            <p>
                I am a highly motivated Laravel Full-Stack Developer with two years of experience at
                <Link className='text-blue-500 px-2 hover:underline' href='https://teamsunday.com'>Sunday</Link>
            </p>
            <hr
                className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
            <p className="mb-4">
                My expertise lies in developing highly performant, responsive, and user-friendly web applications. I have a strong
                command over Laravel, Vue, Tailwind, and JavaScript that I use on my own project, enabling me to create
                efficient and scalable solutions. I am dedicated to staying up-to-date with the latest technologies and continuously
                enhancing my skills to deliver exceptional results.
            </p>
        </div>
    )
}

export default Summary