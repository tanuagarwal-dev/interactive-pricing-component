"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import confetti from "canvas-confetti";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const [value, setValue] = useState(50);
  const [billing, setBilling] = useState(false);  
  const pageviews = ["10K", "50K", "100K", "500K", "1M"];
  const prices = [8, 12, 16, 24, 36];
  const index = Math.round((value / 100) * (prices.length - 1));
  const displayPrice = billing
    ? Math.round(prices[index] * 0.75)
    : prices[index];

  return (
    <div className="relative dark:bg-[#10131c] bg-[#fafbff] min-h-screen flex justify-center items-start md:items-center text-[#858fad]">
      {/* Top SVG background */}
      <div className="w-full md:h-120 h-100 bg-[url('/images/bg-pattern.svg')] dark:bg-none dark:bg-[#173dbb2d] dark:rounded-bl-[30%]  bg-cover bg-center absolute top-0 left-0"></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col gap-16 w-11/12 max-w-md md:max-w-lg text-center ">
        {/* Heading */}
        <div className="relative h-40 flex flex-col items-center justify-center gap-2 mt-10 lg:mt-0 text-[#293356] dark:text-[#00ffea] animate-float">
          {/* Background circles */}
          <div className="absolute inset-0 bg-[url('/images/pattern-circles.svg')] bg-no-repeat bg-center dark:invert dark:brightness-74" />

          {/* Content above */}
          <h1 className="text-3xl font-bold relative z-10">
            Simple, traffic based pricing
          </h1>
          <p className="text-[15px] relative z-10">
            Sign-up for 30-day trial. No credit card required.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white dark:bg-[#232b48] shadow-lg flex flex-col items-center gap-4 dark:text-[#a7b3b2] text-slate-500 px-4 py-14 mb-16 md:mb-0 ">
          {/* Price info */}
          <div className="w-full hidden md:block">
            <div className="text-lg flex justify-between w-full p-2 items-center">
              <span>{pageviews[index]} PAGEVIEWS</span>
              <span className="flex items-center">
                <span className="text-slate-900 dark:text-[#adf4ec] text-4xl font-semibold transition-all duration-300 tracking-tighter">
                  ${displayPrice}.00
                </span>
                /&nbsp;month
              </span>
            </div>

            {/* Slider */}
            <div className="w-full p-4">
              <input
                title="pricing"
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full"
                style={{ "--slider-fill": `${value}%` } as React.CSSProperties}
              />
            </div>
          </div>
          <div className="w-full md:hidden flex flex-col gap-4">
            <span>{pageviews[index]} PAGEVIEWS</span>

            {/* Slider */}
            <div className="w-full p-4">
              <input
                title="pricing"
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full"
                style={{ "--slider-fill": `${value}%` } as React.CSSProperties}
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-slate-900 dark:text-[#adf4ec] text-4xl font-semibold transition-all duration-300 tracking-tighter">
                ${displayPrice}.00
              </span>
              /&nbsp;month
            </div>
          </div>

          {/* Billing Switch */}
          <div className="flex gap-4 text-sm items-center py-6 justify-center md:justify-around w-full">
            <span className="flex items-center gap-2">
              Monthly Billing
              <Switch
                checked={billing}
                onCheckedChange={setBilling}
                className="transition-colors duration-300"
                aria-label="Toggle billing cycle"
              />
            </span>
            <span className="flex items-center gap-2">
              Yearly Billing
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="bg-[hsl(14,92%,95%)] dark:bg-[#f47a51] text-[#ff8c66] dark:text-[#fff] py-1 px-2 rounded-sm transition-colors duration-300 cursor-help">
                      25% discount
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Save 3 months worth when billed yearly.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </div>

          <Separator />

          {/* Features + Button */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-around p-4 w-full">
            <ul className="list-none space-y-2 ">
              <li className="flex items-center gap-2 hover:scale-105 hover:text-[#5375f1] transition-all duration-200">
                <Image
                  src="/images/icon-check.svg"
                  width={16}
                  height={16}
                  alt="bullet"
                />
                Unlimited websites
              </li>
              <li className="flex items-center gap-2 hover:scale-105 hover:text-[#5375f1] transition-all duration-200">
                <Image
                  src="/images/icon-check.svg"
                  width={16}
                  height={16}
                  alt="bullet"
                />
                100% data ownership
              </li>
              <li className="flex items-center gap-2 hover:scale-105 hover:text-[#5375f1] transition-all duration-200">
                <Image
                  src="/images/icon-check.svg"
                  width={16}
                  height={16}
                  alt="bullet"
                />
                Email reports
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                confetti({
                  particleCount: 120,
                  spread: 70,
                  origin: { y: 0.6 },
                });
              }}
              className="bg-[#293356] dark:bg-[#5375f1] dark:text-[#eeeff0] rounded-full w-full md:w-1/2 p-2 text-[#bdccff]
             hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
