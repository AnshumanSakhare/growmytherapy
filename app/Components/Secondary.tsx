"use client";
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";
import Image from "next/image";

export default function Secondary() {
  const { ref, show } = useReveal(120);

  return (
    <section
      ref={ref}
      className="relative bg-muted sm:-mt-[12vh] md:-mt-[8vh] lg:-mt-[13vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] lg:min-h-[85vh]">
        
        <div className="grid grid-rows-[1fr_auto] order-last lg:order-0">

          <div className="flex justify-center sm:items-center pt-12 sm:pt-[4vh] px-2">
            <div className="max-w-210 px-6 py-4 sm:py-8 sm:px-0">
              <Animated show={show} delay={0}>
                <h1 className="heading-lg text-primary ">
                  You don't have to navigate life's challenges alone.
                </h1>
              </Animated>
                <Animated show={show} delay={120}>
                  <p className="mt-4 body-md text-primary/95">
                    Feeling overwhelmed, stuck in overthinking, or emotionally on edge? You're not alone. Many high-achieving adults feel "functional" on the outside while struggling internally. I specialize in helping individuals in <strong className="text-[1.2rem] text-primary">Santa Monica</strong> and across <strong className="text-[1.2rem] text-primary">California</strong> find relief from <strong className="text-[1.2rem] text-primary">anxiety, trauma, and burnout</strong>.
                  </p>
                  <p className="mt-4 body-md text-primary/95">
                    My approach is warm, collaborative, and grounded in evidence-based methods like <strong className="text-[1.2rem] text-primary">CBT and EMDR</strong>. Together, we'll create a safe space for you to slow down, reconnect with yourself, and develop practical tools to build a more sustainable and fulfilling life.
                  </p>
                </Animated>

                <Animated show={show} delay={220}>
                  <p className="mt-3 body-md text-primary/95">
                    If you're looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit.
                  </p>
                </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-primary/40 mt-35 sm:mt-0">
              <CTAButton className="w-full py-6 text-[1rem] font-medium tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                Learn More About My Approach
              </CTAButton>
            </div>
          </Animated>
        </div>

        <Animated show={show} delay={180}>
          <div className="relative order-first lg:order-0 h-[32vh] sm:h-[45vh] lg:min-h-full overflow-hidden">
            <Image
              src="https://placehold.co/600x400/e8e4d9/5e8b7e"
              alt="A tranquil image of a misty forest"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Animated>
      </div>
    </section>
  );
}