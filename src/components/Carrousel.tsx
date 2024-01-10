'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const images = [
    { src:'/images/caroussel/emerson.png' ,alt: 'First' },
    { src:'/images/caroussel/patricia.png' ,alt: 'Second' },
    { src:'/images/caroussel/emerson.png' ,alt: 'Third' },
    { src:'/images/caroussel/patricia.png' ,alt: 'Fourth' }
  ]

const Carrousel = () => {
    
  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={true}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-28 w-full rounded-lg'
          spaceBetween={50}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className='block h-full w-full object-cover'
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Carrousel