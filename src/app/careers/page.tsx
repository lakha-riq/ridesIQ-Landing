'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Rocket,
  Home,
  TrendingUp,
  DollarSign,
  Heart,
  Users,
  Code,
  LineChart,
  Headphones,
  Database,
  ChevronRight,
  Search,
  MapPin,
  Briefcase,
  Clock,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import Select from 'react-select';
import Image from 'next/image';

// Mock data for job listings
const jobListings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Toronto, ON',
    type: 'Full-time',
    description:
      'Build and maintain our core fleet management platform using modern technologies.',
    remote: true,
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Buffalo, NY',
    type: 'Full-time',
    description:
      'Lead product strategy and roadmap for our telematics solutions.',
    remote: true,
  },
  {
    id: 3,
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Lewes, DE',
    type: 'Full-time',
    description:
      'Drive business growth through outbound sales and lead generation.',
    remote: false,
  },
];

const departments = [
  { value: 'all', label: 'All Departments' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'toronto', label: 'Toronto, ON' },
  { value: 'buffalo', label: 'Buffalo, NY' },
  { value: 'lewes', label: 'Lewes, DE' },
  { value: 'remote', label: 'Remote' },
];

const employmentTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
];

const benefits = [
  {
    icon: Rocket,
    title: 'Innovative Culture',
    description: 'Work with a team pushing the boundaries of telematics.',
  },
  {
    icon: Home,
    title: 'Flexible Work Environment',
    description: 'Hybrid/remote options for better work-life balance.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Opportunities to grow within the company.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries & benefits.',
  },
  {
    icon: Heart,
    title: 'Comprehensive Benefits',
    description: 'Health, dental, and vision coverage.',
  },
  {
    icon: Users,
    title: 'Great Team & Culture',
    description: 'Inclusive, diverse, and supportive environment.',
  },
];

const teams = [
  {
    icon: Code,
    title: 'Engineering & Development',
    description: 'Build cutting-edge fleet solutions.',
  },
  {
    icon: LineChart,
    title: 'Sales & Marketing',
    description: 'Connect with businesses worldwide.',
  },
  {
    icon: Headphones,
    title: 'Operations & Customer Success',
    description: 'Ensure smooth client experiences.',
  },
  {
    icon: Database,
    title: 'Data & AI',
    description: 'Work on predictive analytics & machine learning.',
  },
];

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState({
    value: 'all',
    label: 'All Departments',
  });
  const [selectedLocation, setSelectedLocation] = useState({
    value: 'all',
    label: 'All Locations',
  });
  const [selectedType, setSelectedType] = useState({
    value: 'all',
    label: 'All Types',
  });

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      selectedDepartment.value === 'all' ||
      job.department.toLowerCase() === selectedDepartment.value;
    const matchesLocation =
      selectedLocation.value === 'all' ||
      (selectedLocation.value === 'remote'
        ? job.remote
        : job.location.toLowerCase().includes(selectedLocation.value));
    const matchesType =
      selectedType.value === 'all' ||
      job.type.toLowerCase() === selectedType.value;

    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background & Overlays */}
        <div className="absolute inset-0">
          <Image
            width={500} // Required
            height={300}
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
            alt="Office Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Join Our Team
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="text-white">Join Our Team at </span>
                <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                  RidesIQ
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                {
                  "We're revolutionizing fleet management with cutting-edge technology. Explore career opportunities and be part of our journey!"
                }
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#678FCA] font-semibold hover:bg-white/90 transition-all transform hover:scale-105 group"
                >
                  View Open Positions
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Why Work With Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Benefits & Culture
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]" />

                <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <benefit.icon className="w-7 h-7 text-[#678FCA]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="open-positions"
        className="py-24 bg-gray-50/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
        <div className="absolute inset-0 hero-pattern opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Current Openings
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Open Positions
            </motion.h2>
          </motion.div>

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                options={departments}
                value={selectedDepartment}
                onChange={(option) =>
                  setSelectedDepartment(option || departments[0])
                }
                className="text-base"
                placeholder="Select department..."
              />
              <Select
                options={locations}
                value={selectedLocation}
                onChange={(option) =>
                  setSelectedLocation(option || locations[0])
                }
                className="text-base"
                placeholder="Select location..."
              />
              <Select
                options={employmentTypes}
                value={selectedType}
                onChange={(option) =>
                  setSelectedType(option || employmentTypes[0])
                }
                className="text-base"
                placeholder="Select type..."
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-xl transform transition-all duration-300 group-hover:scale-[1.01]" />

                  <div className="relative bg-white rounded-xl p-6 shadow-sm transition-all duration-300 group-hover:shadow-lg border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                          {job.remote && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                              Remote Available
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="flex-shrink-0 bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all flex items-center group/btn">
                        View Position
                        <ChevronRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No positions available matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Our Teams
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Featured Teams
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team, index) => (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]" />

                <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 mx-auto mb-6">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <team.icon className="w-8 h-8 text-[#678FCA]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {team.title}
                  </h3>
                  <p className="text-gray-600">{team.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
        <div className="absolute inset-0 hero-pattern opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              How to Apply
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Application Process
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200" />

              {[
                {
                  step: 1,
                  title: 'Find Your Role',
                  description:
                    'Browse our open positions and find the perfect match for your skills.',
                },
                {
                  step: 2,
                  title: 'Submit Your Application',
                  description:
                    'Upload your resume & cover letter through our online portal.',
                },
                {
                  step: 3,
                  title: 'Initial Screening',
                  description:
                    'Our recruitment team will review your application.',
                },
                {
                  step: 4,
                  title: 'Interview Process',
                  description: 'Technical/HR interviews with the team.',
                },
                {
                  step: 5,
                  title: 'Offer',
                  description:
                    'Successful candidates will receive a formal offer.',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-8 mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-2xl font-bold text-[#678FCA]">
                      {step.step}
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
            </div>

            <div className="relative px-6 py-20 sm:px-12 sm:py-28">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
                >
                  {"Don't See the Right Role?"}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-white/90 mb-12"
                >
                  {
                    "We're always looking for top talent. Send us your resume, and we'll reach out when a suitable role opens up!"
                  }
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center group">
                    Send Your Resume
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
