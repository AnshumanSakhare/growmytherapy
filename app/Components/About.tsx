"use client";
/* eslint-disable @next/next/no-img-element */
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";

export default function About(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-muted" ref={ref}>
      <div className="mx-auto max-w-450 px-4 lg:px-12 pt-25 pb-30 sm:pt-35 sm:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mx-0">
          <div className="order-last lg:order-0">
            <div className="px-1 sm:px-0">
              <Animated show={show} delay={120}>
                <h2 className="heading-xl text-primary">
                  About Dr. Maya Reynolds, a Santa Monica Psychologist
                </h2>
                <p className="mt-5 text-[0.9rem] text-primary/75">Licensed Clinical Psychologist in Santa Monica, CA</p>
              </Animated>
              
              <p className="mt-10 body-md leading-[1.55] sm:leading-[1.7] text-primary/90 transition-all duration-500 ease-out">
                I'm a licensed clinical psychologist in <strong className="text-[1.25rem] text-primary">Santa Monica, California</strong>, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are <strong className="text-[1.25rem] text-primary">high-achieving, thoughtful, and self-aware</strong>—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p className="mt-6 body-md leading-[1.55] sm:leading-[1.7] text-primary/90 transition-all duration-500 ease-out">
                My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time. If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
              </p>
              <p className="mt-3 body-md leading-[1.55] sm:leading-[1.7] text-primary/90 transition-all duration-500 ease-out">
                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.
              </p>
            </div>

            <Animated show={show} delay={220}>
              <div className="-mb-5 mt-12 sm:mt-35 flex justify-center">
                <CTAButton className="border border-primary px-6 py-3 text-[1.1rem] tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                  Request a Consultation
                </CTAButton>
              </div>
            </Animated>
          </div>

          <div className="flex justify-center w-full pb-10">
            <Animated show={show} delay={120}>
            <div className="mx-auto w-[52%] sm:w-[55%] lg:w-[64%] aspect-[3.5/5] overflow-hidden rounded-xl">
              <img src="https://placehold.co/400x550/5e8b7e/f7f9f9" alt="Dr. Maya Reynolds" className="w-full h-full object-cover object-center" />
            </div>
          </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}