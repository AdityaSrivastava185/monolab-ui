
import Header from '@/components/Header/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const code = `import React from "react";
import {cn} from "@/lib/utils";
Ghost emphasis — lowest emphasis, for toolbars and table rows.
export const ButtonGhost = React.forwardRef<HTMLButtonElement,React.ButtonHTMLAttributes<HTMLButtonElement>
 >(({className, children, ...props }, ref) => {
   return (
<button
ref={ref}
className={cn(
"inline-flex h-10 items-center justify-center gap-2 rounded-full",
"px-5 text-sm text-muted transition-colors",
"hover:bg-brand-tag-bg hover:text-foreground",
focus-visible:ring-brand-orange",
className
)}
{...props}
>
{children}
</button>
);
 });`

const page = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='h-[400px] bg-brand-gray-dark flex flex-col items-center justify-between'>
          <div className='w-full mx-auto h-auto max-w-220 relative z-10 flex flex-col items-center justify-between'>
            <div className=' flex flex-col gap-4 py-10 md:py-20 size-full items-center justify-center text-center'>
              <p className='text-sm px-4 py-2 bg-background/20 w-fit rounded-xl'>BUTTON</p>
              <h1 className='text-5xl max-w-xl text-center text-balance'>All button variants at one place</h1>
              <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <p>27 Nov 2026</p>
                <p>By Monolab</p>
              </div>
            </div>
            <div className='hidden md:flex justify-between items-center w-full relative'>
              <Link href={"/"} className='px-4 py-2 rounded-xl bg-foreground text-background'>Back to home
              </Link>
              <Link href={"/"} className='px-4 py-2 rounded-xl bg-foreground text-background'>
                Share this post
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1740px] mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-5'>
                <div>
                  <p className='text-2xl py-3'>Primary button</p>
                </div>
                <div>
                  <p>description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, cupiditate.</p>
                </div>
                <div>
                  <div className="w-full min-w-0">
                    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-brand-gray-darker bg-background-secondary">
                      <pre className="w-full max-w-full overflow-x-auto p-5 font-mono text-sm leading-relaxed bg-brand-gray-darker/70">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div>
                  <p className='text-2xl py-3'>Primary button</p>
                </div>
                <div>
                  <p>description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, cupiditate.</p>
                </div>
                <div>
                  <div className="w-full min-w-0">
                    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-brand-gray-darker bg-background-secondary">
                      <pre className="w-full max-w-full overflow-x-auto p-5 font-mono text-sm leading-relaxed bg-brand-gray-darker/70">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div>
                  <p className='text-2xl py-3'>Primary button</p>
                </div>
                <div>
                  <p>description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, cupiditate.</p>
                </div>
                <div>
                  <div className="w-full min-w-0">
                    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-brand-gray-darker bg-background-secondary">
                      <pre className="w-full max-w-full overflow-x-auto p-5 font-mono text-sm leading-relaxed bg-brand-gray-darker/70">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div>
                  <p className='text-2xl py-3'>Primary button</p>
                </div>
                <div>
                  <p>description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, cupiditate.</p>
                </div>
                <div>
                  <div className="w-full min-w-0">
                    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-brand-gray-darker bg-background-secondary">
                      <pre className="w-full max-w-full overflow-x-auto p-5 font-mono text-sm leading-relaxed bg-brand-gray-darker/70">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default page


