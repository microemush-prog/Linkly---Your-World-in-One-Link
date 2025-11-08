
import React from 'react';
import type { UserProfile } from '../types';

interface HeaderProps {
    profile: UserProfile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
    return (
        <header className="flex flex-col items-center text-center">
            <img 
                src={profile.avatarUrl} 
                alt={profile.name} 
                className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
            />
            <h1 className="text-2xl font-bold mt-4 text-gray-900">{profile.name}</h1>
            <p className="text-md text-purple-600 font-medium">{profile.handle}</p>
            <p className="mt-2 max-w-md text-gray-600">{profile.bio}</p>
        </header>
    );
};

export default Header;
