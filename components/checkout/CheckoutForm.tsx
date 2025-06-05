"use client";

import { useState } from 'react';
import { Truck, Store, Check } from 'lucide-react';
import { ShippingMethod } from '@/lib/types';
import CountrySelect from './CountrySelect';

interface CheckoutFormProps {
  shippingMethod: ShippingMethod;
  setShippingMethod: (method: ShippingMethod) => void;
}

export default function CheckoutForm({ 
  shippingMethod, 
  setShippingMethod 
}: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    termsAccepted: false
  });
  
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    country: false,
    termsAccepted: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = {
      fullName: !formData.fullName,
      email: !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !formData.phone,
      country: !formData.country,
      termsAccepted: !formData.termsAccepted
    };
    
    setFormErrors(newErrors);
    
    if (!Object.values(newErrors).some(Boolean)) {
      console.log('Form submitted successfully', formData);
      // Submit form logic would go here
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Method</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            type="button"
            onClick={() => setShippingMethod('delivery')}
            className={`flex-1 p-4 border rounded-lg flex items-center transition-all ${
              shippingMethod === 'delivery' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              shippingMethod === 'delivery' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              <Truck className="w-5 h-5" />
            </div>
            <div className="ml-4 text-left">
              <div className="font-medium text-gray-900">Delivery</div>
              <div className="text-sm text-gray-500">Estimated 3-5 business days</div>
            </div>
            {shippingMethod === 'delivery' && (
              <div className="ml-auto">
                <Check className="w-5 h-5 text-blue-500" />
              </div>
            )}
          </button>
          
          <button 
            type="button"
            onClick={() => setShippingMethod('pickup')}
            className={`flex-1 p-4 border rounded-lg flex items-center transition-all ${
              shippingMethod === 'pickup' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              shippingMethod === 'pickup' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              <Store className="w-5 h-5" />
            </div>
            <div className="ml-4 text-left">
              <div className="font-medium text-gray-900">Pick up</div>
              <div className="text-sm text-gray-500">Collect from store</div>
            </div>
            {shippingMethod === 'pickup' && (
              <div className="ml-auto">
                <Check className="w-5 h-5 text-blue-500" />
              </div>
            )}
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 ${
                formErrors.fullName 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
              placeholder="John Doe"
            />
            {formErrors.fullName && (
              <p className="mt-1 text-sm text-red-600">Full name is required</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 ${
                formErrors.email 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
              placeholder="john.doe@example.com"
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-600">Valid email is required</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +1
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`flex-1 block w-full rounded-none rounded-r-md py-2 px-3 ${
                  formErrors.phone 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
                placeholder="(555) 123-4567"
              />
            </div>
            {formErrors.phone && (
              <p className="mt-1 text-sm text-red-600">Phone number is required</p>
            )}
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <CountrySelect 
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              error={formErrors.country}
            />
            {formErrors.country && (
              <p className="mt-1 text-sm text-red-600">Country is required</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="New York"
              />
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="NY"
              />
            </div>
            
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="10001"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  name="termsAccepted"
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className={`h-4 w-4 rounded ${
                    formErrors.termsAccepted
                      ? 'border-red-300 text-red-600 focus:ring-red-500'
                      : 'border-gray-300 text-blue-600 focus:ring-blue-500'
                  }`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label 
                  htmlFor="termsAccepted" 
                  className={`font-medium ${
                    formErrors.termsAccepted ? 'text-red-700' : 'text-gray-700'
                  }`}
                >
                  I have read and agree to the Terms and Conditions <span className="text-red-500">*</span>
                </label>
              </div>
            </div>
            {formErrors.termsAccepted && (
              <p className="mt-1 text-sm text-red-600">You must accept the terms and conditions</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}