import Header from '@/components/Header/Header'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const page = () => {
  return (
    <div className='w-full'>
      <Header />
      <div>
        <div className='border border-brand-gray-darker'>
          <div className='px-3 md:px-7 py-10 md:py-20 container'>
            <p className='text-brand-gray-light text-sm py-2'>PRODUCT/COMPONENTS</p>
            <h1 className='text-5xl'>All Components</h1>
          </div>
        </div>
        <div className='py-10 container'>
          <div className=''>
            <p className='bg-brand-gray-darker/70 px-2 py-1 w-fit rounded-md'>RECENTLY RELEASED COMPONENTS</p>
          </div>
        </div>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-brand-gray-darker'>
            <div className='border-brand-gray-darker md:col-span-2 flex flex-col'>
              <div className='flex flex-1 border-b border-brand-gray-darker'>
                <div className='flex w-1/2 flex-col justify-center gap-4'>
                  <div className='flex flex-col items-start h-full w-full gap-3  px-8 pt-8'>
                    <p className='w-fit bg-brand-gray-darker/70 group-hover:bg-primary px-3 py-2 rounded-xl text-sm'>PRODUCT</p>
                    <p className='text-3xl'>
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam at, eius quod libero a assumenda? Expedita, excepturi?</p>
                  </div>
                  <div className='flex flex-row items-center border border-brand-gray-darker'>
                    <div className='flex-1 px-4 py-3'>
                      <p>November 10, 2026</p>
                    </div>
                    <div className='flex-1 border-r border-brand-gray-darker px-4 py-3'>
                      <Link href={''}>View Component</Link>
                    </div>
                    <div className='px-4 py-3'>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
                <div className='relative w-1/2'>
                  <Image src='/images/hero-poster.avif' fill alt='component image' className='object-cover' />
                </div>
              </div>
            </div>
            <div className='group border-brand-gray-darker flex flex-col p-7'>
              <div className='border border-brand-gray-darker'>
                <div className='relative h-56 '>
                  <Image src='/images/hero-poster.avif' fill alt='component image' className='object-cover' />
                </div>
                <div className='flex flex-1 flex-col justify-center gap-4 p-8'>
                  <p className='w-fit bg-brand-gray-darker/70 group-hover:bg-primary px-3 py-2 rounded-xl text-sm'>RESEARCH</p>
                  <p className='text-3xl'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi?</p>
                </div>
                <div className='flex flex-row items-center'>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <p>October 29, 2026</p>
                  </div>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <Link href={''}>View Component</Link>
                  </div>
                  <div className='px-4 py-3 border border-brand-gray-darker'>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className='group border-brand-gray-darker flex flex-col p-7'>
              <div className='border border-brand-gray-darker'>
                <div className='relative h-56 '>
                  <Image src='/images/hero-poster.avif' fill alt='component image' className='object-cover' />
                </div>
                <div className='flex flex-1 flex-col justify-center gap-4 p-8'>
                  <p className='w-fit bg-brand-gray-darker/70 group-hover:bg-primary px-3 py-2 rounded-xl text-sm'>RESEARCH</p>
                  <p className='text-3xl'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi?</p>
                </div>
                <div className='flex flex-row items-center'>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <p>October 29, 2026</p>
                  </div>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <Link href={''}>View Component</Link>
                  </div>
                  <div className='px-4 py-3 border border-brand-gray-darker'>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className='group border-brand-gray-darker flex flex-col p-7'>
              <div className='border border-brand-gray-darker'>
                <div className='relative h-56 '>
                  <Image src='/images/hero-poster.avif' fill alt='component image' className='object-cover' />
                </div>
                <div className='flex flex-1 flex-col justify-center gap-4 p-8'>
                  <p className='w-fit bg-brand-gray-darker/70 group-hover:bg-primary px-3 py-2 rounded-xl text-sm'>RESEARCH</p>
                  <p className='text-3xl'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi?</p>
                </div>
                <div className='flex flex-row items-center'>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <p>October 29, 2026</p>
                  </div>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <Link href={''}>View Component</Link>
                  </div>
                  <div className='px-4 py-3 border border-brand-gray-darker'>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className='group border-brand-gray-darker flex flex-col p-7'>
              <div className='border border-brand-gray-darker'>
                <div className='relative h-56 '>
                  <Image src='/images/hero-poster.avif' fill alt='component image' className='object-cover' />
                </div>
                <div className='flex flex-1 flex-col justify-center gap-4 p-8'>
                  <p className='w-fit bg-brand-gray-darker/70 group-hover:bg-primary px-3 py-2 rounded-xl text-sm'>RESEARCH</p>
                  <p className='text-3xl'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi?</p>
                </div>
                <div className='flex flex-row items-center'>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <p>October 29, 2026</p>
                  </div>
                  <div className='flex-1 border border-brand-gray-darker px-4 py-3'>
                    <Link href={''}>View Component</Link>
                  </div>
                  <div className='px-4 py-3 border border-brand-gray-darker'>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
