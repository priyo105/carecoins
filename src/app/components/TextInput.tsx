import React, { FC } from 'react';

interface InputProps {
    label: string;
    type: 'text' | 'email' | 'password' | 'number';
    name: string;
    required?: boolean;
    placeholder?: string;
}

export const TextInput: FC<InputProps> = ({ label, type, name, required, placeholder }) => {
    return (
        <div>
            <label className="block text-sm font-sans font-bold text-text_basic">
                {label} {required && <span className="text-oranish_bg font-bold">*</span>}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className="w-full md:w-3/4 mt-5 px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-oranish focus:border-oranish_bg"
            />
        </div>
    );
};
