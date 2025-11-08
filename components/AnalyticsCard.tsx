
import React from 'react';
import type { AnalyticsData } from '../types';

interface AnalyticsCardProps {
    data: AnalyticsData;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ data }) => {
    return (
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-md border border-gray-200/50 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between text-gray-500">
                <p className="text-sm font-medium">{data.label}</p>
                {data.icon}
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-800 mt-2">{data.value}</p>
                <p className={`text-sm font-medium ${data.change.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>
                    {data.change}
                </p>
            </div>
        </div>
    );
};

export default AnalyticsCard;
