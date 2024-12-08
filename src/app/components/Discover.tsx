import React from 'react'
import { CustomButton2 } from './buttons/custom-button2'
import Image from 'next/image'
import Hand from '../../../public/Hand.svg'

export const Discover = () => {
    return (
        <div className='w-full bg-white py-20 px-3'>
            <div className="container mx-auto">
                <div className='max-w-7xl mx-auto flex flex-wrap space-y-3 md:space-y-0 justify-between items-center bg-foreground rounded-3xl p-6 md:p-10'>
                    <div className='text-3xl font-bold text-white space-y-4'>
                        <h1>Experience <span className='text-primary'>Elzo</span> in Action</h1>
                        <p className='text-base font-normal'>Discover the 'WHY' with Elzo's AI</p>
                    </div>

                    <div className='flex w-fit h-[400px] p-8 md:p-14 gap-10 flex-col justify-center items-center rounded-md border-[1px] border-[solid] bg-white [box-shadow:6px_6px_0px_0px_var(--Color-Secondary-Grey-900,_#90C1F8)]'>
                        <div className='text-center font-semibold text-2xl'>
                            <h1>👋 🚗</h1>
                            <h1>Let's chat about your last Uber experience!</h1>
                        </div>
                        <div className="relative">
                            <CustomButton2>Book a Demo</CustomButton2>
                            <Image src={Hand} alt="Hand" className="absolute animate-bounce mt-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
