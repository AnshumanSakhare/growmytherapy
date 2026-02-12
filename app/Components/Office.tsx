"use client";


import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";


export default function Office(){
  const {ref,show}=useReveal(80);
  return(
    <section className="bg-secondary text-primary py-32" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid md:grid-cols-[1fr_1.2fr] items-center gap-12 lg:gap-16 xl:gap-24">
          <Animated show={show} delay={120}>
            <div className="text-center md:text-left">
              <h2 className="heading-lg mb-8">
                A Calm & Quiet Space for Healing in Santa Monica
              </h2>
              <p className="body-md mb-6">
                My <strong className="text-[1.32rem]">Santa Monica</strong> office is a quiet, private space designed to feel calm and grounding. With natural light and a comfortable, uncluttered environment, clients often share that the space itself helps them feel more at ease when they arrive.
              </p>
              <p className="body-md">
                Located in a discreet professional setting to support your privacy, I offer both in-person therapy and <strong className="text-[1.32rem]">secure telehealth</strong> sessions for clients throughout <strong className="text-[1.32rem]">California</strong>.
              </p>
            </div>
          </Animated>
          <Animated show={show} delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://placehold.co/300x400/e8e4d9/5e8b7e" alt="A calm and inviting therapy office" className="rounded-lg"/>
              <img src="https://placehold.co/300x400/f7f9f9/5e8b7e" alt="A calm and inviting therapy office" className="rounded-lg"/>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}