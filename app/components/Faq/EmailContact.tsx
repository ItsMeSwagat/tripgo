import React from 'react'
import emailicon from '../../assets/icons/Vector.svg'
import Image from 'next/image'

type Props = {}

export default function EmailContact({}: Props) {
  return (
    <section className=' flex flex-col gap-5 justify-center items-center text-center pb-[5rem]'>
        <h3 className=' text-[32px] font-semibold'>Can’t find what you are <br /> looking for?</h3>
        <button className=' btn flex items-center gap-3'>
            <Image src={emailicon} alt='email' width={20} />
            <span className=' font-semibold'>Email Us</span>
        </button>
    </section>
  )
}