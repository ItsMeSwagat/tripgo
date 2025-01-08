"use client"

import Image from "next/image"
import location from '../assets/icons/location.svg'

const ProductCard = () => {
  return (
    <div className=" w-[20rem] h-[23rem] rounded-[10px] overflow-hidden">
        {/* card image */}
         <Image src={`/Bgimg.png`} alt="product image" width={500} height={500} className=" w-full h-[60%] object-cover"/>

         {/* card content */}
         <div>
            <p className=" text-text font-semibold">Venice, Rome and Milan - <br /> 9 Days and 8 Nights</p>
            <div>
                <Image src={location} alt="icon" />
            </div>
         </div>
    </div>
  )
}

export default ProductCard