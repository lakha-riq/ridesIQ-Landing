'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
import {
  Truck,
  Camera,
  Briefcase,
  Clock,
  Car,
  Construction,
  Box,
  MapPin,
  BarChart3,
  DollarSign,
  Video,
  HelpCircle,
  ShieldCheck,
  ScanLine,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { z } from 'zod';
import { Country, State } from 'country-state-city';

const countryOptions = Country.getAllCountries().map((country) => ({
  value: country.isoCode,
  label: country.name,
}));

const formSchema = z.object({
  interest: z.string().min(1, 'Please select an interest'),
  vehicleCount: z.string().min(1, 'Please select vehicle count'),
  trackingType: z
    .array(z.string())
    .min(1, 'Please select at least one tracking type'),
  features: z.array(z.string()).min(1, 'Please select at least one feature'),
  country: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable()
    .refine((val) => val !== null, 'Please select a country'),
  region: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable()
    .refine((val) => val !== null, 'Please select a region'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(1, 'Phone number is required'),
  existingCustomer: z.string().min(1, 'Please select an option'),
});

type FormData = z.infer<typeof formSchema>;

const initialFormData: FormData = {
  interest: '',
  vehicleCount: '',
  trackingType: [],
  features: [],
  country: {
    label: '',
    value: '',
  },
  region: {
    label: '',
    value: '',
  },
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  existingCustomer: '',
};

const interestOptions = [
  { icon: Truck, title: 'Vehicle Tracking', value: 'vehicle-tracking' },
  { icon: Camera, title: 'Commercial Dash Cams', value: 'dash-cams' },
  {
    icon: ShieldCheck,
    title: 'Stolen Vehicle Recovery (SVR)',
    value: 'stolen-vehicle-recovery',
  },
  { icon: ScanLine, title: 'Toll Automation', value: 'toll-automation' },
];

const vehicleCountOptions = [
  '1 - 50',
  '51 - 100',
  '101 - 250',
  '251 - 500',
  '501 +',
];

const trackingTypeOptions = [
  { icon: Truck, title: 'Vans / Trucks', value: 'vans-trucks' },
  { icon: Truck, title: 'Heavy Duty Trucks / Semis', value: 'heavy-duty' },
  { icon: Car, title: 'Cars / Automobiles', value: 'cars' },
  { icon: Car, title: 'Motorcycles', value: 'motorcycles' },
  {
    icon: Construction,
    title: 'Construction Machinery',
    value: 'construction',
  },
  { icon: Box, title: 'Trailers', value: 'trailers' },
  { icon: Box, title: 'Non-Powered Assets', value: 'non-powered' },
];

const featureOptions = [
  {
    icon: MapPin,
    title: 'Real-time location tracking',
    value: 'location-tracking',
  },
  { icon: BarChart3, title: 'Reporting', value: 'reporting' },
  {
    icon: Truck,
    title: 'Driver behavior analytics',
    value: 'driver-analytics',
  },
  { icon: MapPin, title: 'Proof of attendance', value: 'attendance' },
  { icon: Video, title: 'Dash cams', value: 'dash-cams' },
  { icon: HelpCircle, title: "I don't know", value: 'unknown' },
];

export const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = React.useRef<HTMLDivElement>(null);

  const updateFormData = (
    field: keyof FormData,
    value: FormData[keyof FormData]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (stepNumber) {
      case 1:
        if (!formData.interest) {
          newErrors.interest = 'Please select an interest';
        }
        break;
      case 2:
        if (!formData.vehicleCount) {
          newErrors.vehicleCount = 'Please select vehicle count';
        }
        break;
      case 3:
        if (formData.trackingType.length === 0) {
          newErrors.trackingType = 'Please select at least one tracking type';
        }
        break;
      case 4:
        if (formData.features.length === 0) {
          newErrors.features = 'Please select at least one feature';
        }
        break;
      case 5:
        if (!formData.country) {
          newErrors.country = 'Please select a country';
        }
        if (!formData.region) {
          newErrors.region = 'Please select a region';
        }
        break;
      case 6:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.companyName)
          newErrors.companyName = 'Company name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = 'Please enter a valid email';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.existingCustomer)
          newErrors.existingCustomer = 'Please select an option';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const scrollToTop = () => {
    if (formRef.current) {
      const formRect = formRef.current.getBoundingClientRect();
      const formTop = formRect.top + window.pageYOffset;
      const navigationOffset = 100; // Adjust this value based on your navigation height

      window.scrollTo({
        top: formTop - navigationOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      setTimeout(() => scrollToTop(), 100);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
    setTimeout(() => scrollToTop(), 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;

    if (formSchema.safeParse(formData).success) {
      console.log(formData);
      try {
        const res = await fetch('/api/mail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setIsSuccess(true);
          setFormData(initialFormData);
          setStep(1);
          setErrors({});
        } else {
          console.error('Failed to send quote request');
        }
      } catch (error) {
        console.error('Error sending quote request:', error);
      }
    }
  };

  const renderNavigationButtons = () => (
    <div className="flex justify-between items-center mt-8">
      {step >= 2 ? (
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#678FCA] hover:bg-[#678FCA]/10 px-6 py-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      ) : (
        <div />
      )}

      {step < 6 ? (
        <button
          onClick={handleNext}
          className="flex items-center gap-2 bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all"
        >
          Submit Inquiry
        </button>
      )}
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              What are you interested in today?{' '}
              <span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {interestOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateFormData('interest', option.value);
                  }}
                  className={`p-6 w-full rounded-xl border-2 transition-all duration-300 flex items-center gap-4 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.interest === option.value
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <option.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#678FCA] flex-shrink-0" />
                  <span className="text-base sm:text-lg font-medium text-start">
                    {option.title}
                  </span>
                </button>
              ))}
            </div>
            {errors.interest && (
              <p className="text-red-500 text-sm mt-2">{errors.interest}</p>
            )}
            {renderNavigationButtons()}
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              How many vehicles do you need to track?{' '}
              <span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {vehicleCountOptions.map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    updateFormData('vehicleCount', count);
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.vehicleCount === count
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <span className="text-lg font-medium">{count}</span>
                </button>
              ))}
            </div>
            {errors.vehicleCount && (
              <p className="text-red-500 text-sm mt-2">{errors.vehicleCount}</p>
            )}
            {renderNavigationButtons()}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              What do you need to track? <span className="text-red-500">*</span>
            </h3>
            <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
            <div className="grid grid-cols-1 gap-4">
              {trackingTypeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    const newTypes = formData.trackingType.includes(
                      option.value
                    )
                      ? formData.trackingType.filter((t) => t !== option.value)
                      : [...formData.trackingType, option.value];
                    updateFormData('trackingType', newTypes);
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.trackingType.includes(option.value)
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <option.icon className="w-8 h-8 text-[#678FCA] flex-shrink-0" />
                  <span className="text-lg font-medium text-left">
                    {option.title}
                  </span>
                  {formData.trackingType.includes(option.value) && (
                    <div className="ml-auto w-6 h-6 bg-[#678FCA] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            {errors.trackingType && (
              <p className="text-red-500 text-sm mt-2">{errors.trackingType}</p>
            )}
            {renderNavigationButtons()}
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              What features do you need? <span className="text-red-500">*</span>
            </h3>
            <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
            <div className="grid grid-cols-1 gap-4">
              {featureOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    const newFeatures = formData.features.includes(option.value)
                      ? formData.features.filter((f) => f !== option.value)
                      : [...formData.features, option.value];
                    updateFormData('features', newFeatures);
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.features.includes(option.value)
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <option.icon className="w-8 h-8 text-[#678FCA] flex-shrink-0" />
                  <span className="text-lg font-medium text-left">
                    {option.title}
                  </span>
                  {formData.features.includes(option.value) && (
                    <div className="ml-auto w-6 h-6 bg-[#678FCA] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            {errors.features && (
              <p className="text-red-500 text-sm mt-2">{errors.features}</p>
            )}
            {renderNavigationButtons()}
          </motion.div>
        );

      case 5:
        const selectedCountryCode = formData.country?.value || '';
        const stateOptions = State.getStatesOfCountry(selectedCountryCode).map(
          (s) => ({
            label: s.name,
            value: s.isoCode,
          })
        );

        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Location Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <Select
                options={countryOptions}
                value={formData.country}
                onChange={(option) => {
                  updateFormData('country', option || '');
                  updateFormData('region', '');
                }}
                placeholder="Select a country..."
                className={errors.country ? 'border-red-500' : ''}
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State / Region <span className="text-red-500">*</span>
              </label>
              <Select
                options={stateOptions}
                value={formData.region}
                onChange={(option) => {
                  updateFormData('region', option || '');
                }}
                placeholder="Select a region..."
                isDisabled={!selectedCountryCode}
                className={errors.region ? 'border-red-500' : ''}
              />
              {errors.region && (
                <p className="text-red-500 text-sm mt-1">{errors.region}</p>
              )}
            </div>
            {renderNavigationButtons()}
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent ${
                  errors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Are you an existing customer?{' '}
                <span className="text-red-500">*</span>
              </label>
              <Select
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
                value={
                  formData.existingCustomer
                    ? {
                        value: formData.existingCustomer,
                        label:
                          formData.existingCustomer === 'yes' ? 'Yes' : 'No',
                      }
                    : null
                }
                onChange={(option) =>
                  updateFormData('existingCustomer', option?.value || '')
                }
                className={`text-base ${
                  errors.existingCustomer ? 'border-red-500' : ''
                }`}
                placeholder="Select an option..."
              />
              {errors.existingCustomer && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.existingCustomer}
                </p>
              )}
            </div>
            {renderNavigationButtons()}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={formRef}
      className="bg-white w-full max-w-4xl mx-auto rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Get a Quote</h2>
          <div className="text-sm text-gray-600">Step {step} of 6</div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#678FCA] transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline ml-2">
            Form submitted successfully.
          </span>
          <button
            onClick={() => setIsSuccess(false)}
            className="absolute top-0 right-0 px-4 py-3"
          >
            <X className="h-5 w-5 text-green-700" />
          </button>
        </motion.div>
      )}
    </div>
  );
};
