"use client";

import Image from "next/image";
import Dot from "../../../public/Three.svg";
import Wave from "../../../public/wave2svg.svg";
import BottomLine from "../../../public/Bottom.png";

export function ProductDemo() {
  return (
    <div className="max-w-7xl mx-auto relative p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">

        {/* Container with border and solid shadow */}
        <div className="relative overflow-hidden rounded-2xl border border-foreground bg-white p-6 sm:p-10 lg:p-14 drop-shadow-[4px_4px_0px_#212529]">
          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <Image src={BottomLine} alt="Bottom Line" className="w-full h-auto" />
          </div>
          {/* Sparkle decoration */}
          <div className="absolute -top-10 -right-10">
            <Image src={Dot} alt="Dot" className="w-10 sm:w-14" />
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
            {/* Video Section */}
            <div className="relative w-full h rounded-xl overflow-hidden bg-zinc-900">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/placeholder.svg?height=400&width=600"
              >
                <source src="/Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Content Section */}
            <div className="space-y-4 md:text-center lg:text-left">
              {/* Wavy line decoration */}
              <div className="flex justify-center lg:justify-start">
                <Image src={Wave} alt="Wave pattern" className="w-20 sm:w-24" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Watch product demo
              </h2>
              <p className="text-[0.85rem] text-zinc-600">
                Learn how easily you can set up your first AI campaign with Elzo
                and start engaging users at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
