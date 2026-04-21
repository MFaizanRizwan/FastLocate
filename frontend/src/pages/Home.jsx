import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { Search, MapPin, Clock, Plus } from 'lucide-react';

const DUMMY_ITEMS = [
  { id: 1, type: 'Lost', title: 'Black iPhone 13', location: 'Central Park', date: '2 hours ago', color: 'bg-red-100 text-red-700' },
  { id: 2, type: 'Found', title: 'Car Keys (Honda)', location: 'Starbucks on 5th Ave', date: '5 hours ago', color: 'bg-emerald-100 text-emerald-700' },
  { id: 3, type: 'Lost', title: 'Brown Leather Wallet', location: 'Subway Station', date: '1 day ago', color: 'bg-red-100 text-red-700' },
  { id: 4, type: 'Found', title: 'Golden Retriever', location: 'Downtown Area', date: '2 days ago', color: 'bg-emerald-100 text-emerald-700' },
];

const Home = () => {
  // Simulating logged in user
  const currentUsername = "John Doe";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar username={currentUsername} />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, {currentUsername}. Here is the latest activity.</p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="secondary" className="shadow-sm">
              <Search className="w-4 h-4 mr-2" /> Search
            </Button>
            <Button variant="primary" className="shadow-sm">
              <Plus className="w-4 h-4 mr-2" /> Report Item
            </Button>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-500">Your Reports</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">2</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-500">Items Found (Community)</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">1,204</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
          </motion.div>
        </div>

        {/* Recent Items List */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {DUMMY_ITEMS.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full mt-1 ${item.color}`}>
                    {item.type}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 mr-1" /> {item.location}
                      <span className="mx-2">•</span>
                      <Clock className="w-3.5 h-3.5 mr-1" /> {item.date}
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="hidden sm:flex text-sm !py-1.5 !px-3">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all reports
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
