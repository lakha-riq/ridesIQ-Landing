'use client';

import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Welcome to RidesIQ ("we," "us," or "our"). We are committed to protecting the privacy and security of our users' personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our vehicle telematics services. By accessing or using our services, you consent to the practices described in this Privacy Policy. 

• This Privacy Policy is intended to comply with applicable data protection regulations, including: 
• The Delaware Online Privacy and Protection Act (DOPPA), 
• The California Consumer Privacy Act (CCPA), 
• The Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada, and 
• The General Data Protection Regulation (GDPR) in the European Union. 

If you reside in another jurisdiction, you may have additional rights under your local laws. `,
  },
  {
    id: 'information-collection',
    title: 'Information We Collect',
    content: `We collect different types of information about you and your vehicle(s), including: 
Personal Information Contact details: name, email address, phone number, and company name (if applicable). 
• Account credentials: username, password, or other details that help us verify your account. 
• Vehicle and Telemetry Data Location data: GPS-based location of vehicles in real time. 
• Vehicle diagnostics: odometer readings, engine status, fuel usage, battery levels, diagnostic trouble codes, and maintenance records. 
• Driving behavior: speed, acceleration, braking patterns, route information, and trip history. 
• Usage Information Log data: IP address, browser type, device information, operating system, and timestamps of your visits. 
• Cookies and similar technologies: We may use cookies or similar tracking tools to enhance your user experience and improve our services. 
• Communication Data Feedback, inquiries, or support requests: content you share when contacting our support team or engaging with us on social media. `,
  },
  {
    id: 'information-use',
    title: 'How We Use Your Information',
    content: `We use the information we collect for various purposes, including: 
Service Delivery Providing real-time telematics data, driver behavior insights, and fleet management tools. 
Processing and managing user accounts, vehicle registrations, and service subscriptions. 
Business Operations Personalizing your experience based on vehicle data and driving history. 
Analyzing usage trends, vehicle performance metrics, and customer feedback to improve our services. 
Marketing and Preferences Sending service updates, promotional materials, and newsletters (you can opt out at any time). 
You may opt out of receiving promotional communications at any time by clicking the "unsubscribe" link in our emails or by contacting us directly at info@ridesiq.com. We respect your preferences and will honor your choices in accordance with applicable laws. 
• Legal Compliance & Security Detecting, preventing, and addressing fraud, unauthorized use, or violations of our policies. 

