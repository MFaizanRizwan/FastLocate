import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Search, PlusCircle, ShieldCheck } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden -z-10">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/40 blur-3xl opacity-70" />
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-violet-200/40 blur-3xl opacity-70" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
              Reunite with your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Lost Items
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              A community-driven platform to report found items and search for lost belongings. Simple, secure, and fast.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-indigo-600/20">
                  <Search className="w-5 h-5 mr-2" />
                  Find an Item
                </Button>
              </Link>
              <Link to="/signup" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Report Found
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-indigo-100 p-4 rounded-2xl mb-6">
                  <Search className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Search</h3>
                <p className="text-gray-600">Browse through reported found items effortlessly with our intuitive search system.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="bg-violet-100 p-4 rounded-2xl mb-6">
                  <PlusCircle className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Reporting</h3>
                <p className="text-gray-600">Found something? Post it securely within seconds and help someone out.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="bg-emerald-100 p-4 rounded-2xl mb-6">
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Matching</h3>
                <p className="text-gray-600">We prioritize privacy and ensure a secure process to return items to their rightful owners.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
