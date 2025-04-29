'use client';
import type React from 'react';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  AlertCircle,
  BarChart,
  Clock,
  FileText,
  Settings,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowNarrowRight, HiArrowNarrowDown } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

type Icon = LucideIcon;

interface Challenge {
  icon: Icon;
  title: string;
  description: string;
}

interface Solution {
  icon: Icon;
  title: string;
  description: string;
}

interface ChallengesSolutionsProps {
  challenges?: Challenge[];
  solutions?: Solution[];
  challengePara?: string;
}

// Sample data for demonstration
const defaultChallenges: Challenge[] = [
  {
    icon: AlertCircle,
    title: 'Operational Inefficiencies',
    description:
      'Fleet operators struggle with manual processes and disconnected systems that lead to wasted resources and higher costs.',
  },
  {
    icon: Clock,
    title: 'Delayed Decision Making',
    description:
      'Without real-time data, critical decisions are delayed, impacting service levels and customer satisfaction.',
  },
  {
    icon: FileText,
    title: 'Compliance Complexity',
    description:
      'Managing regulatory requirements across different jurisdictions creates administrative burden and risk.',
  },
];

const defaultSolutions: Solution[] = [
  {
    icon: Activity,
    title: 'Real-Time Visibility',
    description:
      'Our platform provides instant visibility into your entire fleet operations, enabling proactive management.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description:
      'Advanced analytics transform raw data into actionable insights, optimizing routes and reducing fuel consumption.',
  },
  {
    icon: Settings,
    title: 'Automated Compliance',
    description:
      'Streamline regulatory compliance with automated record-keeping and reporting across all jurisdictions.',
  },
];

const defaultPara = `Car rental operators face daily challenges managing vehicles, minimizing risk, and maintaining operational efficiency. RidesIQ's real-time GPS tracking and fleet intelligence platform turns these roadblocks into scalable, revenue-driving solutions.`;

export const ChallengesSolutions: React.FC<ChallengesSolutionsProps> = ({
  challenges = defaultChallenges,
  solutions = defaultSolutions,
  challengePara = defaultPara,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.5 },
    },
  };

  const cardVariants = (direction = 'left') => ({
    hidden: { opacity: 0, x: direction === 'left' ? -30 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const desktopConnectors = container.querySelectorAll('.desktop-connector');
    const mobileConnectors = container.querySelectorAll('.mobile-connector');

    // Desktop connectors animation
    gsap.set(desktopConnectors, { autoAlpha: 0, width: 0 });
    desktopConnectors.forEach((connector) => {
      gsap.to(connector, {
        autoAlpha: 1,
        width: '100%',
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: connector,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Mobile connectors animation
    gsap.set(mobileConnectors, { autoAlpha: 0, height: 0 });
    mobileConnectors.forEach((connector) => {
      gsap.to(connector, {
        autoAlpha: 1,
        height: '100%',
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: connector,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, [isInView]);

  // Create pairs of challenges and solutions for mobile view
  const pairs = challenges.map((challenge, index) => {
    return {
      challenge,
      solution: solutions[index] || null,
    };
  });

  return (
    <section className='py-24 relative overflow-hidden' ref={containerRef}>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white' />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5" />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          {/* Real-Time Solutions Badge */}
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8'>
            <svg
              className='w-4 h-4 mr-2'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 2L2 7L12 12L22 7L12 2Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M2 17L12 22L22 17'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M2 12L12 17L22 12'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Real-Time Solutions
          </div>

          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            From <span className='text-[#678FCA]'>Challenges</span> to{' '}
            <span className='text-[#99D5C9]'>Solutions</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {challengePara}
          </p>
        </motion.div>

        {/* Desktop View - Two columns */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className='hidden md:grid md:grid-cols-2 gap-6 md:gap-12'
        >
          {/* Challenges Column */}
          <div className='space-y-6 md:space-y-8'>
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={`desktop-challenge-${index}`}
                  variants={cardVariants('left')}
                  className='relative group'
                >
                  <div className='bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10'>
                    <div className='flex items-start gap-4 md:gap-6'>
                      <div className='w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                        <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                          <Icon className='w-7 h-7 md:w-8 md:h-8 text-[#678FCA]' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-900'>
                          {challenge.title}
                        </h3>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Arrow Connector */}
                  <motion.div
                    className='absolute top-1/2 md:top-1/2 right-0 md:-right-10 translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-10 h-6 overflow-visible z-0'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: 0.4,
                    }}
                  >
                    <div className='hidden md:block'>
                      <HiArrowNarrowRight
                        size={40}
                        className='text-[#678FCA]/70'
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Solutions Column */}
          <div className='space-y-6 md:space-y-8'>
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={`desktop-solution-${index}`}
                  variants={cardVariants('right')}
                  whileHover={{ scale: 1.03 }}
                  className='relative z-10 transition-all duration-300'
                >
                  <div className='bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <div className='flex items-start gap-4 md:gap-6'>
                      <div className='w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#99D5C9] to-[#678FCA] p-0.5 flex-shrink-0'>
                        <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                          <Icon className='w-7 h-7 md:w-8 md:h-8 text-[#678FCA]' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-900'>
                          {solution.title}
                        </h3>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile View - Alternating challenges and solutions */}
        <div className='md:hidden space-y-12'>
          {pairs.map((pair, index) => {
            if (!pair.challenge || !pair.solution) return null;
            const ChallengeIcon = pair.challenge.icon;
            const SolutionIcon = pair.solution.icon;

            return (
              <div key={`mobile-pair-${index}`} className='space-y-8'>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className='relative challenge-card'
                >
                  <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10'>
                    <div className='flex items-start gap-6'>
                      <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                        <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                          <ChallengeIcon className='w-7 h-7 text-[#678FCA]' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                          {pair.challenge.title}
                        </h3>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                          {pair.challenge.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Vertical Arrow Connector */}
                  <motion.div
                    className='absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-6 h-12 overflow-visible z-0 flex flex-col items-center'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: 0.3,
                    }}
                  >
                    <HiArrowNarrowDown
                      size={44}
                      className='text-[#678FCA]/70'
                    />
                  </motion.div>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className='relative z-10 solution-card'
                >
                  <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='flex items-start gap-6'>
                      <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#99D5C9] to-[#678FCA] p-0.5 flex-shrink-0'>
                        <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                          <SolutionIcon className='w-7 h-7 text-[#678FCA]' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                          {pair.solution.title}
                        </h3>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                          {pair.solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
