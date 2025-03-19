"use client"
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Challenge {
  icon: typeof LucideIcon;
  title: string;
  description: string;
}

interface Solution {
  icon: typeof LucideIcon;
  title: string;
  description: string;
}

interface ChallengesSolutionsProps {
  challenges: Challenge[];
  solutions: Solution[];
}

export const ChallengesSolutions: React.FC<ChallengesSolutionsProps> = ({
  challenges,
  solutions
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const challengeCards = container.querySelectorAll('.challenge-card');
    const connectors = container.querySelectorAll('.connector');

    gsap.set(connectors, { autoAlpha: 0, scaleX: 0 });

    challengeCards.forEach((_, index) => {
      const connector = connectors[index];
      
      gsap.to(connector, {
        autoAlpha: 1,
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: connector,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Mobile vertical connectors
    const mobileConnectors = container.querySelectorAll('.mobile-connector');
    gsap.set(mobileConnectors, { autoAlpha: 0, scaleY: 0 });

    mobileConnectors.forEach((connector) => {
      gsap.to(connector, {
        autoAlpha: 1,
        scaleY: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: connector,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, [isInView]);

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* AI-Powered Solutions Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            AI-Powered Solutions
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            From{' '}
            <span className="text-[#678FCA]">Challenges</span>
            {' '}to{' '}
            <span className="text-[#99D5C9]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fleet operators face increasingly complex challenges in {"today's"} fast-paced logistics landscape. Our AI-powered solutions transform these challenges into opportunities, delivering measurable improvements in efficiency, cost savings, and operational excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative challenge-card"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <challenge.icon className="w-7 h-7 md:w-8 md:h-8 text-[#678FCA]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-900">{challenge.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Horizontal Connector */}
                <div className="hidden md:block absolute top-1/2 -right-12 w-12 connector origin-left z-0">
                  <div className="relative h-[1px]">
                    <div className="absolute inset-0 bg-[#678FCA]/50" />
                  </div>
                </div>

                {/* Mobile Vertical Connector */}
                <div className="md:hidden absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-[1px] h-6 mobile-connector origin-top z-0">
                  <div className="w-full h-full bg-[#678FCA]/50" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 md:space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 solution-card"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#99D5C9] to-[#678FCA] p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <solution.icon className="w-7 h-7 md:w-8 md:h-8 text-[#678FCA]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-900">{solution.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};