import React, { FC } from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'; 
  label: string;
  onClick?: () => void; 
}

export const CommonButton: FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full md:w-3/4 bg-oranish_bg font-sans text-md text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {label}
    </button>
  );
};
