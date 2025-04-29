'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function ResponsibleDisclosureContent() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative min-h-[40vh] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70' />
          <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10' />
        </div>

        <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='max-w-3xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium'
              >
                <Shield className='w-4 h-4 mr-2' />
                Responsible Disclosure Policy
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
              >
                <span className='text-white'>Security </span>
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  Disclosure
                </span>
              </motion.h1>
            </motion.div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* Content Section */}
      <section className='py-12 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto prose prose-lg space-y-8'>
            {/* <p>
              <strong>Effective Date:</strong> [Insert Date Here]
            </p> */}
            <p>
              At <strong>RidesIQ</strong>, we take the security of our systems
              and users seriously. We are committed to protecting our platform,
              users, and data from unauthorized access and vulnerabilities. If
              you discover a potential security issue in any of our services, we
              appreciate your cooperation in responsibly disclosing it to us.
            </p>
            <p>
              This policy outlines how security researchers, ethical hackers,
              and members of the public can report vulnerabilities to us.
            </p>

            <h2>🔐 Our Commitment</h2>
            <ul>
              <li>
                We will acknowledge receipt of your vulnerability report within
                5 business days.
              </li>
              <li>
                We will investigate all legitimate reports and work to resolve
                confirmed vulnerabilities in a timely manner.
              </li>
              <li>
                We will not take legal action against individuals who report
                security issues in good faith and follow this policy.
              </li>
              <li>
                We may offer recognition or public credit on our Security
                Acknowledgments page (with your permission).
              </li>
            </ul>

            <h2>✅ Scope</h2>
            <p>
              You may test and report vulnerabilities found in the following
              environments:
            </p>
            <ul>
              <li>
                Website:{' '}
                <a href='https://www.ridesiq.com'>https://www.ridesiq.com</a>
              </li>
              <li>Subdomains operated by RidesIQ</li>
              <li>
                APIs or Telematics Interfaces that are public or intended for
                user interaction
              </li>
            </ul>
            <p>
              <strong>Out of Scope:</strong>
            </p>
            <ul>
              <li>Social engineering or phishing attempts</li>
              <li>Denial-of-Service (DoS or DDoS) attacks</li>
              <li>
                Physical security or third-party services not under our direct
                control
              </li>
              <li>
                Spam or abuse reports (please report these separately to
                support)
              </li>
            </ul>

            <h2>📩 How to Report a Vulnerability</h2>
            <p>
              Please email a detailed report to{' '}
              <a href='mailto:security@ridesiq.com'>security@ridesiq.com</a>,
              and include:
            </p>
            <ul>
              <li>A clear description of the vulnerability</li>
              <li>
                Steps to reproduce the issue (proof-of-concept or screenshots
                are helpful)
              </li>
              <li>Your contact information for follow-up</li>
              <li>Any potential impact, if known</li>
              <li>Suggested mitigation (optional but appreciated)</li>
            </ul>
            <p>
              Please do not publicly disclose the issue before we’ve had a
              reasonable chance to address it.
            </p>

            <h2>🔐 Rules of Engagement</h2>
            <ul>
              <li>
                Do not access or modify user data that doesn’t belong to you
              </li>
              <li>Do not degrade service or impact availability</li>
              <li>
                Do not exploit the issue for personal gain or leak it to others
              </li>
              <li>
                Do <strong>not</strong> use automated scanners against
                production systems
              </li>
            </ul>

            <h2>🏅 Recognition</h2>
            <p>
              If you responsibly disclose a valid issue and follow the rules
              above, we’re happy to:
            </p>
            <ul>
              <li>Include your name on our Security Hall of Fame (optional)</li>
              <li>Consider other forms of non-monetary recognition</li>
            </ul>
            <p>
              We do not offer a bug bounty at this time but appreciate community
              contributions to security.
            </p>

            <h2>👥 Questions or Concerns?</h2>
            <p>
              If you’re unsure whether something qualifies under this policy or
              have questions about your testing methods, feel free to email us
              at <a href='mailto:security@ridesiq.com'>security@ridesiq.com</a>.
            </p>
            <p>
              Thank you for helping keep RidesIQ secure and reliable for all
              users.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
