import React, { useState } from 'react';
import { MessageSquare, Palette, FileText, CheckCircle, ArrowRight, Zap, DollarSign, Clock } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    tools: '',
    dailyPrice: '',
    frustration: '',
    contactOnLaunch: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tools = [
    {
      name: 'ChatGPT',
      icon: MessageSquare,
      description: 'AI-powered conversations and content creation',
      color: 'from-green-400 to-blue-500'
    },
    {
      name: 'Canva',
      icon: Palette,
      description: 'Professional design tools and templates',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Notion',
      icon: FileText,
      description: 'All-in-one workspace for notes and collaboration',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'Pay-as-you-go',
      description: 'Only pay for what you use, when you use it'
    },
    {
      icon: Clock,
      title: 'No Commitments',
      description: 'Access tools for just one day without subscriptions'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Get immediate access to premium tools on demand'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AccessLoop</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#tools" className="text-gray-600 hover:text-gray-900 transition-colors">Tools</a>
              <a href="#waitlist" className="text-gray-600 hover:text-gray-900 transition-colors">Join Waitlist</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Daily access to 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> top tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            No subscriptions. No cards. Just pay-as-you-go.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              People often waste money paying for monthly subscriptions to tools they barely use. AccessLoop fixes that by letting you pay only when you need access—no commitment, no hidden fees.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tools like ChatGPT, Canva, and Notion—available on demand, one day at a time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </a>
            <a href="#tools" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg">
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AccessLoop?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Break free from expensive subscriptions and only pay for what you actually use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Tools, On Demand
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access the tools you need, when you need them, without the commitment of monthly subscriptions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium">Coming Soon</p>
                  <p className="text-xs text-gray-500 mt-1">Daily access starting from $2</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience pay-as-you-go access to premium tools. Help us shape the future of software access.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 text-center border border-green-200">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-lg text-gray-700 mb-4">
                You've successfully joined the AccessLoop waitlist. We'll keep you updated on our progress and notify you as soon as we launch.
              </p>
              <p className="text-gray-600">
                Get ready to revolutionize how you access premium tools!
              </p>
            </div>
          ) : (
            <form 
              name="waitlist-form" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
            >
              <input type="hidden" name="form-name" value="waitlist-form" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your country"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="tools" className="block text-sm font-semibold text-gray-700 mb-2">
                  Which tools would you like to pay-as-you-go for?
                </label>
                <textarea
                  id="tools"
                  name="tools"
                  value={formData.tools}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., ChatGPT, Canva, Notion, Adobe Creative Suite, etc."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="dailyPrice" className="block text-sm font-semibold text-gray-700 mb-2">
                  How much would you be willing to pay for 1-day access (in your currency)?
                </label>
                <input
                  type="text"
                  id="dailyPrice"
                  name="dailyPrice"
                  value={formData.dailyPrice}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., $2-5, €3-7, ₹150-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="frustration" className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your biggest frustration with current pricing models?
                </label>
                <textarea
                  id="frustration"
                  name="frustration"
                  value={formData.frustration}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your experience with subscription models..."
                />
              </div>

              <div className="mb-8">
                <label htmlFor="contactOnLaunch" className="block text-sm font-semibold text-gray-700 mb-3">
                  Would you like to be contacted when AccessLoop launches? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactOnLaunch"
                      value="Yes"
                      checked={formData.contactOnLaunch === 'Yes'}
                      onChange={handleInputChange}
                      required
                      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactOnLaunch"
                      value="No"
                      checked={formData.contactOnLaunch === 'No'}
                      onChange={handleInputChange}
                      required
                      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">AccessLoop</span>
          </div>
          <p className="text-gray-400 mb-4">
            Revolutionizing how you access premium tools. Pay only for what you use.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 AccessLoop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;