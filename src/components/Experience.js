'use client'

import {useEffect} from "react";
import Link from "next/link";

const Experience = () => {

    useEffect(() => {
        const use = async () => {
            const {Ripple, initTE} = await import('tw-elements');
            initTE({Ripple});
        };
        use();
    }, []);

    return (
        <>
            <h3
                className="mb-6 ml-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                Experience
            </h3>

            <ol className="border-l-2 border-primary dark:border-primary-500">

                <li>
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                        <h4 className="-mt-2 text-xl font-semibold">Web Developer Intern at 8Trust</h4>
                    </div>
                    <div className="mb-6 ml-6 pb-6">
                        <span
                            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                            Jan 2021 - Apr 2021
                        </span>
                        <ol className='list-disc py-2'>
                            <li>
                                Create a new Dashboard for 8Trust that will be used for managing project and the client
                                data.
                            </li>
                            <li>
                                Help the team with different tasks. like updating WordPress plugin, templates and
                                design.
                            </li>
                            <li>
                                During my internship I gain working experience and learn new skills like Docker,
                                WordPress Jekyll etc.
                            </li>
                        </ol>
                        <Link href='https://www.8trust.com/' target='_blank'
                              className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                              data-te-ripple-init data-te-ripple-color="light">
                            Visit 8Trust
                        </Link>
                    </div>
                </li>

                <li>
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                        <h4 className="-mt-2 text-xl font-semibold">Php Developer at Sunday</h4>
                    </div>
                    <div className="mb-6 ml-6 pb-6">
                        <span
                            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                            July 2021 - July 2023
                        </span>
                        <ol className='list-disc py-2'>
                            <li className='py-2'>
                               <h5>Add new features, like</h5>
                                <ul className='list-disc px-4 space-y-2'>
                                    <li>Address autocompletion using Google map api.</li>
                                    <li>Data table optimisation to loading data per page with the pagination query.</li>
                                    <li>Create package that used as adaptor to for e-commerce platforms.</li>
                                    <li>Authentication through OAuth providers such as Google, Microsoft ...</li>
                                </ul>
                            </li>
                            <li>Update and optimise to improve performance and make it easy to maintain for the future.</li>
                            <li>Conducted in-depth performance tests into back-end features, ensuring proper functionality and debugging code where required.</li>
                            <li>Altered and updated software features to enhance user experience and functionality.</li>
                        </ol>
                        <Link href='https://teamsunday.com/' target='_blank'
                              className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                              data-te-ripple-init data-te-ripple-color="light">
                            Visit Sunday
                        </Link>
                    </div>
                </li>
            </ol>
        </>
    )
}

export default Experience