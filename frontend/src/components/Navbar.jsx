import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, User, LogOut } from 'lucide-react';
import Button from './Button';

const Navbar = ({ username }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              FastLocate
            </span>
          </Link>

          {/* Nav Actions */}
          <div className="flex items-center gap-4">
            {username ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="bg-indigo-50 p-1.5 rounded-full">
                    <User className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-medium text-sm hidden sm:block">{username}</span>
                </div>
                <Link to="/">
                  <Button variant="ghost" className="!px-2 !py-2 sm:!px-4 text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:block">Logout</span>
                  </Button>
                </Link>
              </div>
            ) : (
              !isAuthPage && (
                <div className="flex items-center gap-3">
                  <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors hidden sm:block">
                    Log in
                  </Link>
                  <Link to="/signup">
                    <Button variant="primary" className="shadow-indigo-200/50">
                      Sign up
                    </Button>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
