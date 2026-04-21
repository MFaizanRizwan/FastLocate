import React from 'react';

const Input = ({ label, id, error, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-1.5 focus-within:text-indigo-600">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 transition-colors">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-2.5 rounded-lg border bg-white
          ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'}
          outline-none focus:ring-4 transition-all duration-200 text-gray-900 shadow-sm`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
