"use client";
/* eslint-disable @next/next/no-img-element */
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";
const specialties = [
  {
    title: "Anxiety & Stress",
    text:(<>My work often focuses on anxiety, panic, and burnout. I help clients who feel "functional" on the outside but are struggling with constant worry, tension, and difficulty sleeping. Together, we'll work to understand the root of your anxiety and develop practical tools to help you feel more regulated in your daily life.</>),
    image: "https://placehold.co/300x300/e8e4d9/5e8b7e",
  },
  {
    title: "Trauma & PTSD",
    text:(<>I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life—not just during sessions.</>),
    image: "https://placehold.co/300x300/f7f9f9/5e8b7e",
  },
  {
    title: "Burnout & Perfectionism",
    text:(<>I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.</>),
    image: "https://placehold.co/300x300/5e8b7e/f7f9f9",
  },
];

export default function Specialties(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-secondary" ref={ref}>
      <div className="mx-auto max-w-450 section-x pt-35 pb-40">
        <div className="text-center mb-20">
          <h2 className={`heading-xl text-primary mb-2
          transition-opacity duration-500 ease-out
            ${show? "opacity-100":"opacity-0"}`}>
            My Therapeutic Specialties
          </h2>
          <p className="text-[1.02rem] text-primary/90">As a <strong className="text-[1.1rem] text-primary">Santa Monica therapist</strong>, I specialize in evidence-based therapy for adults struggling with anxiety, trauma, and burnout.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:gap-15 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item)=>(
            <div key={item.title} className=" flex w-full flex-col border border-primary bg-muted p-4 transition-transform duration-300 hover:-translate-y-1.5">
              <Animated show={show} delay={120}>
                <h3 className="px-1 py-3 mt-0 body-md font-medium text-primary">{item.title}</h3>
              </Animated>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-primary/90 sm:max-w-132.25">{item.text}</p>
              <Animated show={show} delay={320}>
                <div className="mt-auto flex justify-center pt-10">
                  <div className="w-55 sm:w-75 md:w-85 lg:w-100 aspect-square rounded-full overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover object-[65%_80%]"/>
                  </div>
                </div>
              </Animated>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}