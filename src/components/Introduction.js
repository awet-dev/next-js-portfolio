import Modal from "@/components/Modal";

const Introduction = () => {
    return (
        <div className="mx-auto lg:px-6">
            <section className="text-center lg:text-left">
                <div className="p-0 lg:p-6">
                    <div className="grid p-6 items-center lg:grid-cols-2 lg:gap-x-12">
                        <div className="mb-12 lg:mb-0">
                            <h2 className="my-4 md:text-4xl text-2xl font-bold leading-tight tracking-tight">
                                I am Awet Tesfay<br/>
                                <span className="text-success dark:text-success-400">Full Stack Developer!</span>
                            </h2>
                            <button
                                type="button"
                                className="mb-2 inline-block rounded bg-success px-4 md:px-12 py-2 md:py-4 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] md:mr-2 md:mb-0"
                                data-te-toggle="modal"
                                data-te-target="#exampleModalCenter"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Contact Me
                            </button>
                            <a className="inline-block rounded px-4 md:px-12 py-2 my-2 md:py-4 ml-2 text-sm font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:text-success-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                               data-te-ripple-init data-te-ripple-color="light" href="https://github.com/awet-dev" target='_blank' role="button">Visit Github</a>
                        </div>
                        <Modal />


                        <img src="/portfolio.jpeg"
                             className="w-full block rounded-lg shadow-lg dark:shadow-black/20" alt=""/>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Introduction