import Image from 'next/image'
import React from 'react'

const Imges = [
  {img: '/behance.svg', alt: 'behance'},
  {img: "/cocacola.svg", alt: "cocacola"},
  {img: "/google.svg", alt: "google"},
  {img: "/iribbble.svg", alt: "iribbble"},
  {img: "/amazon.svg", alt: "amazon"},
]

const Words = () => {
  return (
    <div className='flex flex-wrap justify-center pt-10 pb-28'>
        {Imges.map((item, index) => (
            <div key={index} className='text-center pt-20 mx-auto'>
                <Image src={item.img} alt={item.alt} width={150} height={150} className='m-auto drop-shadow-2xl'></Image>
            </div>
        ))}
    </div>
  )
}

export default Words