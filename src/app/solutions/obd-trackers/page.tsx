'use client';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useRef,
  useEffect,
  useState,
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
  LucideProps,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';
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

      if (window.innerWidth >= 1024) {
        const imageHeight = image.offsetHeight;
        const containerTop = containerRect.top;
        const containerHeight = container.offsetHeight;
        const imageCenterOffset = imageHeight / 2;
        const viewportCenter = windowHeight / 2;
        const startPoint = containerTop - viewportCenter + imageCenterOffset;
        const endPoint = containerRect.bottom - windowHeight;
        if (startPoint <= 0 && endPoint >= 0) {
          const scrollProgress = Math.max(
            0,
            Math.min(1, -startPoint / (endPoint - startPoint))
          );

          const maxScroll = containerHeight - imageHeight - 100;
          const scrollAmount = Math.min(maxScroll, scrollProgress * maxScroll);

          image.style.transform = `translateY(${scrollAmount}px)`;
        } else if (startPoint > 0) {
          image.style.transform = `translateY(0px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products: Products[] = [
    {
      id: 'obd',
      name: 'OBD Plug-and-Play GPS Tracker',
      image: '/assets/devices/OBDNoBKGD.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Plug & Play GPS Installation',
          description:
            'Connects directly to your vehicle’s OBD-II port—no tools needed.',
        },
        power: {
          icon: Zap,
          value: 'Vehicle-Powered via OBD-II',
          description: 'Runs directly off the vehicle’s power source.',
        },
        bestFor: {
          icon: Truck,
          value: 'Cars & Light Commercial Vehicles',
          description:
            'Ideal for small fleets, service vehicles, and daily-use cars.',
        },
        battery: {
          icon: Battery,
          value: 'No Internal Battery Required',
          description: 'Draws constant power from the OBD port.',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE Cat M1/NB1 Connectivity',
          description: 'Reliable real-time tracking via cellular LTE.',
        },
        features: {
          icon: Shield,
          value: 'Motion & Impact Detection',
          description: 'Detects sudden movement, braking, or collisions.',
        },
      },
    },
    {
      id: 'hardwired',
      name: 'Hard-Wired GPS Fleet Tracker',
      image: '/assets/devices/HardWiredNoBKGD.png',
      imageProps: {
        width: 450,
        height: 300,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Professional Hardwired Installation',
          description: 'Secure, permanent install for commercial fleets.',
        },
        power: {
          icon: Zap,
          value: '9–100V Direct Vehicle Power',
          description: 'Compatible with trucks, buses, and EVs.',
        },
        bestFor: {
          icon: Truck,
          value: 'Heavy-Duty Fleet Tracking',
          description: 'Ideal for trucking, logistics, and large vehicles.',
        },
        battery: {
          icon: Battery,
          value: 'Integrated Backup Battery',
          description: 'Keeps tracking active during power loss or tampering.',
        },
        connectivity: {
          icon: Wifi,
          value: '4G LTE + GPS + GSM',
          description: 'Reliable real-time tracking across networks.',
        },
        features: {
          icon: Shield,
          value: 'Advanced Fleet Security',
          description: 'Tamper, crash, and geofence alerts with OTA updates.',
        },
      },
    },
    {
      id: 'asset',
      name: 'Battery-Powered Asset GPS Tracker',
      image: '/assets/devices/AssetTrackerNoBKGD.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Compact & Portable Design',
          description: 'Small form factor, ideal for trailers and containers.',
        },
        power: {
          icon: Zap,
          value: '2400mAh Battery Powered',
          description: 'Built-in 2400mAh battery for extended tracking.',
        },
        bestFor: {
          icon: Box,
          value: 'Equipment & Asset Monitoring',
          description:
            'Great for trailers, containers, and non-powered assets.',
        },
        battery: {
          icon: Battery,
          value: '3-Year Battery Life',
          description: 'Up to 3 years with variable frequency.',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE + 2G/3G Backup',
          description:
            'Reliable tracking with fallback coverage in rural zones.',
        },
        features: {
          icon: Shield,
          value: 'Weatherproof & Rugged',
          description:
            'Waterproof and built to withstand harsh outdoor conditions.',
        },
      },
    },
  ];

  const faqs = [
    {
      question: 'How easy is it to install the OBD GPS tracker?',
      answer:
        'Installation is plug-and-play. Simply insert the device into your vehicle’s OBD-II port—no tools, technicians, or downtime required.',
    },
    {
      question:
        'Does the tracker pull engine diagnostics or vehicle health data?',
      answer:
        'Yes, the RidesIQ OBD tracker reads data directly from the OBD-II port, allowing you to monitor engine status, battery voltage, and vehicle health alerts in real time.',
    },
    {
      question: 'How accurate is the GPS location tracking?',
      answer:
        'Our OBD tracker uses a high-sensitivity GNSS receiver with autonomous positioning accuracy of under 2.5 meters and tracking sensitivity down to -162 dBm.',
    },
    {
      question: 'What happens if the tracker is unplugged or loses power?',
      answer:
        'You’ll receive an immediate tamper or power disconnection alert. A built-in backup battery allows limited reporting even if the device is unplugged.',
    },
    {
      question: 'Can I track driving behavior with the OBD tracker?',
      answer:
        'Yes. The device can detect harsh acceleration, braking, and sharp turns using its built-in 3-axis accelerometer, helping you manage driver safety and compliance.',
    },
    {
      question: 'How often does the device update its location?',
      answer:
        'Location updates can be customized by time interval, movement, or status changes. This allows for real-time visibility without draining network or power resources.',
    },
    {
      question:
        'Does this tracker work across borders or in multiple countries?',
      answer:
        'Yes. With LTE Cat M1/NB1 and 2G fallback, the tracker ensures reliable multi-band connectivity across North America and many international regions.',
    },
    {
      question: 'Can I set up alerts for geofencing or unauthorized use?',
      answer:
        'Absolutely. Set custom geofences and receive instant alerts when a vehicle enters or exits a designated zone or is powered on outside working hours.',
    },
    {
      question: 'What kind of support and warranty is included?',
      answer:
        'RidesIQ provides 24/7 expert support and full onboarding assistance. All devices include a standard manufacturer warranty and options for extended coverage.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation customColor="text-white" />

      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <Image
            src="/assets/universal/installation.jpg"
            alt="GPS Tracking Device"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
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
                  Plug-and-Play GPS Tracking
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                >
                  <span className="text-white">Track Smarter with </span>
                  <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                    Easy Plug-and-Play GPS
                  </span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-white/90 leading-relaxed"
                >
                  Get instant visibility into your fleet with our OBD GPS
                  tracker—designed for fast, no-tools installation. Perfect for
                  rental, dealership, and light commercial vehicles, RidesIQ
                  delivers real-time tracking, driver behavior alerts, and
                  instant activation from the moment it’s plugged in.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Link href="/contact">
                    <button className="bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group shadow-xl shadow-[#678FCA]/20">
                      Request a Demo
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-8 border-t border-white/10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-start sm:text-center text-white">
                          98%
                        </div>
                        <div className="text-sm text-start sm:text-center text-white/70">
                          Customer Satisfaction
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Truck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl text-start sm:text-center font-bold text-white">
                          50K+
                        </div>
                        <div className="text-sm text-start sm:text-center text-white/70">
                          Active Vehicles
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl text-start sm:text-center font-bold text-white">
                          24/7
                        </div>
                        <div className="text-sm text-start sm:text-center text-white/70">
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
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Overview Section */}
      <section className="py-24 relative overflow-hidden bg-gray-50/50">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/20 to-[#99D5C9]/20 rounded-3xl transform rotate-6" />
                <Image
                  src="/assets/fleet-management/5.png"
                  alt="RidesIQ OBD GPS Tracking Device"
                  className="relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0 w-full"
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
                className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Navigation2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Live Tracking
                    </div>
                    <div className="text-xs text-gray-500">
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
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-black">
                  Plug-and-Play GPS Tracking for
                  <br />
                  <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                    Light-Duty Fleets
                  </span>
                </h2>

                <p className="text-lg text-black leading-relaxed">
                  The RidesIQ OBD GPS Tracker delivers high-accuracy location
                  tracking, instant activation via OBD-II port, and powerful
                  telematics insights for dealerships, rental companies, and
                  light commercial fleets. With real-time data, driver behavior
                  alerts, and low-power operation, RidesIQ OBD makes GPS
                  tracking simple, scalable, and effective—right out of the box.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Navigation2,
                      title: 'Smart Reporting Engine',
                      description:
                        'Adaptive GPS updates based on ignition status, speed, or motion.',
                    },
                    {
                      icon: AlertCircle,
                      title: 'Access to Engine Diagnostics',
                      description:
                        'Access live engine data like RPM, fuel level, and fault codes via OBD-II.',
                    },
                    {
                      icon: FileText,
                      title: 'Reliable Multi-Network Connectivity',
                      description:
                        'Supports LTE-M/NB-IoT with 2G fallback and dual-server syncing.',
                    },
                    {
                      icon: Activity,
                      title: 'Driver Behavior Monitoring',
                      description:
                        'Detects harsh braking, acceleration, sharp turns, and impacts.',
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0">
                        <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 text-[#678FCA]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link href="/contact" className="pt-6">
                  <button className="bg-[#678FCA] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group">
                    Learn More About Features
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Key Features
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Advanced OBD GPS Features for
              <br />
              <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                Connected Fleets
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: MapPin,
                title: 'Real-Time GNSS Tracking',
                description:
                  'Live location with <2.5m accuracy for precise fleet visibility.',
              },
              {
                icon: BarChart3,
                title: 'Adaptive Reporting',
                description:
                  'Smart update frequency based on speed and ignition status.',
              },
              {
                icon: Bell,
                title: 'Motion & Impact Alerts',
                description:
                  'Detects harsh driving and unauthorized use via 3-axis sensor.',
              },
              {
                icon: Tool,
                title: 'Vehicle Data via OBD-II',
                description:
                  'Reads RPM, battery voltage, DTC codes, and fuel levels.',
              },
              {
                icon: Lock,
                title: 'Multi-Channel Communication',
                description:
                  'SUses TCP, UDP, and SMS with failover for data continuity.',
              },
              {
                icon: Radio,
                title: 'LTE Cat M1/NB-IoT Connectivity',
                description:
                  'Reliable LTE-M/NB-IoT with 2G fallback for extended coverage.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]" />

                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50 flex flex-col">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-[#678FCA]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 flex-1">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* <div className='mt-6 pt-6 border-t border-gray-100'>
                    <button className='text-[#678FCA] font-medium flex items-center text-sm group/btn'>
                      Learn more
                      <ChevronRight className='ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1' />
                    </button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/contact">
              <button className="bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
                Learn More
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

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
              Compare Products
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Choose the Right
              <br />
              <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                Tracking Solution
              </span>
            </motion.h2>
          </motion.div>

          {/* Desktop Comparison Table */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-0.5 bg-gray-100 p-0.5">
                <div className="bg-white p-6">
                  <div className="font-semibold text-gray-500">Features</div>
                </div>
                {products.map((product) => (
                  <div key={product.id} className="bg-white p-6">
                    <div className="text-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        {...product.imageProps}
                        width={180}
                        height={180}
                        className="object-contain mx-auto"
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
                  className="grid grid-cols-4 gap-0.5 bg-gray-100 p-0.5"
                >
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-3">
                      <spec.icon className="w-5 h-5 text-[#678FCA]" />
                      <span className="font-medium text-gray-900 capitalize">
                        {key}
                      </span>
                    </div>
                  </div>
                  {products.map((product) => (
                    <div key={`${product.id}-${key}`} className="bg-white p-6">
                      <div className="text-center">
                        <div className="font-medium text-gray-900">
                          {product.specs[key].value}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
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
          <div className="lg:hidden space-y-4">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={false}
                animate={{
                  height: activeProduct === product.id ? 'auto' : 'auto',
                }}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveProduct(
                      activeProduct === product.id ? null : product.id
                    )
                  }
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      width={500} // Required
                      height={300}
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                  {activeProduct === product.id ? (
                    <X className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {activeProduct === product.id && (
                  <div className="px-6 pb-6 space-y-4">
                    {Object.entries(product.specs).map(([key, spec]) => (
                      <div key={key} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
                          <spec.icon className="w-4 h-4 text-[#678FCA]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 capitalize">
                            {key}
                          </div>
                          <div className="text-sm text-gray-500">
                            {spec.value}
                          </div>
                          <div className="text-xs text-gray-400">
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
            className="mt-12 text-center"
          >
            <Link href="/contact">
              <button className="bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
                Request Custom Quote
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Device Specifications Section */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

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
              Technical Details
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Device Specifications & Details
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore the technical specifications of RidesIQ Tracker and see
              how it fits into your fleet management needs. Engineered for
              accuracy, durability, and seamless integration with leading
              telematics platforms.
            </motion.p>
          </motion.div>

          {/* Product specs section with sticky image */}
          <div className="py-24 bg-white" ref={containerRef}>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Specifications Table */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 order-2 lg:order-1"
                >
                  <div className="divide-y divide-gray-100">
                    {[
                      {
                        icon: Ruler,
                        name: 'Dimensions',
                        value: '1.95in x 1.91in x 0.86in',
                        description:
                          'Compact, low-profile design for direct OBD-II installation.',
                      },
                      {
                        icon: Wifi,
                        name: 'Connectivity',
                        value: 'LTE Cat M1/NB1 + 2G',
                        description:
                          'Supports global LTE-FDD bands with 2G fallback for stable coverage.',
                      },
                      {
                        icon: Power,
                        name: 'Power Source',
                        value: '8V–32V via OBD-II',
                        description:
                          'Draws power directly from the vehicle’s diagnostic port.',
                      },
                      {
                        icon: Award,
                        name: 'Certifications',
                        value: 'Industry Compliant',
                        description:
                          'Fully compatible with OBD-II standards (ISO 15765).',
                      },
                      {
                        icon: Battery,
                        name: 'Data Storage',
                        value: 'Internal Flash Memory',
                        description:
                          'Stores GPS and diagnostic data offline for uninterrupted logging.',
                      },
                      {
                        icon: Database,
                        name: 'Software Compatibility',
                        value: 'Universal Telematics Integration',
                        description: 'Works seamlessly with API integrations.',
                      },
                      {
                        icon: Laptop,
                        name: 'Working Modes',
                        value: 'Dual Mode',
                        description:
                          'Switches between power-saving and continuous tracking.',
                      },
                      {
                        icon: Shield,
                        name: 'Security',
                        value: 'Tamper & OBD Disconnection Alerts',
                        description:
                          'Sends alerts if the device is unplugged or tampered with.',
                      },
                      {
                        icon: Wifi,
                        name: 'GPS Accuracy',
                        value: '< 2.5m CEP',
                        description:
                          'High-sensitivity u-blox GNSS for precise vehicle positioning.',
                      },
                      {
                        icon: Battery,
                        name: 'Operating Temperature',
                        value: '-30°C to +80°C',
                        description:
                          'Performs reliably in extreme heat and cold.',
                      },
                      {
                        icon: Shield,
                        name: 'Water Resistance',
                        value: 'Waterproof',
                        description:
                          'Resistant to light water exposure inside the cabin.',
                      },
                      {
                        icon: Database,
                        name: 'Memory',
                        value: 'Internal Flash Storage',
                        description:
                          'Stores key tracking data during power cycles.',
                      },
                    ].map((spec, index) => (
                      <motion.div
                        key={`${spec.name}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
                            <spec.icon className="w-5 h-5 text-[#678FCA]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-500">
                              {spec.name}
                            </div>
                            <div className="text-lg font-semibold text-gray-900 mt-1">
                              {spec.value}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {spec.description}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Product Image - Sticky Container */}
                <div className="relative order-1 lg:order-2">
                  <div className="lg:sticky lg:top-24" ref={imageRef}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative flex items-center justify-center min-h-[600px]"
                    >
                      <div className="relative max-w-md mx-auto lg:max-w-none">
                        <Image
                          src={`/assets/devices/OBDNoBKGD.png`}
                          alt={products[0].name}
                          width={800}
                          height={800}
                          priority
                        />
                      </div>

                      {/* Certification Badge */}
                      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Award className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              Certified Device
            </div>
            <div className="text-xs text-gray-500">
              FCC, CE, PTCRB
            </div>
          </div>
        </div>
      </motion.div> */}
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
            className="mt-16 text-center"
          >
            <Link href="/contact">
              <button className="bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
                Contact a Specialist
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Common Questions About
              <br />
              <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                Our GPS Tracking Solutions
              </span>
            </motion.h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {activeFaq === index ? (
                    <Minus className="w-5 h-5 text-[#678FCA]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#678FCA]" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
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
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Still have questions? We are here to help.
            </p>
            <Link href="/contact">
              <button className="bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
                Contact Support
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl">
            {/* Background Pattern */}
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
                  Ready to Transform Your Fleet?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-white/90 mb-12"
                >
                  Plug into smarter operations with RidesIQ’s OBD
                  solution—real-time vehicle tracking, driver insights, and
                  instant setup in under a minute.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-8"
                >
                  <Link
                    href="/contact"
                    className="bg-white w-[80%] sm:w-[32%] text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
                  >
                    Get Started Today
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Tag Buttons */}
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      #Plug&PlayTracking
                    </div>
                    <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      #Real-TimeInsights
                    </div>
                    <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      #EngineDiagnostics
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden">
        <button className="w-full bg-[#678FCA] text-white py-3 rounded-full flex items-center justify-center">
          Get a Demo <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Tracking;