Complying with applicable legal requirements, including Delaware state laws, federal regulations, and other jurisdictions' legal requirements as needed. `,
  },
  {
    id: 'legal-basis',
    title:
      'Legal Basis for Processing (If Applicable Under GDPR or Similar Laws)',
    content: ` If you are located in a jurisdiction that requires a lawful basis for data processing (e.g., the EU under the General Data Protection Regulation), our legal bases may include: 
• Consent: where you have expressly given us permission (e.g., for marketing communications). 
• Contract: where processing is necessary for the performance of a contract with you (e.g., providing telematics services). 
• Legal Obligation: where we are legally required to process your information (e.g., tax or regulatory obligations). 
• Legitimate Interests: where processing is necessary for our legitimate business interests, provided these do not override your fundamental rights (e.g., enhancing security, improving service functionality, or detecting fraud). 
• Cross-Border Transfers If you use our services from outside the country where our servers are located (currently the United States), your information may be transferred to, stored in, or processed in a different country. Where personal data is transferred from the European Economic Area (EEA), we implement appropriate safeguards to ensure a comparable level of protection, such as: 
• Standard Contractual Clauses (SCCs) approved by the European Commission, and 
• Additional security and organizational measures as needed. `,
  },
  {
    id: 'how-we-share-diclose-information',
    title: 'How We Share and Disclose Information',
    content: `We do not sell or rent your personal information to third parties. However, we may share your data in the following circumstances: 
• Service Providers Third-party vendors who assist with analytics, payment processing, hosting, customer support, and other essential services. These providers have access to your information only as needed to perform tasks on our behalf and are obligated not to disclose or use it for other purposes. 
• Affiliates and Partners Within our corporate family (if applicable) or with business partners who help deliver our services or co-sponsor our events. If we engage in joint marketing activities, we will ensure any sharing complies with applicable laws. 
• Legal Requirements If required by law, regulation, or court order. To enforce or apply our terms and conditions, protect our rights, or comply with a legal or regulatory obligation. 
• Business Transfers In the event of a merger, acquisition, or sale of all or a portion of our assets, user information may be transferred. We will notify you via email and/or a prominent notice on our website if such a change in ownership occurs. `,
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: `We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or to comply with contractual, legal, or regulatory obligations. 
• In general, we retain personal data for a period of up to 3 years following your last interaction with our services, unless a longer retention period is required by law. For example: 
• Billing and transaction records may be retained for up to 7 years for accounting and tax compliance. 
• Support correspondence is typically retained for up to 2 years to ensure service continuity. 
• Cookie and analytics data is retained according to the expiration terms set in your browser or via consent tools. 
• When we no longer need to retain your data, we securely delete or anonymize it. `,
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: `We take reasonable and appropriate measures to protect the information we collect and store, including: 
• Encryption: using SSL/TLS protocols for data in transit. 
• Access Controls: restricting access to authorized personnel on a need-to-know basis. 
• Regular Audits: monitoring systems and infrastructure to detect potential vulnerabilities. 
• No method of transmission or storage is entirely secure, and we cannot guarantee absolute security. `,
  },
  {
    id: 'international-data-transfers',
    title: 'International Data Transfers',
    content: ` If you use our services from outside the country where our servers are located, your information may be transferred, stored, and processed in a different country. We take steps to ensure that your data is treated securely and in accordance with this Privacy Policy, including implementing appropriate safeguards for cross-border data transfers. `,
  },
  {
    id: 'depending-on-your-jurisdiction',
    title: 'Your Rights and Choices Depending on your jurisdiction',
    content: `You may have certain rights regarding your personal information, such as: 

• Access: requesting a copy of the personal data we hold about you. 
• Rectification: asking us to correct inaccuracies in your information. 
• Erasure: requesting the deletion of your personal data, subject to certain exceptions. 
• Restriction: asking to limit how we use your data. 
• Portability: requesting to receive your information in a structured, commonly used format. 
• Objection: objecting to processing based on legitimate interests or direct marketing. 
• To exercise these rights, please contact us at info@ridesiq.com. We may require certain information to verify your identity before we process your request. `,
  },
  {
    id: 'childrens-privacy-our-services',
    title: `Children's Privacy Our services`,
    content: `Children's Privacy Our services are not intended for individuals under the age of 16 (or under the age of majority in your jurisdiction), and we do not knowingly collect personal data from such individuals. If you believe we have collected information from a minor, please contact us at info@ridesiq.com. We will promptly investigate and delete any such information if appropriate or required by law. `,
  },
  {
    id: 'third-party-websites-and-services',
    title: `Third-Party Websites and Services`,
    content: `Our website or services may link to third-party websites or services that are not operated by us. This Privacy Policy does not apply to any third-party websites or services. We encourage you to review the privacy policies of these third parties to understand their practices. `,
  },
  {
    id: 'compliance-with-delaware-law-delaware',
    title: `Compliance with Delaware Law Delaware`,
    content: `Compliance with Delaware Law Delaware Online Privacy and Protection Act: We comply with relevant provisions of Delaware state law relating to online privacy and the protection of personal information. `,
  },
];

const renderContent = (content: string) => {
  return content.split('\n\n').map((block, i) => {
    if (block.includes('•')) {
      const [intro, ...items] = block.split('\n');
      return (
        <div key={i} className='mb-4'>
          {intro && (
            <p className='text-gray-600 leading-relaxed mb-2'>{intro}</p>
          )}
          <ul className='list-disc pl-4 space-y-2'>
            {items.map((item, j) => (
              <li key={j} className='text-gray-600'>
                {item.replace('• ', '')}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <p key={i} className='mb-4 text-gray-600 leading-relaxed'>
        {block}
      </p>
    );
  });
};

export function PrivacyContent() {
  return (
    <div className='min-h-screen bg-white'>
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
                className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white'
              >
                Privacy{' '}
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  Policy
                </span>
              </motion.h1>
            </motion.div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* Table of Contents */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 mb-12'>
            <h2 className='text-2xl font-bold mb-4'>Table of Contents</h2>
            <ul className='space-y-2'>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className='text-[#678FCA] hover:text-[#678FCA]/80 transition-colors flex items-center group'
                  >
                    <ChevronRight className='w-4 h-4 mr-2 transition-transform group-hover:translate-x-1' />
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='mb-12 scroll-mt-32'
              >
                <h2 className='text-2xl font-bold mb-4'>{section.title}</h2>
                <div className='prose prose-lg'>
                  {renderContent(section.content)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl'>
            <div className='absolute inset-0'>
              <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10' />
              <div className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent' />
            </div>

            <div className='relative px-6 py-20 sm:px-12 sm:py-28 text-center'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8'
              >
                Have Questions About Your Privacy?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className='text-xl text-white/90 mb-12'
              >
                Our team is here to help you understand how we protect your
                data.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='flex justify-center'
              >
                <Link
                  href='/contact'
                  className='bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center group'
                >
                  Contact Us
                  <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
