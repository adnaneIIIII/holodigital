"use client";

import { Lock } from 'lucide-react';
import CartItemComponent from '@/components/checkout/cartitem';
import { formatCurrency } from '@/lib/utils';
import { CartItem } from '@/lib/types';

interface OrderSummaryProps {
  cartItems: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  discountCode: string;
  setDiscountCode: (code: string) => void;
  applyDiscount: () => void;
  discountApplied: boolean;
}

export default function OrderSummary({
  cartItems,
  subtotal,
  shipping,
  discount,
  total,
  discountCode,
  setDiscountCode,
  applyDiscount,
  discountApplied
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Review your cart</h2>
      
      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} item={item} />
        ))}
      </div>
      
      {/* Discount Code */}
      <div className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Discount code"
            className={`flex-1 block rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              discountApplied ? 'bg-green-50 border-green-300' : ''
            }`}
          />
          <button
            type="button"
            onClick={applyDiscount}
            className="rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply
          </button>
        </div>
        {discountApplied && (
          <p className="mt-1 text-sm text-green-600">Discount code applied!</p>
        )}
        {discountCode && !discountApplied && (
          <p className="mt-1 text-sm text-red-600">Invalid discount code.</p>
        )}
      </div>
      
      {/* Cost Summary */}
      <div className="space-y-2 py-4 border-t border-gray-200">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Subtotal</span>
          <span className="text-sm font-medium">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Shipping</span>
          <span className="text-sm font-medium">{formatCurrency(shipping)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span className="text-sm">Discount</span>
            <span className="text-sm font-medium">-{formatCurrency(discount)}</span>
          </div>
        )}
        <div className="flex justify-between pt-3 border-t border-gray-200">
          <span className="text-base font-semibold">Total</span>
          <span className="text-lg font-bold">{formatCurrency(total)}</span>
        </div>
      </div>
      
      {/* Pay Now Button */}
      <button
        type="submit"
        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Pay Now
      </button>
      
      {/* Security Message */}
      <div className="mt-4 flex items-center justify-center">
        <Lock className="w-4 h-4 text-gray-500 mr-2" />
        <span className="text-xs font-medium text-gray-600">Secure Checkout - SSL Encrypted</span>
      </div>
      <p className="text-xs text-gray-500 text-center mt-1">
        Your payment information is secure and protected
      </p>
    </div>
  );
}