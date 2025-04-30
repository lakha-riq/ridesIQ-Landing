'use client';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
  useRef,
  useEffect,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Shield,
  Truck,
  Clock,
  MapPin,
  BarChart3,
  Bell,
  PenTool as Tool,
  Lock,
  Radio,
  Navigation2,
  AlertCircle,
  FileText,
  Activity,
  Ruler,
  Wifi,
  Battery,
  Award,
  Database,
  Laptop,
  Power,
  Wrench,
  Zap,
  Box,
  ChevronDown,
  X,
  Plus,
  Minus,
  HelpCircle,
  ArrowRight,
  LucideProps,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import Image from 'next/image';

interface Products {
  id: string;
  name: string;
  image: string;
  imageProps?: {
    width: number;
    height: number;
    className?: string;
  };
  specs: {
    [key: string]: {
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
      >;
      value: string;
      description: string;
    };
  };
}

const Tracking = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current;
      const image = imageRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply sticky behavior on desktop
      if (window.innerWidth >= 1024) {
        // Calculate the start and end points for the effect
        const startPoint = containerRect.top - windowHeight * 0.5;
        const endPoint = containerRect.bottom - windowHeight;

        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(
          0,
          Math.min(1, -startPoint / (endPoint - startPoint))
        );

        // Calculate maximum scroll distance
        const maxScroll = container.offsetHeight - image.offsetHeight - 100;

        // Apply the transform with easing
        const scrollAmount = Math.min(maxScroll, scrollProgress * maxScroll);

        // Only apply transform when container is in view
        if (containerRect.top <= windowHeight && containerRect.bottom >= 0) {
          image.style.transform = `translateY(${scrollAmount}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products: Products[] = [
    {
      id: 'hardwired',
      name: 'Hard-Wired Tracker',
      image: '/devices/hardware_tracker.svg',
      imageProps: {
        width: 450,
        height: 300,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Professional Installation',
          description: 'Requires certified technician',
        },
        power: {
          icon: Zap,
          value: '9–100V Direct Vehicle Power',
          description: 'Wide voltage range for trucks, buses, and EVs',
        },
        bestFor: {
          icon: Truck,
          value: 'Large Fleets',
          description: 'Ideal for commercial vehicles and trucks',
        },
        battery: {
          icon: Battery,
          value: 'Backup Battery',
          description:
            '120mAh backup ensures continued tracking if power is cut',
        },
        connectivity: {
          icon: Wifi,
          value: '4G LTE + GPS + GSM',
          description: 'Supports LTE-FDD & GSM bands',
        },
        features: {
          icon: Shield,
          value: 'Advanced Security',
          description:
            'Tamper detection, geo-fence, impact alerts, remote fuel cut-off, and FOTA',
        },
      },
    },

    {
      id: 'obd',
      name: 'OBD Tracker',
      image: '/devices/OBD_tracker.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Plug & Play',
          description: 'Self-installation in OBD-II port',
        },
        power: {
          icon: Zap,
          value: 'OBD-II Port',
          description: 'Direct vehicle power supply',
        },
        bestFor: {
          icon: Truck,
          value: 'All Vehicles',
          description: 'Cars & light commercial vehicles',
        },
        battery: {
          icon: Battery,
          value: 'No Battery',
          description: 'Continuous power from vehicle',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE Cat M1/NB1',
          description: 'LTE-FDD  ',
        },
        features: {
          icon: Shield,
          value: 'Motion Detection',
          description: '3-axis accelerometer tracking',
        },
      },
    },
    {
      id: 'asset',
      name: 'Asset Tracker',
      image: '/devices/asset_tracker.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Compact Design',
          description: '64.6 x 51 x 20.9mm form factor',
        },
        power: {
          icon: Zap,
          value: 'Battery Powered',
          description: '2400mAh lithium battery',
        },
        bestFor: {
          icon: Box,
          value: 'Asset Tracking',
          description: 'Vehicles & equipment monitoring',
        },
        battery: {
          icon: Battery,
          value: '3-Year Battery',
          description: 'With 1 report per day',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE Cat M1/NB2',
          description: 'With 2G/3G fallback',
        },
        features: {
          icon: Shield,
          value: 'Weather Resistant',
          description: 'IP67 rated protection',
        },
      },
    },
  ];

  const faqs = [
    {
      question: 'How accurate is the GPS tracking?',
      answer:
        'Our GPS provides real-time location tracking with ±2-meter accuracy, using GPS, BDS, and Glonass satellites for high precision—even in dense urban or remote areas.',
    },
    {
      question: 'How often does the tracking system update location data?',
      answer:
        'Location data is updated multiple times within a minute, for real-time data.',
    },
    {
      question: 'Will this work across regions or international borders?',
      answer:
        'Yes. Our multi-network SIMs and dual-server architecture ensure uninterrupted tracking across cities, provinces, and borders.',
    },
    {
      question: 'How long does it take to install the tracker?',
      answer:
        'Professional hardwired installation takes approximately 10-15 minutes per vehicle. Plug-and-play options install in under 5 minutes via OBD-II port.',
    },
    {
      question: 'What happens if the vehicle loses power or signal?',
      answer:
        'The built-in battery backup and 16MB flash memory ensure tracking continues and data is logged, even during power loss or in no-signal zones.',
    },
    {
      question: 'Can I set up alerts for speeding, idling, or geofencing?',
      answer:
        'Absolutely. You can configure real-time alerts for speeding, harsh braking, long idling, geofence breaches, and more—all from the dashboard.',
    },
    {
      question: 'How secure is the data collected by the tracking system?',
      answer:
        "Data security is paramount. Our system uses encrypted connections and secure servers to protect your fleet's information. ",
    },
    {
      question:
        'Can I integrate this with my current fleet management software?',
      answer:
        'Yes. Our system offers universal compatibility with major fleet platforms and APIs for easy integration.',
    },
    {
      question: 'What kind of reports can I generate?',
      answer:
        'You can generate automated reports for mileage, fuel usage, engine health, driving behavior, and more—customizable to your operations.',
    },
    {
      question: 'What support is available after purchase?',
      answer:
        'We offer 24/7 expert support, onboarding assistance, and dedicated customer success teams to ensure your fleet is fully optimized from day one.',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Navigation customColor='text-white' />

      {/* Hero Section */}
      <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
        {/* Background Image & Overlays */}
        <div className='absolute inset-0'>
          <Image
            src='/assets/fleet-management/RidesIQIQ120.jpg'
            alt='GPS Tracking Device'
            className='w-full h-full object-cover'
            width={1920}
            height={1080}
          />
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70' />
          <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10' />
        </div>

        <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Content */}
            <div className='text-center lg:text-left'>
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
                  <Sparkles className='w-4 h-4 mr-2' />
                  Advanced GPS Tracking Solutions
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
                >
                  <span className='text-white'>Smarter Fleet Tracking </span>
                  <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                    Starts Here
                  </span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-xl text-white/90 leading-relaxed'
                >
                  Track vehicles in real time, get instant alerts, and automate
                  reporting—all in one seamless GPS solution built for modern
                  fleets.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='flex flex-col sm:flex-row gap-4 pt-4'
                >
                  <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group shadow-xl shadow-[#678FCA]/20'>
                    Request a Demo
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className='pt-8 border-t border-white/10'
                >
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center'>
                        <Shield className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-white'>98%</div>
                        <div className='text-sm text-white/70'>
                          Customer Satisfaction
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center'>
                        <Truck className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-white'>
                          50K+
                        </div>
                        <div className='text-sm text-white/70'>
                          Active Vehicles
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center'>
                        <Clock className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-white'>
                          24/7
                        </div>
                        <div className='text-sm text-white/70'>
                          Expert Support
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Product Image */}
            {/* <motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="hidden lg:block relative"
						>
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/20 to-[#99D5C9]/20 rounded-3xl transform rotate-6" />
								<Image
									src="/assets/homepage/3.png"
									alt="GPS Tracking Device"
									className="relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
									width={800}
									height={533}
								/>
							</div> */}

            {/* Floating Stats */}
            {/* <motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg"
							>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
										<Shield className="w-5 h-5 text-green-600" />
									</div>
									<div>
										<div className="text-sm font-medium text-gray-900">Real-time Tracking</div>
										<div className="text-xs text-gray-500">Live updates every 10s</div>
									</div>
								</div>
							</motion.div>
						</motion.div> */}
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>
      {/* Overview Section */}
      <section className='py-24 relative overflow-hidden bg-gray-50/50'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Column - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/20 to-[#99D5C9]/20 rounded-3xl transform rotate-6' />
                <Image
                  src='/assets/fleet-management/3.png'
                  alt='RidesIQ Hard-Wired GPS Tracking Device'
                  className='relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0 w-full'
                  width={600}
                  height={600}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                    <Navigation2 className='w-5 h-5 text-green-600' />
                  </div>
                  <div>
                    <div className='text-sm font-medium text-gray-900'>
                      Live Tracking
                    </div>
                    <div className='text-xs text-gray-500'>
                      10-second updates
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='space-y-6'
              >
                <h2 className='text-3xl sm:text-4xl font-bold text-black'>
                  Advanced GPS Tracking Built for
                  <br />
                  <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                    Modern Fleets
                  </span>
                </h2>

                <p className='text-lg text-black leading-relaxed'>
                  Whether you manage 5 vehicles or 5,000, our GPS tracking
                  solution delivers industry-leading accuracy, zero-delay
                  location updates, and real-time analytics to boost fleet
                  efficiency, reduce downtime, and improve decision-making.
                  Engineered for reliability and built for scale.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {[
                    {
                      icon: Navigation2,
                      title: 'Real-Time GPS Tracking',
                      description:
                        'Know your fleet’s location 24/7 with GPS updates by distance or time—no delays, ever.',
                    },
                    {
                      icon: AlertCircle,
                      title: 'Advanced Security Alerts',
                      description:
                        'Get instant notifications for geofence breaches, tampering, speeding, and impact events.',
                    },
                    {
                      icon: FileText,
                      title: 'Fleet Compliance & Reporting',
                      description:
                        'Automate mileage, fuel, and engine reports to simplify compliance and reduce manual work.',
                    },
                    {
                      icon: Activity,
                      title: 'Comprehensive Telematics Data',
                      description:
                        'Monitor driver behavior like braking, acceleration, idling, and fatigue in real time.',
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='flex items-start gap-4'
                    >
                      <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                        <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                          <benefit.icon className='w-6 h-6 text-[#678FCA]' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-1 text-gray-900'>
                          {benefit.title}
                        </h3>
                        <p className='text-sm text-gray-600'>
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link href='/contact' className='pt-6'>
                  <button className='bg-[#678FCA] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group'>
                    Learn More About Features
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className='py-24 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50' />
        <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Key Features
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Key Features That Power
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Smarter Fleet Operations
              </span>
            </motion.h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {[
              {
                icon: MapPin,
                title: 'Real-Time Location Tracking',
                description:
                  'Track your fleet’s precise location with live GPS updates based on distance or time. Instantly know where every vehicle is—no lag, no guesswork.',
              },
              {
                icon: BarChart3,
                title: 'Real-Time Telematics',
                description:
                  'Monitor fuel usage, driver behavior, and vehicle performance using actionable telematics data to improve efficiency and safety.',
              },
              {
                icon: Bell,
                title: 'Geofencing & Alerts',
                description:
                  'Set virtual zones and receive instant alerts for unauthorized movement, harsh driving, or boundary breaches.',
              },
              {
                icon: Tool,
                title: 'Advanced Maintenance Alerts',
                description:
                  'Reduce costly breakdowns with proactive alerts for engine health, battery levels, and harsh braking or acceleration.',
              },
              {
                icon: Lock,
                title: 'Secure Data Transmission',
                description:
                  'End-to-end encrypted GPS tracking with multi-server failover ensures secure and reliable data flow—no matter the conditions.',
              },
              {
                icon: Radio,
                title: 'Multi-Network Connectivity',
                description:
                  'Track across regions with LTE-FDD & GSM network support, keeping your fleet connected even in remote or high-traffic zones.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative group h-full'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]' />

                <div className='relative h-full bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50 flex flex-col'>
                  <div className='flex items-center gap-6 mb-4'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                      <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                        <feature.icon className='w-7 h-7 text-[#678FCA]' />
                      </div>
                    </div>

                    <h3 className='text-xl font-semibold text-gray-900 flex-1'>
                      {feature.title}
                    </h3>
                  </div>

                  <p className='text-gray-600 leading-relaxed flex-1'>
                    {feature.description}
                  </p>

                  <div className='mt-6 pt-6 border-t border-gray-100'>
                    <button className='text-[#678FCA] font-medium flex items-center text-sm group/btn'>
                      Learn more
                      <ChevronRight className='ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1' />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-16 text-center'
          >
            <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
              Explore Fleet Capabilities
              <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className='py-24 relative overflow-hidden bg-gray-50'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Compare Products
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Choose the Right Tracking Solution for
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Your Fleet
              </span>
            </motion.h2>
          </motion.div>

          {/* Desktop Comparison Table */}
          <div className='hidden lg:block'>
            <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
              {/* Header Row */}
              <div className='grid grid-cols-4 gap-0.5 bg-gray-100 p-0.5'>
                <div className='bg-white p-6'>
                  <div className='font-semibold text-gray-500'>Features</div>
                </div>
                {products.map((product) => (
                  <div key={product.id} className='bg-white p-6'>
                    <div className='text-center'>
                      <Image
                        src={product.image}
                        alt={product.name}
                        {...product.imageProps}
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Rows */}
              {Object.entries(products[0].specs).map(([key, spec]) => (
                <div
                  key={key}
                  className='grid grid-cols-4 gap-0.5 bg-gray-100 p-0.5'
                >
                  <div className='bg-white p-6'>
                    <div className='flex items-center gap-3'>
                      <spec.icon className='w-5 h-5 text-[#678FCA]' />
                      <span className='font-medium text-gray-900 capitalize'>
                        {key}
                      </span>
                    </div>
                  </div>
                  {products.map((product) => (
                    <div key={`${product.id}-${key}`} className='bg-white p-6'>
                      <div className='text-center'>
                        <div className='font-medium text-gray-900'>
                          {product.specs[key].value}
                        </div>
                        <div className='text-sm text-gray-500 mt-1'>
                          {product.specs[key].description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className='lg:hidden space-y-4'>
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={false}
                animate={{
                  height: activeProduct === product.id ? 'auto' : 'auto',
                }}
                className='bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden'
              >
                <button
                  onClick={() =>
                    setActiveProduct(
                      activeProduct === product.id ? null : product.id
                    )
                  }
                  className='w-full p-6 flex items-center justify-between'
                >
                  <div className='flex items-center gap-4'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-16 h-16 object-cover rounded-lg'
                    />
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {product.name}
                    </h3>
                  </div>
                  {activeProduct === product.id ? (
                    <X className='w-5 h-5 text-gray-500' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-gray-500' />
                  )}
                </button>

                {activeProduct === product.id && (
                  <div className='px-6 pb-6 space-y-4'>
                    {Object.entries(product.specs).map(([key, spec]) => (
                      <div key={key} className='flex items-start gap-3'>
                        <div className='w-8 h-8 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0'>
                          <spec.icon className='w-4 h-4 text-[#678FCA]' />
                        </div>
                        <div>
                          <div className='font-medium text-gray-900 capitalize'>
                            {key}
                          </div>
                          <div className='text-sm text-gray-500'>
                            {spec.value}
                          </div>
                          <div className='text-xs text-gray-400'>
                            {spec.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-12 text-center'
          >
            <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
              Request Custom Quote
              <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Device Specifications Section */}

      <section className='py-24 bg-gray-50/50 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Technical Details
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Technical Specifications & Details
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-xl text-gray-600 max-w-3xl mx-auto'
            >
              Built for demanding fleet operations, this GPS tracker combines
              rugged durability, precision positioning, and multi-network
              compatibility. Engineered for seamless integration with leading
              telematics platforms and extreme on-road conditions.
            </motion.p>
          </motion.div>

          {/* Product specs section with sticky image */}
          <div className='py-24 bg-white' ref={containerRef}>
            <div className='container mx-auto px-4'>
              <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
                {/* Specifications Table */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className='bg-white rounded-2xl shadow-lg border border-gray-100 order-2 lg:order-1'
                >
                  <div className='divide-y divide-gray-100'>
                    {[
                      {
                        icon: Ruler,
                        name: 'Dimensions',
                        value: '3.5in x 1.3in x 0.5in',
                        description:
                          'Compact, waterproof housing with built-in status LEDs.',
                      },
                      {
                        icon: Wifi,
                        name: 'Connectivity',
                        value: '4G LTE + GSM',
                        description:
                          'Supports LTE-FDD bands B1–B8/B20/B28/B66 and GSM fallback for global coverage.',
                      },
                      {
                        icon: Power,
                        name: 'Power Source',
                        value: 'DC 9V - 100V / 1.5A',
                        description:
                          'Wide input range compatible with light and heavy-duty vehicles.',
                      },
                      {
                        icon: Award,
                        name: 'Certifications',
                        value: 'Industry Compliant',
                        description:
                          'Meets global standards for fleet tracking and telematics',
                      },
                      {
                        icon: Battery,
                        name: 'Battery Life',
                        value: '120mAh Backup',
                        description:
                          'Supports emergency tracking in case of power loss',
                      },
                      {
                        icon: Database,
                        name: 'Data Storage',
                        value: '16Mb Flash Memory',
                        description:
                          'Stores critical GPS and vehicle data locally',
                      },
                      {
                        icon: Laptop,
                        name: 'Weight',
                        value: '~45g',
                        description:
                          'Lightweight for easy installation and mounting flexibility.',
                      },
                      {
                        icon: Shield,
                        name: 'Security',
                        value: 'Tamper Alerts & Encryption',
                        description:
                          'Detects unauthorized disconnection and protects data',
                      },
                      {
                        icon: Wifi,
                        name: 'GPS Accuracy',
                        value: '±2 meters',
                        description:
                          'High-precision tracking with L76K GPS module',
                      },
                      {
                        icon: Battery,
                        name: 'Operating Temperature',
                        value: '-20°C to 60°C',
                        description:
                          'Reliable performance in extreme conditions',
                      },
                      {
                        icon: Shield,
                        name: 'Water Resistance',
                        value: 'IP66 Rated',
                        description:
                          'Dustproof and resistant to heavy water exposure',
                      },
                      {
                        icon: Database,
                        name: 'Memory',
                        value: '16Mb Flash Storage',
                        description: 'Ensures reliable offline data logging',
                      },
                    ].map((spec, index) => (
                      <motion.div
                        key={`${spec.name}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className='p-6 hover:bg-gray-50 transition-colors'
                      >
                        <div className='flex items-start gap-4'>
                          <div className='w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0'>
                            <spec.icon className='w-5 h-5 text-[#678FCA]' />
                          </div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium text-gray-500'>
                              {spec.name}
                            </div>
                            <div className='text-lg font-semibold text-gray-900 mt-1'>
                              {spec.value}
                            </div>
                            <div className='text-sm text-gray-600 mt-1'>
                              {spec.description}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Product Image - Sticky Container */}
                <div className='relative order-1 lg:order-2 lg:-mt-12'>
                  <div className='lg:sticky lg:top-24' ref={imageRef}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className='relative'
                    >
                      <div className='relative max-w-md mx-auto lg:max-w-none'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/20 to-[#99D5C9]/20 rounded-3xl transform rotate-6' />
                        <Image
                          src={`/assets/fleet-management/5.png`}
                          alt={products[0].name}
                          className='relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0 w-full'
                          width={800}
                          height={800}
                          priority
                        />
                      </div>

                      {/* Certification Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className='absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg'
                      >
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                            <Award className='w-5 h-5 text-blue-600' />
                          </div>
                          <div>
                            <div className='text-sm font-medium text-gray-900'>
                              Certified Device
                            </div>
                            <div className='text-xs text-gray-500'>
                              FCC, CE, PTCRB
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-16 text-center'
          >
            <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
              Contact a Specialist
              <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gray-50/50 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
            >
              <HelpCircle className='w-4 h-4 mr-2' />
              Frequently Asked Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Common Questions About
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Our GPS Tracking Solutions
              </span>
            </motion.h2>
          </motion.div>

          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className='w-full px-6 py-4 text-left flex items-center justify-between'
                >
                  <span className='text-lg font-medium text-gray-900'>
                    {faq.question}
                  </span>
                  {activeFaq === index ? (
                    <Minus className='w-5 h-5 text-[#678FCA]' />
                  ) : (
                    <Plus className='w-5 h-5 text-[#678FCA]' />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className='px-6 pb-4 text-gray-600'>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-12 text-center'
          >
            <p className='text-gray-600 mb-6'>
              Still have questions? We are here to help.
            </p>
            <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
              Contact Support
              <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl'>
            {/* Background Pattern */}
            <div className='absolute inset-0'>
              <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10' />
              <div className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent' />
            </div>

            <div className='relative px-6 py-20 sm:px-12 sm:py-28'>
              <div className='max-w-3xl mx-auto text-center'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8'
                >
                  Ready to Track Smarter, Safer, and in Real Time?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-xl text-white/90 mb-12'
                >
                  Join thousands of fleet managers using our GPS platform to
                  reduce downtime, recover vehicles faster, and automate
                  compliance—all with zero-delay tracking.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='space-y-8'
                >
                  <button className='bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
                    Get Started Today
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>

                  {/* Tag Buttons */}
                  <div className='flex flex-wrap justify-center gap-4'>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Fleet Tracking
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Cross-Border Coverage
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Real-Time Alerts
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white pt-16 pb-8 px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12'>
            {/* Email Signup Section */}
            <div className='lg:col-span-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className='text-2xl font-bold mb-4'>
                  Sign up for email updates
                </h3>
                <p className='text-gray-400 mb-6'>
                  Your one-stop shop for Telematics news you need to know each
                  month.
                </p>
                <form className='space-y-3'>
                  <div className='relative'>
                    <input
                      type='email'
                      placeholder='Enter email address...'
                      className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent transition-all'
                    />
                  </div>
                  <button className='w-full bg-[#678FCA] text-white px-6 py-3 rounded-lg hover:bg-[#678FCA]/90 transition-all flex items-center justify-center group'>
                    Subscribe
                    <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div className='lg:col-span-8'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Industries */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className='text-lg font-semibold mb-4'>Industries</h4>
                  <ul className='space-y-3'>
                    <li>
                      <Link
                        href='/industries/fleet-management'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Fleet Management
                      </Link>
                    </li>
                    <li>
                      <a
                        href='/industries/construction'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Construction
                      </a>
                    </li>
                    <li>
                      <a
                        href='/industries/food-delivery'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Food-Delivery
                      </a>
                    </li>
                    <li>
                      <a
                        href='/industries/car-rental'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Car-rental
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href='#'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        EV Tracking
                      </a>
                    </li> */}
                  </ul>
                </motion.div>

                {/* Solutions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className='text-lg font-semibold mb-4'>Solutions</h4>
                  <ul className='space-y-3'>
                    <li>
                      <Link
                        href='/solutions/hard-wired-trackers'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Hard-Wired Trackers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/solutions/obd-trackers'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        OBD Trackers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/solutions/asset-trackers'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Asset Trackers
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className='text-lg font-semibold mb-4'>Resources</h4>
                  <ul className='space-y-3'>
                    {/* <li className="flex items-center">
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Blog
											</a>
											<span className="ml-2 text-xs bg-[#678FCA]/20 text-[#678FCA] px-2 py-0.5 rounded-full">Soon</span>
										</li> */}
                    <li>
                      <a
                        href='faq'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        FAQs
                      </a>
                    </li>
                    {/* <li className="flex items-center">
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												API Docs
											</a>
											<span className="ml-2 text-xs bg-[#678FCA]/20 text-[#678FCA] px-2 py-0.5 rounded-full">Soon</span>
										</li> */}
                    <li>
                      <a
                        href='contact'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8 mt-8 border-t border-gray-800'>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
              {/* Legal Links */}
              <div className='flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400'>
                <Link
                  href='/privacy-policy'
                  className='hover:text-white transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='responsible-disclosure'
                  className='hover:text-white transition-colors'
                >
                  Responsible Disclosure
                </Link>
                {/* <Link
                  href='terms-of-service'
                  className='hover:text-white transition-colors'
                >
                  Terms of Service
                </Link> */}
                <Link
                  href='trust-center'
                  className='hover:text-white transition-colors'
                >
                  Trust Center
                </Link>
              </div>

              {/* Social Links */}
              {/* <div className='flex items-center space-x-4'>
                <Link
                  href='#'
                  className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#678FCA] transition-colors group'
                >
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#678FCA] transition-colors group'
                >
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.6.3 1 .7 1.4 1.4.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.3.6-.7 1-1.4 1.4-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1-.7-1.4-1.4-.2-.5-.4-1.3-.5-2.5-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.3-.6.7-1 1.4-1.4.5-.2 1.3-.4 2.5-.5 1.2-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7.1.1 5.9.2 4.8.5 4 .9c-.9.4-1.6 1.1-2 2-.4.8-.7 1.9-.8 3.1C1 7.3 1 7.7 1 12s0 4.7.1 6c.1 1.2.4 2.3.8 3.1.4.9 1.1 1.6 2 2 .8.4 1.9.7 3.1.8 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.2-.1 2.3-.4 3.1-.8.9-.4 1.6-1.1 2-2 .4-.8.7-1.9.8-3.1.1-1.3.1-1.7.1-6s0-4.7-.1-6c-.1-1.2-.4-2.3-.8-3.1-.4-.9-1.1-1.6-2-2-.8-.4-1.9-.7-3.1-.8C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z' />
                  </svg>
                </Link>

                <Link
                  href='#'
                  className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#678FCA] transition-colors group'
                >
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.005 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 17.005 22 12z' />
                  </svg>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className='fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden'>
        <button className='w-full bg-[#678FCA] text-white py-3 rounded-full flex items-center justify-center'>
          Get a Demo <ChevronRight className='ml-2 w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

export default Tracking;
