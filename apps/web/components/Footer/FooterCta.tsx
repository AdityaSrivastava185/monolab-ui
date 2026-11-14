import React from 'react'
import Link from 'next/link'

const FooterCta = () => {
    return (
        <div className="mx-auto w-full md:max-w-[1440px] inner-container px-7 md:px-0">
            {/* <section className="relative h-[500px] w-full bg-[url('/images/hero-poster.avif')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-2xl"> */}
            <section className='relative bg-primary h-[500px] w-full rounded-2xl items-center justify-center flex flex-col'>
                <div>
                    <h1 className="text-3xl md:text-5xl text-foreground text-center">
                        Deploy your frontend easily
                    </h1>
                    <p className="text-center text-balance max-w-4xl mx-auto w-full py-2">
                        Join thousands of developers who've eliminated infrastructure
                        complexity and deployed globally with Edgeform. Start building for
                        free — no credit card required.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 py-2">
                        <Link
                            href={""}
                            className="bg-foreground text-background rounded-full px-5 py-3"
                        >
                            Start Building for free
                        </Link>
                        <Link
                            href=""
                            className="rounded-full border border-foreground/10 bg-foreground/5 px-5 py-3 text-foreground backdrop-blur-2xl transition-all duration-300 hover:bg-foreground/10"
                        >
                            View Docs
                        </Link>
                    </div>
                </div>
                <div
                    className="pointer-events-none absolute inset-0 z-10 size-full bg-[url('/images/noise-rectangle.png')] bg-repeat bg-size-[160px_160px] mix-blend-plus-lighter"
                    aria-hidden="true"
                />
            </section>
        </div>

        // <div className="relative mt-12 md:my-20">
        //   <div className="flex flex-col items-start justify-between gap-8 bg-primary p-6 sm:p-8 md:flex-row md:items-center md:gap-6 md:p-10 lg:p-20">
        //     {/* Heading */}
        //     <div className="w-full pb-3 md:flex-1">
        //       <div>
        //         <p className="text-sm font-thin sm:text-base">
        //           BUILD YOUR OWN AI IDEA
        //         </p>
        //       </div>

        //       <div className="mt-3 max-w-4xl">
        //         <p className="text-3xl leading-tight sm:text-4xl xl:text-5xl">
        //           Build, customize, and deploy tailored AI solutions with complete
        //           control over your build
        //         </p>
        //       </div>
        //        <p className="text-sm">Image Source - <Link href={"https://mistral.ai/"} className="text-sm text-foreground underline">Mistral AI</Link></p>
        //     </div>

        //     {/* Buttons */}
        //     <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:w-auto md:flex-nowrap md:gap-4">
        //       <button className="flex w-full items-center justify-between gap-3 rounded-md bg-primary-dark px-4 py-3 text-base text-foreground sm:w-auto sm:text-lg">
        //         <span>Start building</span>
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="24"
        //           height="24"
        //           viewBox="0 0 24 24"
        //           fill="none"
        //           stroke="currentColor"
        //           strokeWidth="2"
        //           strokeLinecap="round"
        //           strokeLinejoin="round"
        //           aria-hidden="true"
        //           className="shrink-0"
        //         >
        //           <path d="m6 17 5-5-5-5" />
        //           <path d="m13 17 5-5-5-5" />
        //         </svg>
        //       </button>

        //       <button className="flex w-full items-center justify-between gap-3 rounded-md bg-foreground px-4 py-3 text-base text-background sm:w-auto sm:text-lg">
        //         <span>Contact for sales</span>
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="24"
        //           height="24"
        //           viewBox="0 0 24 24"
        //           fill="none"
        //           stroke="currentColor"
        //           strokeWidth="2"
        //           strokeLinecap="round"
        //           strokeLinejoin="round"
        //           aria-hidden="true"
        //           className="shrink-0"
        //         >
        //           <path d="m6 17 5-5-5-5" />
        //           <path d="m13 17 5-5-5-5" />
        //         </svg>
        //       </button>
        //     </div>
        //   </div>

        //   {/* Noise overlay */}
        //   <div
        //     className="pointer-events-none absolute inset-0 z-10 size-full bg-[url('/images/noise-rectangle.png')] bg-repeat bg-size-[160px_160px] mix-blend-plus-lighter"
        //     aria-hidden="true"
        //   />
        // </div>
    )
}

export default FooterCta
