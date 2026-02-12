"use client";
/* eslint-disable @next/next/no-img-element */
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";

export default function Primary(){
  const {ref,show}=useReveal(80);
  return (
    <section className="w-full bg-secondary overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-450 section-x pt-24 sm:pt-30 lg:pt-35 pb-30">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 sm:gap-16 lg:gap-20 items-center">

        <Animated show={show} delay={0}>
          <div className="relative mx-auto w-[70%] sm:w-[60%] md:w-[55%] lg:w-[85%] aspect-[2.8/4] overflow-hidden rounded-t-[999px]">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop&q=80" alt="Peaceful mountain landscape at sunrise" className="w-full h-full object-cover object-contain"/>
          </div>
        </Animated>

        <div className="text-center sm:mt-0"  style={{ animationDelay: "120ms" }}>
          <Animated show={show} delay={120}>
            <h1 className="font-medium text-primary leading-[1.12] text-[clamp(2.2rem,8vw,3rem)] sm:text-[calc(3.2vw+1.5rem)]">
              Therapy for Anxiety, Trauma & Burnout in Santa Monica
            </h1>
          </Animated>
          <Animated show={show} delay={220}>
            <p className="mt-5 text-primary text-[clamp(1rem,1.05vw,1.15rem)]">
              Find healing and resilience with a licensed psychologist who understands the pressures of modern life.
            </p>
            <p className="text-primary/60 text-[0.85rem]">In-person and telehealth sessions available for adults in California.</p>
          </Animated>
          <Animated show={show} delay={320}>
            <div className="mt-8">
              <CTAButton className="btn-primary text-[1rem]">
                Schedule a Free Consultation
              </CTAButton>
            </div>
          </Animated>
          
        </div>

        </div>
      </div>
    </section>
  );
}