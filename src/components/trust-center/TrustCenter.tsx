'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import React from 'react';

const TrustCenter = () => {
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
                Updated: March 2024
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
              >
                <span className='text-white'>Trust</span>{' '}
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  Center
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
              At <strong>RidesIQ</strong>, trust is at the core of everything we
              do. From real-time GPS tracking to vehicle behavior insights, we
              know that our users rely on us for accurate data, system uptime,
              and protection of their most valuable assets. The RidesIQ Trust
              Center brings together key information about our commitment to
              security, privacy, compliance, and system reliability.
            </p>

            <h2>🔒 Security</h2>
            <p>We take a proactive and multi-layered approach to security:</p>
            <ul>
              <li>
                Encryption in Transit & at Rest: All data is encrypted using
                industry-standard SSL/TLS and AES-256 encryption.
              </li>
              <li>
                Access Controls: Internal access to customer data is limited
                based on the principle of least privilege.
              </li>
              <li>
                Infrastructure Security: Our systems are hosted with
                enterprise-grade cloud providers with SOC 2, ISO 27001, and PCI
                DSS certifications.
              </li>
              <li>
                Monitoring & Alerts: Real-time monitoring, logging, and
                intrusion detection help us respond quickly to any unusual
                activity.
              </li>
              <li>
                Penetration Testing: Regular vulnerability assessments and
                third-party penetration tests are conducted to strengthen our
                defenses.
              </li>
            </ul>
            <p>
              See our Responsible Disclosure Policy if you're a security
              researcher.
            </p>

            <h2>🛡️ Privacy</h2>
            <p>
              We are committed to data transparency and user control. Our
              Privacy Policy outlines exactly how we collect, use, and safeguard
              your information.
            </p>
            <ul>
              <li>Global Compliance: We comply with GDPR, CCPA, and PIPEDA.</li>
              <li>
                Consent-Based Tracking: Cookie consent is required for data
                collection across our website.
              </li>
              <li>
                No Selling of Data: We do not sell or share user data with third
                parties for marketing purposes.
              </li>
              <li>
                Data Minimization: We only collect the data we need to provide
                our services effectively.
              </li>
            </ul>

            <h2>📜 Compliance</h2>
            <p>
              RidesIQ adheres to industry-leading privacy and data security
              frameworks:
            </p>
            <ul>
              <li>GDPR (EU)</li>
              <li>PIPEDA (Canada)</li>
              <li>CCPA (California)</li>
              <li>Delaware Online Privacy and Protection Act</li>
            </ul>
            <p>
              We maintain Data Processing Agreements (DPAs) with third-party
              vendors and follow secure data handling practices throughout the
              lifecycle of your data.
            </p>

            <h2>⚙️ Reliability & Uptime</h2>
            <p>
              Fleet tracking requires constant availability — and we deliver:
            </p>
            <ul>
              <li>
                Real-Time Data Processing: Event alerts and location updates are
                streamed with minimal latency.
              </li>
              <li>
                Uptime Commitment: We monitor uptime 24/7 and aim for 99.9%
                service availability.
              </li>
              <li>
                Redundancy & Backups: Mission-critical systems are deployed in
                redundant configurations with regular backups.
              </li>
              <li>
                Status Page: Coming soon — a public service status page to keep
                you updated during maintenance or outages.
              </li>
            </ul>

            <h2>🔄 Data Handling & Retention</h2>
            <ul>
              <li>
                Retention Period: Data is retained for up to 3 years unless
                otherwise requested or required by law.
              </li>
              <li>
                User Requests: You can request access, correction, or deletion
                of your data at any time via{' '}
                <a href='mailto:info@ridesiq.com'>info@ridesiq.com</a>.
              </li>
              <li>
                Data Portability: We can provide a machine-readable export of
                your data upon request.
              </li>
            </ul>

            <h2>🤝 Our Promise</h2>
            <p>We don’t just track vehicles — we earn your trust.</p>
            <p>
              RidesIQ is built for transparency, accountability, and security at
              scale. Whether you're managing 1 vehicle or 10,000, your data is
              safe, your devices are reliable, and your business is supported by
              a platform built to perform.
            </p>

            <h2>📬 Questions?</h2>
            <p>
              We're here to help.
              <br />
              Email us at <a href='mailto:info@ridesiq.com'>
                info@ridesiq.com
              </a>{' '}
              or visit our Privacy Policy, Terms of Service, and Responsible
              Disclosure pages for more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustCenter;
