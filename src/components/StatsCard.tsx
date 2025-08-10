import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: typeof LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  index: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  icon: Icon,
  value,
  suffix = '',
  prefix = '',
  label,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-3xl transform transition-transform duration-300 group-hover:scale-105" />
      
      <div className="relative h-full bg-white/50 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 mb-6">
          <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
            <Icon className="w-7 h-7 text-[#678FCA]" />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <AnimatedCounter
            value={value}
            suffix={suffix}
            prefix={prefix}
          />
          
          <p className="mt-3 text-gray-600 text-lg font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};