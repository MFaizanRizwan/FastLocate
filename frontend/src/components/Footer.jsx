import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand section */}
          <div className="col-span-1 md:col-span-1 border-b border-gray-100 md:border-none pb-8 md:pb-0">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-indigo-600 p-2 rounded-lg group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                FastLocate
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              A community-driven platform to help reunite people with their lost belongings quickly and securely.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-indigo-600 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links sections */}
          <div className="md:ml-auto">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/home" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Search Items</Link></li>
              <li><Link to="/home" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Report Found Item</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">How it works</Link></li>
            </ul>
          </div>

          <div className="md:ml-auto">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="md:ml-auto">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-indigo-600" /> support@fastlocate.com
              </li>
              <li className="text-sm text-gray-600">
                123 Innovation Drive<br />
                Tech City, TC 10101
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FastLocate. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed with care for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
