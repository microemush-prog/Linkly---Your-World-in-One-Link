
import React from 'react';
import type { Link } from '../types';

interface LinkButtonProps {
    link: Link;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
    return (
        <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-full p-4 bg-white text-gray-700 font-semibold rounded-lg shadow-md border border-gray-200 hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
            {link.icon && <span className="mr-3 text-gray-500 group-hover:text-purple-600 transition-colors">{link.icon}</span>}
            <span className="flex-grow text-center">{link.title}</span>
        </a>
    );
};

export default LinkButton;
