
import React from 'react';
import type { SocialLink } from '../types';

interface SocialIconsProps {
    links: SocialLink[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
    return (
        <div className="flex justify-center space-x-6">
            {links.map((link) => (
                <a 
                    key={link.id} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="text-gray-500 hover:text-purple-600 hover:scale-110 transition-all duration-300"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
