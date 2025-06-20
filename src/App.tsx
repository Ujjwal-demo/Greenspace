import React, { useState } from 'react';
import { 
  Satellite, 
  Shield, 
  Recycle, 
  Zap, 
  Globe, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Menu,
  X,
  Rocket,
  Calendar,
  Heart,
  Star,
  Award,
  Target,
  Handshake
} from 'lucide-react';
import StarField from './components/StarField';
import RocketAnimation from './components/RocketAnimation';
import ConsultationModal from './components/ConsultationModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Star Field */}
      <StarField />
      
      {/* Rocket Animations */}
      <RocketAnimation />
      
      {/* Deep Space Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-95"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-40 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Satellite className="h-8 w-8 text-teal-400 animate-pulse" />
              <span className="text-xl font-bold">Greenspace Orbital</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-teal-400 transition-colors duration-300">Services</a>
              <a href="#technology" className="hover:text-teal-400 transition-colors duration-300">Technology</a>
              <a href="#missions" className="hover:text-teal-400 transition-colors duration-300">Missions</a>
              <a href="#join" className="hover:text-teal-400 transition-colors duration-300">Join Us</a>
              <a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="hover:text-teal-400 transition-colors" onClick={closeMenu}>Services</a>
                <a href="#technology" className="hover:text-teal-400 transition-colors" onClick={closeMenu}>Technology</a>
                <a href="#missions" className="hover:text-teal-400 transition-colors" onClick={closeMenu}>Missions</a>
                <a href="#join" className="hover:text-teal-400 transition-colors" onClick={closeMenu}>Join Us</a>
                <a href="#about" className="hover:text-teal-400 transition-colors" onClick={closeMenu}>About</a>
                <a href="#contact" className="hover:text-teal-400 transition-colors" onClick={closeMenu}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm mb-6 animate-pulse">
              <Satellite className="h-4 w-4 mr-2" />
              Advanced Space Debris Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Cleaning the
              <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Final Frontier
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary space debris removal and recycling technology. 
              Protecting orbital infrastructure and enabling sustainable space exploration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Learn More
                <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-lg hover:bg-slate-800/50 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Orbital Elements */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
      </section>

      {/* Mission Vajra Section */}
      <section id="missions" className="py-20 bg-gradient-to-r from-black via-slate-900 to-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              <Rocket className="h-4 w-4 mr-2" />
              Upcoming Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission Kartvya</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our first orbital debris collection mission, launching in 2027
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Mission Overview</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Kartvya 1.0 represents our inaugural prototype mission to demonstrate 
                  autonomous space debris collection capabilities. This groundbreaking 
                  mission will validate our core technologies in the harsh environment of space.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-400">Launch Date</span>
                    <span className="font-semibold text-teal-400">2027</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-400">Mission Type</span>
                    <span className="font-semibold">Prototype Demonstration</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-400">Target Orbit</span>
                    <span className="font-semibold">Low Earth Orbit</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-400">Duration</span>
                    <span className="font-semibold">6 Months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold mb-6 text-center">Mission Objectives</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Debris Detection</h4>
                      <p className="text-sm text-slate-300">Test advanced radar and optical systems for debris identification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Autonomous Navigation</h4>
                      <p className="text-sm text-slate-300">Validate AI-powered orbital maneuvering capabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Capture Mechanism</h4>
                      <p className="text-sm text-slate-300">Demonstrate debris collection and containment systems</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Orbital Animation */}
              <div className="absolute -top-4 -right-4 w-16 h-16">
                <div className="w-full h-full border-2 border-teal-400/30 rounded-full animate-spin">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Space Debris Crisis
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Over 34,000 pieces of space debris larger than 10cm orbit Earth at speeds 
                of 28,000 km/h. This growing cloud of junk threatens satellites, space stations, 
                and future missions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                  <span>130 million debris objects smaller than 1cm</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                  <span>900,000 objects between 1-10cm</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <span>34,000 objects larger than 10cm</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-black/80 rounded-full border-2 border-teal-400 animate-spin-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-teal-400 animate-pulse" />
                </div>
                {/* Animated debris particles */}
                <div className="absolute top-10 right-10 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-16 left-12 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-20 left-16 w-1 h-1 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive space debris management through cutting-edge technology 
              and sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <Shield className="h-12 w-12 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Active Debris Removal</h3>
              <p className="text-slate-300 leading-relaxed">
                Targeted capture and controlled deorbiting of large debris objects 
                using advanced robotic systems and precision guidance.
              </p>
            </div>

            <div className="group bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <Recycle className="h-12 w-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Space Recycling</h3>
              <p className="text-slate-300 leading-relaxed">
                Revolutionary in-orbit processing to transform space debris 
                into valuable raw materials for future space construction.
              </p>
            </div>

            <div className="group bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <Zap className="h-12 w-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collision Prevention</h3>
              <p className="text-slate-300 leading-relaxed">
                Real-time tracking and trajectory modification systems to prevent 
                collisions and protect critical space infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-r from-black via-slate-900 to-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Technology</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proprietary systems designed for the harsh environment of space, 
              delivering unprecedented precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <Satellite className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Autonomous Navigation</h3>
                  <p className="text-slate-300">
                    AI-powered systems capable of independent decision-making 
                    and precise maneuvering in zero-gravity environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Plasma Thrusters</h3>
                  <p className="text-slate-300">
                    High-efficiency propulsion systems optimized for long-duration 
                    missions and precise orbital mechanics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adaptive Capture</h3>
                  <p className="text-slate-300">
                    Multi-modal capture systems capable of securing objects 
                    of various sizes, shapes, and materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl animate-pulse"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="group">
                    <div className="text-3xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">99.7%</div>
                    <div className="text-sm text-slate-300">Success Rate</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">NA</div>
                    <div className="text-sm text-slate-300">Patents Filed</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                    <div className="text-sm text-slate-300">Operations</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
                    <div className="text-sm text-slate-300">Objects Identified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission Section */}
      <section id="join" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm mb-6">
              <Heart className="h-4 w-4 mr-2 animate-pulse" />
              Support Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Space Cleanup Revolution
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Be part of humanity's greatest environmental challenge. Together, we can preserve 
              space for future generations and enable sustainable exploration of the cosmos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-teal-500/30 transition-colors">
                  <Handshake className="h-8 w-8 text-teal-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Partner With Us</h3>
              <p className="text-slate-300 text-center mb-6 leading-relaxed">
                Collaborate on groundbreaking space technology and share in the mission 
                to clean up Earth's orbital environment.
              </p>
              <div className="text-center">
                <button className="bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20">
                  Become a Partner
                </button>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-500/30 transition-colors">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Join Our Team</h3>
              <p className="text-slate-300 text-center mb-6 leading-relaxed">
                Work with brilliant minds from around the world on cutting-edge 
                space technology that will shape humanity's future.
              </p>
              <div className="text-center">
                <button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
                  View Careers
                </button>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-500/30 transition-colors">
                  <Star className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Support Innovation</h3>
              <p className="text-slate-300 text-center mb-6 leading-relaxed">
                Invest in the future of space exploration and help fund 
                revolutionary debris removal technologies.
              </p>
              <div className="text-center">
                <button className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Mission Impact Stats */}
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-center mb-8">Our Mission Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 mx-auto mb-2" />
                  1M+
                </div>
                <div className="text-sm text-slate-300">Debris Objects Tracked</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  1
                </div>
                <div className="text-sm text-slate-300">Suuport Partner</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  <Rocket className="h-8 w-8 mx-auto mb-2" />
                  2
                </div>
                <div className="text-sm text-slate-300">Missions Planned</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  100%
                </div>
                <div className="text-sm text-slate-300">Commitment to Earth</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={openConsultation}
              className="bg-gradient-to-r from-teal-500 to-blue-500 px-12 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <Rocket className="inline-block mr-2 h-5 w-5" />
              Join Our Mission Today
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneering Sustainable Space
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Founded by aerospace engineers and environmental scientists, 
                Greenspace Orbital combines cutting-edge technology with a 
                commitment to preserving space for future generations.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our mission extends beyond cleanup – we're creating a circular 
                economy in space where waste becomes resource, enabling 
                sustainable expansion throughout the solar system.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="text-center group">
                  <Users className="h-8 w-8 text-teal-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-slate-300">Expert Team</div>
                </div>
                <div className="text-center group">
                  <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-slate-300">Countries</div>
                </div>
                <div className="text-center group">
                  <Satellite className="h-8 w-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-slate-300">Active Missions</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 text-center">Leadership Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <Users className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Ujjawal kumar</div>
                      <div className="text-sm text-slate-300">CEO & Founder</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <Zap className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Divyanhu Ranjan</div>
                      <div className="text-sm text-slate-300">CTO</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Shield className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Aarushi Gupta</div>
                      <div className="text-sm text-slate-300">Head of Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to discuss how we can help protect your space assets? 
              Our team of experts is here to answer your questions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Mail className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-slate-300 mb-4">Get in touch with our team</p>
              <a href="mailto:contact@greenspaceorbital.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                contact@greenspaceorbital.com
              </a>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-slate-300 mb-4">24/7 mission support</p>
              <a href="+91-9117203884" className="text-blue-400 hover:text-blue-300 transition-colors">
                +1 (555) ORBITAL
              </a>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <MapPin className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-slate-300 mb-4">Mission Control Center</p>
              <p className="text-purple-400">
                TT004<br />
                VIT,VELLORE
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={openConsultation}
              className="bg-gradient-to-r from-teal-500 to-blue-500 px-12 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <Calendar className="inline-block mr-2 h-5 w-5" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-800/50 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Satellite className="h-6 w-6 text-teal-400 animate-pulse" />
                <span className="text-lg font-bold">Greenspace Orbital</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pioneering sustainable space technology for a cleaner orbital environment 
                and a brighter future among the stars.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Debris Removal</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Space Recycling</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Collision Prevention</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Mission Planning</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="hover:text-teal-400 transition-colors cursor-pointer">About Us</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Careers</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">News</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Investors</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Documentation</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">White Papers</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Case Studies</div>
                <div className="hover:text-teal-400 transition-colors cursor-pointer">Support</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2025 Greenspace Orbital. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
    </div>
  );
}

export default App;