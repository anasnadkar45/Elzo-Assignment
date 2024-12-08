import { Button } from "@/components/ui/button";
import HeroImage from '../../../public/Women.png'
import Image from "next/image";
import Wave from '../../../public/wave.svg'
import TypingText from "./Text/typing-text";
import { CustomButton2 } from "./buttons/custom-button2";
import Hand from '../../../public/Hand.svg'

export const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto pt-44 pb-16 px-3">
            <div className="container mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Left content */}
                    <div className="flex-1 max-w-2xl text-center md:text-left">
                        <div className="mb-4 hidden md:flex">
                            <Image src={Wave} alt="Wave pattern" className="w-24" />
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                            Talk to 50x more users
                            <span className="text-primary">
                                <TypingText
                                    text="and uncover deeper insights"
                                />
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Streamline feedback, accelerate product development and uncover actionable insights instantly, with Elzo's AI powered conversations in 50+ languages
                        </p>
                        <div className="relative">
                            <CustomButton2>Book a Demo</CustomButton2>
                            <Image src={Hand} alt="Hand" className="animate-bounce mt-4"/>
                        </div>
                    </div>

                    {/* Right content - Illustration */}
                    <div className="flex-1 relative">
                        <Image
                            src={HeroImage}
                            alt="Woman using laptop with AI assistant"
                            className="w-full max-w-xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};