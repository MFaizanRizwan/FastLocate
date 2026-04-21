import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md',
    secondary: 'bg-white hover:bg-gray-50 text-indigo-600 border border-gray-200 shadow-sm',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    ghost: 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
