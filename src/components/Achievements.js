const Achievements = () => {
    return (
        <section className="my-12">
            <div className="container mx-auto text-center lg:text-left xl:px-32">
                <div className="flex grid items-center lg:grid-cols-2">
                    <div className="mb-12 lg:mb-0">
                        <div
                            className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                            <h3 className="mb-3 text-2xl font-bold">
                                We know how valuable your time is
                            </h3>
                            <ol className='list-disc flex flex-col gap-3'>
                                <li>
                                    Collaborated with a team of developers to develop Laravel-based web applications.
                                </li>
                                <li>
                                    Implemented responsive UI designs using laravel-Blade and Bootstrap CSS.
                                </li>
                                <li>
                                    Optimize the Wardrobe application performance by writing efficient and clean code.
                                </li>
                                <li>
                                    Conducted thorough testing and debugging to ensure high-quality deliverables.
                                </li>
                                <li>
                                    Actively participated in code reviews and provided constructive feedback to improve code quality.
                                </li>
                                <li>
                                    Worked closely with Sunday to understand project requirements and deliver customized solutions.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/075.jpg"
                             className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements