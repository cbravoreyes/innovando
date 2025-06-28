import React, { useState } from 'react';
import { Book, Brain, Code, Search, Menu, X, ChevronRight, Star, Users, Zap, Shield, Globe, Github } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduAI Docs
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                AI Tools
              </a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Resources
              </a>
              <a href="#documentation" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Docs
              </a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Community
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 transition-colors">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1">
                  Home
                </a>
                <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1">
                  AI Tools
                </a>
                <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1">
                  Resources
                </a>
                <a href="#documentation" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1">
                  Documentation
                </a>
                <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1">
                  Community
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg mt-2 w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Educational AI
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Documentation Hub
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive resources, tools, and documentation for integrating artificial intelligence 
              into educational environments. Learn, build, and innovate with AI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Explore Documentation
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              View on GitHub
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Guides</h3>
              <p className="text-gray-600">Step-by-step tutorials and documentation for AI implementation in education.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Code Examples</h3>
              <p className="text-gray-600">Ready-to-use code snippets and implementations for various AI educational tools.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with educators and developers building AI-powered learning solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Find What You Need
          </h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search documentation, tools, examples..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200"
            />
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI Tools & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover powerful AI tools designed specifically for educational environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Adaptive Learning Systems",
                description: "AI-powered personalized learning paths that adapt to student progress and learning styles.",
                features: ["Personalized curriculum", "Real-time adaptation", "Progress tracking"],
                color: "blue"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Automated Assessment",
                description: "Intelligent assessment tools that provide instant feedback and detailed analytics.",
                features: ["Instant grading", "Detailed analytics", "Custom rubrics"],
                color: "purple"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Content Moderation",
                description: "AI-driven content filtering and moderation for safe educational environments.",
                features: ["Smart filtering", "Safety monitoring", "Custom policies"],
                color: "green"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Language Translation",
                description: "Multi-language support for global educational accessibility and inclusion.",
                features: ["Real-time translation", "Voice support", "Cultural context"],
                color: "orange"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Recommendation Engine",
                description: "Smart content recommendations based on learning patterns and preferences.",
                features: ["Smart suggestions", "Learning analytics", "Content curation"],
                color: "pink"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Code Assistant",
                description: "AI-powered coding assistance and debugging tools for programming education.",
                features: ["Code completion", "Error detection", "Best practices"],
                color: "indigo"
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                <div className={`bg-${tool.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-${tool.color}-600`}>
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{tool.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{tool.description}</p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Documentation & Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to implement AI in educational settings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started Guide</h3>
                <p className="text-gray-600 mb-6">
                  Complete introduction to AI in education, covering basic concepts, implementation strategies, and best practices.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Beginner Level</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive API documentation with examples, authentication guides, and integration tutorials.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Advanced Level</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    View Docs <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h3>
                <p className="text-gray-600 mb-6">
                  Industry-proven methodologies for successful AI implementation in educational institutions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Intermediate Level</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Explore <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="space-y-4">
                {[
                  "Installation & Setup",
                  "Configuration Guide",
                  "Troubleshooting",
                  "FAQ",
                  "Code Examples",
                  "Video Tutorials",
                  "Community Forum",
                  "Support Center"
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-blue-600 font-medium">{link}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with educators, developers, and AI enthusiasts building the future of education
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600">Active Community Members</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Open Source Projects</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Educational Institutions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Join Discord
            </button>
            <button className="flex items-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">EduAI Docs</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering education through artificial intelligence documentation and resources.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduAI Docs. All rights reserved. Built with passion for educational innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;