import React from 'react'
import { CustomButton2 } from './buttons/custom-button2'
import Image from 'next/image'
import Hand from '../../../public/Hand.svg'
import Sparkle from '../../../public/Sparkel.svg'

export const BookNow = () => {
  return (
    <div className="container mx-auto px-3">
      <div className='relative flex max-w-7xl mx-auto h-fit bg-white p-4 md:p-14 gap-10 flex-col justify-center items-center rounded-3xl border border-foreground'>
        <div className="absolute bottom-20 right-8">
          <Image src={Sparkle} alt="Sparkle" />
        </div>
        <div className='text-center font-semibold text-2xl'>
          <h1>Start unlocking consumer insights on Autopilot!</h1>
          <p className='text-sm text-gray-400'>Uncover the 'Why' and transform your product decisions with Elzo.
            Book a Demo to see it in action.
          </p>
        </div>
        <div className="relative">
          <CustomButton2>Book a Demo</CustomButton2>
          <Image src={Hand} alt="Hand" className="absolute animate-bounce mt-4" />
        </div>
      </div>
    </div>
  )
}
