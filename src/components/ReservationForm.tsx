import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredTools: [],
    dailyPrice: '',
    prepayWillingness: '',
    cryptoUsage: '',
    biggestStruggle: '',
    contactInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toolOptions = [
    'ChatGPT',
    'Canva',
    'Netflix',
    'MidJourney',
    'Notion',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToolChange = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      preferredTools: prev.preferredTools.includes(tool)
        ? prev.preferredTools.filter(t => t !== tool)
        : [...prev.preferredTools, tool]
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          preferredTools: [],
          dailyPrice: '',
          prepayWillingness: '',
          cryptoUsage: '',
          biggestStruggle: '',
          contactInfo: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.errors?.join(', ') || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We've received your reservation request and will be in touch soon with access details.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reserve Your Access
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your needs and we'll set up your premium tool access
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
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
                placeholder="your@email.com"
              />
            </div>

            {/* Preferred Tools */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Preferred Tools * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {toolOptions.map((tool) => (
                  <label
                    key={tool}
                    className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all duration-200 ${
                      formData.preferredTools.includes(tool)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.preferredTools.includes(tool)}
                      onChange={() => handleToolChange(tool)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{tool}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Daily Price */}
            <div>
              <label htmlFor="dailyPrice" className="block text-sm font-semibold text-gray-700 mb-3">
                Comfortable Daily Price *
              </label>
              <input
                type="text"
                id="dailyPrice"
                name="dailyPrice"
                value={formData.dailyPrice}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g., $5-10 per day"
              />
            </div>

            {/* Prepay Willingness */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Would you pre-pay to reserve access? *
              </label>
              <div className="space-y-2">
                {[
                  { value: 'yes', label: 'Yes, I will pay' },
                  { value: 'maybe', label: 'Maybe later' },
                  { value: 'no', label: 'No' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all duration-200 ${
                      formData.prepayWillingness === option.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="prepayWillingness"
                      value={option.value}
                      checked={formData.prepayWillingness === option.value}
                      onChange={(e) => handleRadioChange('prepayWillingness', e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Crypto Usage */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Do you use crypto? *
              </label>
              <div className="space-y-2">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                  { value: 'learn', label: 'I want to learn' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all duration-200 ${
                      formData.cryptoUsage === option.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="cryptoUsage"
                      value={option.value}
                      checked={formData.cryptoUsage === option.value}
                      onChange={(e) => handleRadioChange('cryptoUsage', e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Biggest Struggle */}
            <div>
              <label htmlFor="biggestStruggle" className="block text-sm font-semibold text-gray-700 mb-3">
                What is your biggest struggle accessing premium tools? *
              </label>
              <textarea
                id="biggestStruggle"
                name="biggestStruggle"
                value={formData.biggestStruggle}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Tell us about your challenges with premium tool subscriptions..."
              />
            </div>

            {/* Contact Info */}
            <div>
              <label htmlFor="contactInfo" className="block text-sm font-semibold text-gray-700 mb-3">
                Preferred Contact (WhatsApp or Telegram) - Optional
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="@username or phone number"
              />
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700">{errorMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Reserve My Access
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}