import React from 'react'
import { ProvideLinks } from '@/constant'
import Image from 'next/Image'

const Provide = () => {
  return (
    <div>
        <div className='text-start pt-24'>
            <div className='m-32 inline '>
                <h1 className='ms-36 max-sm:ms-10 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base font-riot font-bold'>What We Provide</h1>
                <p className='ms-36 max-sm:ms-10 w-[400px] max-sm:w-[300px] pt-3 font-riot font-medium'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
            </div>
            <div className='inline-block float-right mt-[-5%] mx-36 max-sm:ms-0'>
                <button type='submit' className='bg-orange-200 py-3 px-5 text-orange-600 font-riot font-bold'>
                    <a href="/">See More</a>
                </button>
            </div>
        </div>
        <div className='flex flex-wrap justify-center mt-16'>
            {ProvideLinks.map((item, index) => (
                <div key={index} className='text-center pt-16 pb-10 mx-24 max-sm:mx-32 justify-center px-10 my-3' style={{backgroundColor: item.bg}}>
                    <Image src={item.img} alt={item.title} width={150} height={150} className='text-center justify-center drop-shadow-2xl mx-auto'></Image>
                    <b className='text-center text-2xl font-riot font-bold pt-[-100px]'>{item.title}</b>
                    <p className='w-[200px] pt-3 font-riot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quidem.</p>
                    <a href="/" className='underline font-riot font-bold'>Learn More</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Provide