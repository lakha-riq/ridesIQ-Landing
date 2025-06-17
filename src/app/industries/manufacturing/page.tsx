'use client';
import React from 'react';
import { IndustryTemplate } from '@/components/IndustryTemplate';
import { IndustryKeyFeatures } from '@/components/IndustryKeyFeatures';
import {
  Factory,
  Shield,
  BarChart3,
  Clock,
  AlertCircle,
  Settings2,
  Timer,
  TrendingUp,
  Target,
  LineChart,
  Truck,
  LucideIcon,
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
  }[];
};
const manufacturingKeyFeatures: KeyFeature[] = [
  {
    icon: Factory,
    title: 'Production Fleet Optimization',
    description:
      'Maximize material handling and production vehicle efficiency with smart tracking.',
    stat: '38%',
    statLabel: 'Efficiency Increase',
  },
  {
    icon: Settings2,
    title: 'Equipment Management',
    description:
      'Comprehensive monitoring and maintenance of manufacturing vehicle fleet.',
    stat: '45%',
    statLabel: 'Downtime Reduction',
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description:
      'Ensure workplace safety and regulatory compliance for industrial vehicles.',
    stat: '90%',
    statLabel: 'Safety Compliance',
  },
  {
    icon: LineChart,
    title: 'Production Analytics',
    description:
      'Data-driven insights for manufacturing fleet operations and productivity.',
    stat: '2.2x',
    statLabel: 'ROI Increase',
  },
];

const manufacturingData: IndustryData = {
  name: 'Manufacturing GPS Tracking Solutions',
  subtitle: 'Industrial Vehicle & Equipment Tracking',
  description:
    'Professional GPS tracking devices and monitoring systems for forklifts, material handlers, and industrial vehicles in manufacturing facilities.',
  heroImage: '/assets/homepage/1.png',
  challenges: [
    {
      icon: Clock,
      title: 'Equipment Location',
      description:
        'Tracking multiple forklifts and material handlers across large manufacturing facilities.',
    },
    {
      icon: AlertCircle,
      title: 'Vehicle Monitoring',
      description:
        'Maintaining real-time visibility of industrial vehicle locations and operational status.',
    },
    {
      icon: Settings2,
      title: 'Maintenance Scheduling',
      description:
        'Managing regular maintenance schedules for industrial vehicles and equipment.',
    },
  ],
  solutions: [
    {
      icon: Factory,
      title: 'Industrial GPS Devices',
      description:
        'Heavy-duty GPS tracking hardware designed for industrial vehicles and equipment.',
    },
    {
      icon: Shield,
      title: 'Real-Time Monitoring',
      description:
        '24/7 vehicle tracking system with instant location updates and status monitoring.',
    },
    {
      icon: BarChart3,
      title: 'Digital Maintenance Logs',
      description:
        'Electronic maintenance tracking system with service reminders and history reports.',
    },
  ],
  stats: [
    {
      icon: Truck,
      value: 30,
      suffix: 'k+',
      label: 'Vehicles Tracked',
    },
    {
      icon: Timer,
      value: 99,
      suffix: '%',
      label: 'System Uptime',
    },
    {
      icon: TrendingUp,
      value: 2.2,
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
      'The GPS tracking devices have transformed how we manage our industrial vehicles. We can now track every forklift and material handler in real-time.',
    author: 'Jennifer Wong',
    role: 'Operations Manager',
    company: 'Global Manufacturing Inc.',
    image: '/assets/homepage/1.png',
  },
  products: [
    {
      title: 'Industrial Vehicle Tracker',
      image: '/assets/homepage/2.png',
      features: [
        'Rugged GPS hardware',
        'Real-time location tracking',
        'Geofencing alerts',
        'Usage monitoring',
      ],
    },
    {
      title: 'Equipment Monitor Pro',
      image: '/assets/homepage/3.png',
      features: [
        'Vehicle status tracking',
        'Maintenance scheduling',
        'Usage reports',
        'Safety compliance',
      ],
    },
    {
      title: 'Factory Fleet Manager',
      image: '/assets/fleet-management/3.png',
      features: [
        'Multi-vehicle tracking',
        'Digital maintenance logs',
        'Performance reports',
        'Mobile access',
      ],
    },
  ],
};

const Manufacturing = () => {
  return (
    // <IndustryTemplate
    // 	industry={manufacturingData}
    // 	keyFeatures={
    // 		<IndustryKeyFeatures
    // 			industryName="Manufacturing"
    // 			features={manufacturingKeyFeatures}
    // 		/>
    // 	}
    // />
    <h1>Manafacturing</h1>
  );
};

export default Manufacturing;
