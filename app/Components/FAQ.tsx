"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

const faqs = [
  {
    question: "Do you offer in-person or virtual therapy?",
    answer: (<>I offer both in-person therapy from my <strong className="text-[1.25rem] text-primary">Santa Monica office</strong> and secure telehealth sessions for clients located in <strong className="text-[1.25rem] text-primary">California</strong>. We can choose the format that best supports your comfort and schedule.</>)
  },
  {
    question: "What types of clients do you typically work with?",
    answer: (<>I frequently work with <strong className="text-[1.25rem] text-primary">high-achieving adults, creatives, and professionals</strong> who are struggling with anxiety, trauma, and burnout. Many of my clients feel 'functional' on the outside but are dealing with a great deal of internal stress and pressure.</>)
  },
  {
    question: "What is your therapeutic approach?",
    answer: (<>I take a warm, collaborative, and grounded approach to therapy. I integrate evidence-based methods such as <strong className="text-[1.25rem] text-primary">CBT, EMDR, mindfulness-based practices, and body-oriented techniques</strong> to help you understand both the emotional and physiological sides of what you're experiencing.</>)
  },{
    question:"What can I expect from our work together?",
    answer:(<>I believe therapy works best when you feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.</>)
  },
  {
    question:"How do I get started?",
    answer:(<>If you're looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit. You can schedule a <strong className="text-[1.25rem] text-primary">free 15-minute consultation</strong> to discuss your needs and see if we're a good fit.</>)
  },{
    question:"Is therapy confidential?",
    answer:(<><strong className="text-[1.25rem] text-primary">Yes.</strong> Confidentiality is a foundational part of therapy. Your privacy is respected and protected in accordance with professional and legal standards.</>)
  }
];

export default function FAQ(){
  const {ref,show}=useReveal(80);
  const [openIndex,setOpenIndex]=useState<number | null>(null);
  return (
    <section className="bg-muted" ref={ref}>
      <div className="mx-auto max-w-450 px-4 lg:px-12 py-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mx-1">
          <div className="relative flex justify-center mb-8 sm:mb-0">
            <Animated show={show} delay={120}>
              <div className="mx-auto w-[45%] sm:w-full aspect-[2.8/5] sm:h-120 lg:h-205 overflow-hidden rounded-t-full">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1200&fit=crop&q=80" alt="Serene nature landscape promoting peace and reflection" className="w-full h-full object-cover" />
              </div>
            </Animated>
          </div>
          <div>
            <div className="w-full min-w-0 lg:min-w-none">
              <Animated show={show} delay={120}>
                <h2 className="heading-xl text-primary mb-8 sm:mb-20">
                  Frequently Asked Questions
                </h2>
              </Animated>

              <div className="border-t border-primary/40">
                {faqs.map((faq,i)=>{
                  const isOpen=openIndex===i;
                  return(
                    <Animated key={i} show={show} delay={0.1+i*0.25}>
                      <div>
                        <div key={i} className="border-b border-primary/40 my-0">
                          <button 
                            onClick={()=>setOpenIndex(isOpen?null:i)}
                            className="w-full flex items-center py-3 sm:py-4 text-left cursor-pointer"
                          >
                            <span className="relative w-5 h-5 sm:w-6 sm:h-6 mr-3 flex items-center justify-center">
                              <span className="absolute w-6 h-[1.5px] bg-primary" />

                              <span
                                className={`absolute h-6 w-[1.5px] bg-primary
                                  transition-transform duration-300 ease-in-out
                                  origin-center
                                  ${isOpen ? "rotate-90" : "rotate-180"}
                                `}
                              />
                            </span>
                            <span className="text-[1.25rem] sm:heading-md text-primary/90 ml-2">{faq.question}</span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500
                                ${isOpen?"max-h-full opacity-100":"max-h-0 opacity-0"}
                              `}
                          >
                            <p className="pb-5 pr-0 sm:pr-[10%] text-[1.1rem] sm:text-[1.3rem] leading-[1.55] sm:leading-[1.7] text-primary">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    </Animated>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}