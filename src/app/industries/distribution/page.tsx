'use client';
import React from 'react';
import { IndustryTemplate } from '@/components/IndustryTemplate';
import { IndustryKeyFeatures } from '@/components/IndustryKeyFeatures';
import {
  Warehouse,
  Shield,
  Clock,
  AlertCircle,
  Settings2,
  Timer,
  TrendingUp,
  Target,
  LineChart,
  Box,
  LucideIcon,
  MapPin,
  ConstructionIcon,
  BarChart3,
} from 'lucide-react';
type KeyFeature = {
  icon: LucideIcon; // From lucide-react
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

type IndustryData = {
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  challenges: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  challengePara: string;
  solutions: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  stats: {
    icon: LucideIcon;
    value: number;
    suffix: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
  };
  products: {
    title: string;
    image: string;
    features: string[];
    link: string;
  }[];
  ctaData: {
    heading: string;
    description: string;
    tag1: string;
    tag2: string;
    tag3: string;
  };
};
const distributionKeyFeatures: KeyFeature[] = [
  {
    icon: Box,
    title: 'Inventory Lot Tracking',
    description:
      'Real-time GPS visibility across all dealership vehicles—on-site, in transit, or on demo.',
    stat: '99%',
    statLabel: 'Location Accuracy',
  },
  {
    icon: Warehouse,
    title: 'Demo Vehicle Oversight',
    description:
      'Monitor test drives with route history, geofence alerts, and misuse detection.',
    stat: '3x',
    statLabel: 'More Driving Accountability',
  },
  {
    icon: Shield,
    title: 'Stolen Vehicle Recovery',
    description:
      'Increase recovery speed with real-time alerts and multi-network GPS coverage.',
    stat: '90%',
    statLabel: 'Recovery Rate',
  },
  {
    icon: LineChart,
    title: 'Loaner & Service Car Management',
    description:
      'Track usage duration, driver behavior, and location of loaner vehicles in real time.',
    stat: '60%',
    statLabel: 'Fewer Overdue Returns',
  },
];

const distributionData: IndustryData = {
  name: ' GPS Tracking for Auto Dealerships',
  subtitle: 'Dealership Vehicle Tracking',
  description:
    'Protect your lot, reduce vehicle misuse, and streamline test-drive tracking with GPS solutions designed for dealerships. Get real-time visibility across every vehicle—on or off the lot.',
  heroImage: '/assets/universal/installation.jpg',
  challenges: [
    {
      icon: Clock,
      title: 'Lot Transfers & Inventory Audits',
      description:
        'Manual tracking of transfers and off-site storage vehicles creates delays and miscounts.',
    },
    {
      icon: AlertCircle,
      title: 'Unauthorized/Off-Hour Use',
      description:
        'Prevent misuse with ignition alerts, after-hours movement notifications, and custom driving rules.',
    },
    {
      icon: Settings2,
      title: 'Stolen Vehicle Risk',
      description:
        'Dealerships lose thousands each year to theft—often after hours or during extended test drives.',
    },
  ],
  solutions: [
    {
      icon: Warehouse,
      title: 'Multi-Lot Tracking',
      description:
        'Monitor vehicle movement across all locations and reduce manual data entry with automatic logging.',
    },
    {
      icon: Shield,
      title: 'Demo Vehicle Monitoring',
      description:
        'Track test drives, limit use zones, and get real-time alerts for aggressive driving or off-route activity.',
    },
    {
      icon: MapPin,
      title: 'Theft Recovery & Alerts',
      description:
        'Get instant tamper alerts, disable ignition remotely, and increase recovery speed with precision tracking.',
    },
  ],
  stats: [
    {
      icon: Box,
      value: 40,
      suffix: 'k+',
      label: 'Vehicles Tracked',
    },
    {
      icon: Timer,
      value: 96,
      suffix: '%',
      label: 'On-Time Rate',
    },
    {
      icon: TrendingUp,
      value: 2.7,
      suffix: 'x',
      label: 'Efficiency Gain',
    },
    {
      icon: Target,
      value: 99.8,
      suffix: '%',
      label: 'GPS Accuracy',
    },
  ],
  testimonial: {
    quote:
      'RidesIQ gives us complete visibility over our lot and loaner fleet. We’ve reduced test-drive misuse, recovered a stolen demo unit, and no longer waste time doing manual lot walks.',
    author: 'Jessica Ramirez',
    role: 'Fleet Operations Manager',
    company: 'Horizon Auto Group',
    image: '/assets/fleet-management/3.png',
  },
  products: [
    {
      title: 'Hardwired GPS Tracker',
      image: '/assets/devices/HardWiredNoBKGD.png',
      features: [
        'Installed & hidden from drivers',
        'Real-time GPS via direct power',
        'Real-time GPS via direct power',
        'Ideal for long-term use',
      ],
      link: '/',
    },
    {
      title: 'OBD Plug & Play Tracker',
      image: '/assets/devices/OBDNoBKGD.png',
      features: [
        'Installs in seconds (OBD-II)',
        'Tracks GPS, speed & diagnostics',
        'Best for short-term rentals',
        'Swaps easily between vehicles',
      ],
      link: '/',
    },
    {
      title: 'Asset Tracker (SVR)',
      image: '/assets/devices/AssetTrackerNoBKGD.png',
      features: [
        'Battery-powered with long life',
        'Auto-activates if main tracker is removed',
        'Weatherproof & discreet',
        'Acts as backup theft recovery',
      ],
      link: '/',
    },
  ],
  challengePara:
    'Monitor heavy equipment, reduce downtime, and optimize logistics across multiple job sites using rugged vehicle telematics built for the construction industry. ',
  ctaData: {
    heading: 'Smarter Construction Fleet Tracking with RidesIQ ',
    description:
      'Boost job site efficiency, reduce equipment downtime, and ensure real-time visibility across your construction vehicles and heavy machinery. ',
    tag1: '#EquipmentMonitoring',
    tag2: '#Fuel&Idle Reports',
    tag3: '#JobSiteGeofencing',
  },
};

const Distribution = () => {
  return (
    // <IndustryTemplate
    //   industry={distributionData}
    //   keyFeatures={
    //     <IndustryKeyFeatures
    //       industryName="Distribution"
    //       features={distributionKeyFeatures}
    //     />
    //   }
    // />
    <h1>this is distribution page</h1>
  );
};

export default Distribution;
