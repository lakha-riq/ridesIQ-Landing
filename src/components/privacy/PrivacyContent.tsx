'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function PrivacyContent() {
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
                Last Updated: March 15, 2024
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
              >
                <span className='text-white'>Privacy </span>
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  Policy
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
            <p>
              Welcome to <strong>RidesIQ</strong> ("we," "us," or "our"). We are
              committed to protecting the privacy and security of our users'
              personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our
              website or use our vehicle telematics services. By accessing or
              using our services, you consent to the practices described in this
              Privacy Policy.
            </p>
            <p>
              This Privacy Policy is intended to comply with applicable data
              protection regulations, including:
              <strong>
                {' '}
                The Delaware Online Privacy and Protection Act (DOPPA)
              </strong>
              ,<strong> The California Consumer Privacy Act (CCPA)</strong>,
              <strong>
                {' '}
                The Personal Information Protection and Electronic Documents Act
                (PIPEDA)
              </strong>{' '}
              in Canada, and
              <strong> The General Data Protection Regulation (GDPR)</strong> in
              the European Union. If you reside in another jurisdiction, you may
              have additional rights under your local laws.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong>
                <ul>
                  <li>
                    Contact details: name, email address, phone number, and
                    company name (if applicable).
                  </li>
                  <li>
                    Account credentials: username, password, or other
                    authentication details.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Vehicle and Telemetry Data:</strong>
                <ul>
                  <li>Location data (real-time GPS-based vehicle location).</li>
                  <li>
                    Vehicle diagnostics: odometer readings, engine status, fuel
                    usage, maintenance records.
                  </li>
                  <li>
                    Driving behavior: speed, acceleration, braking patterns,
                    route information.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Usage Information:</strong>
                <ul>
                  <li>
                    Log data: IP address, browser type, device info, visit
                    timestamps.
                  </li>
                  <li>
                    Cookies and similar technologies for better user experience.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Communication Data:</strong>
                <ul>
                  <li>
                    Feedback, inquiries, or support requests you send to us.
                  </li>
                </ul>
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>
                Providing real-time telematics services and fleet management
                tools.
              </li>
              <li>
                Managing accounts, vehicle registrations, and subscriptions.
              </li>
              <li>
                Personalizing your experience and improving our services based
                on feedback and analytics.
              </li>
              <li>
                Sending service updates, promotional materials (opt-out
                anytime).
              </li>
              <li>
                Ensuring security, detecting fraud, and complying with legal
                obligations.
              </li>
            </ul>

            <h2>Legal Basis for Processing</h2>
            <ul>
              <li>
                <strong>Consent</strong> – for marketing communications.
              </li>
              <li>
                <strong>Contract</strong> – for service delivery.
              </li>
              <li>
                <strong>Legal Obligation</strong> – for compliance with laws.
              </li>
              <li>
                <strong>Legitimate Interests</strong> – improving services and
                ensuring security.
              </li>
            </ul>

            <h2>Cross-Border Transfers</h2>
            <p>
              If you access our services outside the United States, your
              information may be transferred internationally with safeguards
              like Standard Contractual Clauses (SCCs).
            </p>

            <h2>How We Share Information</h2>
            <ul>
              <li>
                <strong>Service Providers:</strong> Vendors assisting with
                hosting, analytics, payment processing, etc.
              </li>
              <li>
                <strong>Affiliates and Partners:</strong> Only if necessary for
                service delivery or marketing (as allowed by law).
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of mergers or
                acquisitions.
              </li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your information for as long as needed, usually up to 3
              years, or longer where required by law (e.g., 7 years for billing
              records).
            </p>

            <h2>Data Security</h2>
            <ul>
              <li>SSL/TLS encryption for data in transit.</li>
              <li>Restricted access to authorized personnel.</li>
              <li>Regular audits and monitoring.</li>
            </ul>
            <p>
              No method of transmission or storage is completely secure, but we
              take strong measures to protect your data.
            </p>

            <h2>Your Rights</h2>
            <ul>
              <li>Access your personal data.</li>
              <li>Request corrections or deletions.</li>
              <li>Limit or object to how we process your data.</li>
              <li>
                Data portability (receive your information in a structured
                format).
              </li>
            </ul>
            <p>
              Contact us at{' '}
              <a href='mailto:info@ridesiq.com'>info@ridesiq.com</a> to exercise
              your rights.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 16 years of
              age. If you believe we have collected information from a minor,
              contact us immediately.
            </p>

            <h2>Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites not governed
              by this Privacy Policy. Please review their policies separately.
            </p>

            <h2>Compliance with Delaware Law</h2>
            <p>
              We comply with the Delaware Online Privacy and Protection Act and
              other applicable state laws.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on our website with a revised "Effective Date."
            </p>

            <h2>Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of the State of
              Delaware. Any disputes will be resolved in Delaware courts.
            </p>

            <h2>Contact Us</h2>
            <p>
              Email: <a href='mailto:info@ridesiq.com'>info@ridesiq.com</a>
              <br />
              Website:{' '}
              <a
                href='https://www.ridesiq.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                www.ridesiq.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
