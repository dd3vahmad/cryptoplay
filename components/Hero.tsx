import Image from "next/image";
import React from "react";
import heroBanner from "@/assets/hero_banner.png";
import { Button } from "./ui/button";
import { Trophy } from "lucide-react";

const Hero = () => {
  return (
    <main className="px-20 py-5 flex flex-col gap-y-3">
      <div className="grid grid-cols-7 gap-x-3 flex-1">
        <div className="col-span-5 relative">
          <div className="flex flex-col gap-y-8 absolute z-20 bg-transparent h-full w-full items-center justify-center left-0 top-0">
            <h1 className="text-5xl font-bold text-white">
              Play to <span className="text-tertiary">Earn</span> in Style
            </h1>

            <p className="text-white max-w-xl text-center">
              Experience the future of online gaming with CryptoPlay. Connect
              your wallet and start winning today.
            </p>

            <div className="flex items-center gap-3">
              <Button className="bg-tertiary text-white cursor-pointer hover:bg-tertiary hover:opacity-80">
                Start Playing
              </Button>
              <Button className="bg-transparent text-tertiary border border-tertiary cursor-pointer">
                <Trophy /> View Games
              </Button>
            </div>
          </div>

          <span className="z-10 absolute bg-black w-[320px] h-[320px] top-[30%] blur-3xl left-[40%]"></span>

          <div style={{ position: "relative", height: "60vh", width: "100%" }}>
            <Image
              src={heroBanner.src}
              alt="Hero section banner"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div></div>
    </main>
  );
};

export default Hero;
