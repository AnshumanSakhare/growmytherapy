"use client";

import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";

export default function GetStarted(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-accent bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-no-repeat" ref={ref}>
      <div className="min-h-125 md:min-h-150 lg:min-h-175 flex items-center justify-center px-4 sm:px-[3vw] bg-black/55">
        <div className="text-center max-w-[92%] sm:max-w-237.5 m-10">
          <Animated show={show} delay={0}>
            <h2 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-secondary mb-10">
              Ready to take the first step?
            </h2>
          </Animated>
          <p className="mt-5 text-[1.15rem] leading-[1.55] sm:mt-6 sm:body-lg text-secondary " style={{opacity:show?"1":" 0",transition:"opacity 600ms ease"}}>
            If you're looking for a therapist in Santa Monica who combines practical tools with depth-oriented work, I may be a good fit. I invite you to schedule a free consultation to see if we're a good fit.
          </p>
          <Animated show={show} delay={120}>
            <div className="mt-30 mb-10">
              <CTAButton className="btn-light text-[1.05rem]">Schedule a Free Consultation</CTAButton>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}