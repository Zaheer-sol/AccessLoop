import React from 'react';
import { Bot, Palette, Play } from 'lucide-react';

export function FeaturedTools() {
  const tools = [
    {
      name: "ChatGPT Pro",
      description: "Advanced AI conversations with enhanced capabilities and faster response times",
      icon: <Bot className="h-12 w-12" />,
      gradient: "from-green-400 to-emerald-600",
      features: ["Priority access", "Advanced reasoning", "Latest model"]
    },
    {
      name: "Canva Pro",
      description: "Professional design tools with premium templates and advanced features",
      icon: <Palette className="h-12 w-12" />,
      gradient: "from-purple-400 to-pink-600",
      features: ["Premium templates", "Brand kit", "Advanced editing"]
    },
    {
      name: "Netflix Standard",
      description: "Stream unlimited movies and shows in HD quality on multiple devices",
      icon: <Play className="h-12 w-12" />,
      gradient: "from-red-400 to-red-600",
      features: ["HD streaming", "Multiple devices", "Offline downloads"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top Premium Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access the most popular premium tools without the hefty monthly subscriptions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tool.gradient} text-white mb-6 shadow-lg`}>
                  {tool.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tool.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.gradient}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}