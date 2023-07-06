import Link from "next/link";

const Study = () => {
    return (
        <div className='mb-2'>
            <h3
                className="mb-6 ml-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                Study
            </h3>

            <ol
                className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
                <li>
                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                            Aug 2020 - Jan 2021
                        </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                        <h4 className="mb-1.5 text-xl font-semibold">
                            <Link href='https://becode.org/' className='text-blue-500 hover:underline'>Becode</Link>
                        </h4>
                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Acquired in-depth knowledge of programming fundamentals, including HTML, CSS, JavaScript,
                            and PHP. Developed practical skills in building dynamic web applications using Laravel,
                            React and Vue.js.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                            Sep 2012 - Mar 2016
                        </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                        <h4 className="mb-1.5 text-xl font-semibold">Civil Engineering</h4>
                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Learn logic and analytical problems solving skills and to visualize the full scope of the
                            the problem.
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Study