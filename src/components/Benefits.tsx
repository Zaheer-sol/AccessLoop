import React from 'react';
import { Clock, CreditCard, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Reserve Access Instantly",
      description: "Get immediate access to premium tools without waiting for approval or setup delays."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "No Subscription Commitment",
      description: "Skip the monthly fees and long-term contracts. Use what you need, when you need it."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Pay Only When You Need",
      description: "Smart daily pricing means you're never paying for tools you're not actively using."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Daily Access?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the freedom of premium tools without the burden of monthly subscriptions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}