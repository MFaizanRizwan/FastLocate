import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import { UserPlus } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Dummy signup logic
    console.log('Signing up', name, email, password);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4 py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-indigo-100/50 w-full max-w-md border border-gray-100"
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an Account</h2>
            <p className="text-gray-500">Join FastLocate to find or report items.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <Input 
              label="Full Name" 
              type="text" 
              id="name" 
              placeholder="John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input 
              label="Email Address" 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input 
              label="Password" 
              type="password" 
              id="password" 
              placeholder="Create a password (min 8 chars)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            
            <p className="text-xs text-gray-500 leading-relaxed">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>

            <Button type="submit" variant="primary" className="w-full py-3">
              Create Account <UserPlus className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              Log in
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Signup;
