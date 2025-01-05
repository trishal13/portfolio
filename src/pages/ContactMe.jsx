import React from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { socialNetworks } from '../utils/data';
import "./ContactMe.css";

// Custom X (Twitter) icon component
const XIcon = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ContactMe = () => {
  const icons = [
    { Icon: Mail, color: '#ffd700', label: 'Email', gradient: '#daa520', url: socialNetworks.find(n => n.platform.toLowerCase() === 'email')?.url }, // Brighter gold
    { Icon: Phone, color: '#4CAF50', label: 'Mobile', gradient: '#2E7D32', url: socialNetworks.find(n => n.platform.toLowerCase() === 'mobile')?.url }, // Brighter green
    { Icon: XIcon, color: '#424242', label: 'Twitter', gradient: '#212121', url: socialNetworks.find(n => n.platform.toLowerCase() === 'twitter')?.url }, // Slightly lighter black
    { Icon: Linkedin, color: '#2196F3', label: 'LinkedIn', gradient: '#1976D2', url: socialNetworks.find(n => n.platform.toLowerCase() === 'linkedin')?.url }, // Brighter blue
    { Icon: Instagram, color: '#E91E63', label: 'Instagram', gradient: '#C2185B', url: socialNetworks.find(n => n.platform.toLowerCase() === 'instagram')?.url }, // Brighter pink
  ];

  return (
    <div className="bg-transparent text-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Connect with Me</h1>
      
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {icons.map(({ Icon, color, gradient, label, url }) => (
          <Link
            key={label}
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group peer relative w-16 h-16 transform transition-transform duration-300 hover:scale-125"
          >
            {/* Floating effect particles */}
            <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-white/30 animate-ping" /> {/* Increased particle opacity */}
              <div className="absolute bottom-0 right-1/4 w-1 h-1 rounded-full bg-white/30 animate-ping [animation-delay:200ms]" />
              <div className="absolute top-1/2 right-0 w-1 h-1 rounded-full bg-white/30 animate-ping [animation-delay:400ms]" />
            </div>

            {/* Bottom layer - shadow */}
            <div className="absolute inset-0 rounded-2xl bg-white/20 transform translate-y-4 blur-md 
                          group-hover:translate-y-6 group-hover:blur-lg transition-all duration-300" /> {/* Increased shadow opacity */}
            
            {/* Middle layer - side panels */}
            <div className="absolute left-0 top-1/2 w-1 h-8 -translate-y-1/2 -translate-x-1 group-hover:h-10 transition-all duration-300 opacity-90"
                 style={{ backgroundColor: color, transform: 'rotateY(-90deg)' }} /> {/* Increased panel opacity */}
            <div className="absolute right-0 top-1/2 w-1 h-8 -translate-y-1/2 translate-x-1 group-hover:h-10 transition-all duration-300 opacity-90"
                 style={{ backgroundColor: color, transform: 'rotateY(90deg)' }} />
            <div className="absolute bottom-0 left-1/2 w-8 h-1 -translate-x-1/2 translate-y-1 group-hover:w-10 transition-all duration-300 opacity-90"
                 style={{ backgroundColor: color, transform: 'rotateX(90deg)' }} />
            
            {/* Top layer - main icon container */}
            <div 
              className="absolute inset-0 rounded-2xl shadow-lg transform transition-all duration-300 
                         group-hover:-translate-y-4 group-hover:scale-110"
              style={{ 
                background: `linear-gradient(135deg, ${color}, ${gradient})`,
                transform: 'perspective(1000px) rotateX(10deg) rotateY(0deg)',
                opacity: 0.95 // Increased main container opacity
              }}
            >
              {/* Icon wrapper */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <Icon 
                  size={24}
                  className="text-white transform transition-all duration-300 
                             group-hover:scale-110 group-hover:rotate-12" 
                />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-500
                              bg-gradient-to-r from-transparent via-white/40 to-transparent
                              -translate-x-full group-hover:translate-x-full" 
                     style={{ transitionProperty: 'opacity, transform' }}
                />
              </div>
            </div>
            
            {/* Click effect */}
            <div className="absolute inset-0 rounded-2xl bg-white/0 group-active:bg-white/20 
                           transform transition-all duration-75" />

            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 text-sm text-gray-300 whitespace-nowrap"> {/* Lighter tooltip text */}
              {label}
            </div>
          </Link>
        ))}
      </div>
      {/* Divider */}
      <div className="flex items-center justify-center my-12">
        <div className="flex-grow h-px bg-red-500/60 max-w-sm"></div>
        <span className="px-4 text-gray-400 italic" style={{ fontFamily: 'Consolas, monospace' }}>Or send me a message</span>
        <div className="flex-grow h-px bg-red-500/60 max-w-sm"></div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMe;