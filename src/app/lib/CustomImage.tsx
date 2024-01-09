import React from 'react'
import Image from 'next/image'

type CustomImageProps = {
    src: string,
    alt: string,
    priority?: boolean,
}

const CustomImage = ({src, alt, priority}:CustomImageProps) => {
  return (
    <Image 
    className=" w-full h-auto mx-auto"
    src={src}
    width={300}
    height={300}
    alt={alt}
    sizes='(min-width: 720px) 300px, 100vw'
    priority={!!priority}
    />
  )
}

export default CustomImage