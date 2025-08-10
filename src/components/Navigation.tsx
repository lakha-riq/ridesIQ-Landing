'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  MenuIcon,
  X,
  ChevronRight,
  Truck,
  Construction,
  Bike,
  Bus,
  Factory,
  Ambulance,
  Warehouse,
  ChevronDown,
  Car,
  Battery,
  BatteryCharging,
  PcCase,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IndustryLink {
  icon: typeof Truck;
  title: string;
  description: string;
  href: string;
}

const industryLinks: IndustryLink[] = [
  {
    icon: Car,
    title: 'Car Rental',
    description: 'Smart solutions for car rental fleet management',
    href: '/industries/car-rental',
  },
  {
    icon: Truck,
    title: 'Logistics & Transportation',
    description: 'Fleet solutions for trucking and delivery companies',
    href: '/industries/logistics-transportation',
  },
  {
    icon: Construction,
    title: 'Construction',
    description: 'Track and manage construction vehicle fleets',
    href: '/industries/construction',
  },
  {
    icon: Bike,
    title: 'Food Delivery',
    description: 'Optimize routes for food delivery services',
    href: '/industries/food-delivery',
  },
];

export const Navigation = ({ customColor = 'text-gray-700' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkColor = scrolled ? 'text-gray-700' : customColor;

  return (
    <motion.nav
      className="fixed w-full z-50"
      style={{
        backgroundColor: scrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0)',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      }}
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)', boxShadow: 'none' }}
      animate={{
        backgroundColor: scrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0)',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-[#678FCA]"
              aria-label="RidesIQ Home"
            >
              RidesIQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('industries')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center p-2 ${navLinkColor} hover:text-[#678FCA] transition-colors`}
                aria-expanded={activeDropdown === 'industries'}
                aria-haspopup="true"
                onClick={() =>
                  activeDropdown === 'industries'
                    ? setActiveDropdown(null)
                    : handleDropdownEnter('industries')
                }
              >
                Industries
                <motion.div
                  animate={{
                    rotate: activeDropdown === 'industries' ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    className="absolute -left-30 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="industries-menu"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Industries We Serve
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {industryLinks.map((industry, idx) => (
                          <Link
                            key={idx}
                            href={industry.href}
                            className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            role="menuitem"
                          >
                            <div className="w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
                              <industry.icon
                                className="w-5 h-5 text-[#678FCA]"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors">
                                {industry.title}
                              </div>
                              <div className="text-xs text-gray-500">
                                {industry.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center p-2 ${navLinkColor} hover:text-[#678FCA] transition-colors`}
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true"
                onClick={() =>
                  activeDropdown === 'solutions'
                    ? setActiveDropdown(null)
                    : handleDropdownEnter('solutions')
                }
              >
                Solutions
                <motion.div
                  animate={{ rotate: activeDropdown === 'solutions' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    className="absolute -left-60 p-2 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="solutions-menu"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Solutions We Provide
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Link
                          href="/solutions/hard-wired-trackers"
                          className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          role="menuitem"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
                            <Battery className="transform rotate-180 text-[#678FCA]" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors">
                              Hard-Wired Trackers
                            </div>
                            <div className="text-xs text-gray-500">
                              Fixed installation GPS devices for reliable
                              vehicle tracking.
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/solutions/obd-trackers"
                          className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          role="menuitem"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-[#678FCA]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M6 3a1 1 0 00-1 1v1h10V4a1 1 0 00-1-1H6zM4 7h12v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors">
                              OBD Trackers
                            </div>
                            <div className="text-xs text-gray-500">
                              Plug-and-play GPS devices that connect via OBD
                              port.
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/solutions/asset-trackers"
                          className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          role="menuitem"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
                            <PcCase className="text-[#678FCA]" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors">
                              Asset Trackers
                            </div>
                            <div className="text-xs text-gray-500">
                              Compact tracking devices for valuable assets and
                              equipment.
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact">
              <motion.button
                className="bg-[#678FCA] cursor-pointer text-white px-6 py-2.5 rounded-full hover:bg-[#678FCA]/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Get a Demo
              </motion.button>
            </Link>
          </div>

          <motion.button
            ref={buttonRef}
            className="md:hidden text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#678FCA]/50"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 ${navLinkColor} h-6`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon className={`w-6 ${navLinkColor} h-6`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div
              className="px-4 py-4 space-y-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">
                  Industries
                </div>
                {industryLinks.map((industry, index) => (
                  <motion.div
                    key={industry.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.03 }}
                  >
                    <Link
                      href={industry.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      <industry.icon
                        className="w-5 h-5 mr-3 text-[#678FCA]"
                        aria-hidden="true"
                      />
                      {industry.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">
                  Solutions
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/solutions/hard-wired-trackers"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#678FCA]/10 flex items-center justify-center">
                      <Battery className="w-4 h-4 transform rotate-180 text-[#678FCA]" />
                    </div>
                    <span className="text-sm font-medium">
                      Hard-Wired Trackers
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.33 }}
                >
                  <Link
                    href="/solutions/obd-trackers"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#678FCA]/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#678FCA]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 3a1 1 0 00-1 1v1h10V4a1 1 0 00-1-1H6zM4 7h12v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">OBD Trackers</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.36 }}
                >
                  <Link
                    href="/solutions/asset-trackers"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#678FCA]/10 flex items-center justify-center">
                      <PcCase className="w-4 h-4 text-[#678FCA]" />
                    </div>
                    <span className="text-sm font-medium">Asset Trackers</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
