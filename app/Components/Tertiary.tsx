"use client";
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";
import Image from "next/image";

const items=[
  <>Feeling <strong className="text-[1.25rem] text-primary">overwhelmed, stuck, or emotionally on edge</strong></>,
  <>Struggling with <strong className="text-[1.25rem] text-primary">constant worry, tension, or difficulty sleeping</strong></>,
  <>Navigating the impact of <strong className="text-[1.25rem] text-primary">earlier life experiences</strong> on your relationships and confidence</>,
  <>Feeling <strong className="text-[1.25rem] text-primary">disconnected from yourself</strong> after years of pushing through stress</>,
  <>Dealing with <strong className="text-[1.25rem] text-primary">professional burnout, perfectionism, or high internal pressure</strong></>
];


export default function Tertiary() {
  const { ref, show } = useReveal(120);

  return (
    <section
      ref={ref}
      className="relative bg-accent-soft mt-[2.5vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:min-h-screen">

        <Animated show={show} delay={180}>
            <div className="relative h-[34vh] sm:h-[50vh] lg:min-h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=1600&fit=crop&q=80"
                alt="Tranquil ocean sunset representing peace and clarity"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/8"></div>
            </div>
          </Animated>
        
        <div className="grid grid-rows-[1fr_auto]">

          <div className="flex pt-10 sm:items-center justify-center px-2">
            <div className="max-w-200 px-6 sm:px-0">
              <Animated show={show} delay={0}>
                <h1 className="mb-2 heading-lg text-primary/95 tracking-tight">
                  Do any of these feel familiar?
                </h1>
              </Animated>

              <p className="mt-4 body-lg text-primary">
                You're not alone. Many of us struggle with these challenges.
              </p>
              <ul className="mt-5 mb-6 pl-4 space-y-2 body-md leading-[1.45] text-primary/90">
                {items.map((item,i)=>(
                  <li key={i} className="flex gap-1 sm:gap-3 items-start transition-all duration-500 ease-out"
                    style={{
                      opacity: show? 1:0,
                      transform: show?"translateY(10px)":"translateY(12px)",
                      transitionDelay: `${i*100}ms`
                    }}
                  >
                    <span className="mt-4 h-1 w-1 shrink-0 rounded-full bg-primary/90" />
                    <span className="block"> {item}</span>
                  </li>
                ))}
              </ul>

              <Animated show={show} delay={220}>
                <p className="mt-3 sm:mt-4 body-lg text-primary/95">
                  Therapy can provide a space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.
                </p>
              </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-primary/50 mt-10 sm:mt-0">
              <CTAButton className="w-full py-8 text-sm font-medium tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                Take the First Step
              </CTAButton>
            </div>
          </Animated>
        </div>

      </div>
    </section>
  );
}