"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Logo from '../../../public/Logo.svg'
import { CustomButton } from "./buttons/custom-button"
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F4]">
            <div className="max-w-7xl mx-auto">
                <div className="container mx-auto px-3 h-20 flex items-center justify-between">
                    <Image src={Logo} alt="Elzo AI" width={100} height={100} />
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-sm hover:text-primary">Pricing</a>
                        <a href="#" className="text-sm hover:text-primary">Use Cases</a>
                        <a href="#" className="text-sm hover:text-primary">Contact Us</a>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#" className="text-sm hover:text-primary">Login</a>
                        <CustomButton>Get Started - It&apos;s Free</CustomButton>
                    </div>
                    <div className="hover:cursor-pointer md:hidden">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#F4F4F4] py-4">
                    <div className="container mx-auto px-4 flex flex-col gap-4">
                        <a href="#" className="text-sm hover:text-primary">Pricing</a>
                        <a href="#" className="text-sm hover:text-primary">Use Cases</a>
                        <a href="#" className="text-sm hover:text-primary">Contact Us</a>
                        <a href="#" className="text-sm hover:text-primary">Login</a>
                        <CustomButton className="w-full">Get Started - It&apos;s Free</CustomButton>
                    </div>
                </div>
            )}
        </nav>
    )
}

