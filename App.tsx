
import React, { useState, useEffect } from 'react';
import { USER_PROFILE, LINKS, SOCIAL_LINKS, ANALYTICS_DATA } from './constants';
import Header from './components/Header';
import LinkButton from './components/LinkButton';
import SocialIcons from './components/SocialIcons';
import AnalyticsCard from './components/AnalyticsCard';

const App: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 antialiased relative overflow-hidden">
             <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-50 blur-2xl"></div>
             <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-teal-200 rounded-full opacity-50 blur-2xl"></div>

            <main className="relative max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center z-10">
                <div className={`w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <Header profile={USER_PROFILE} />
                </div>
                
                <section className="w-full mt-8 space-y-4">
                    {LINKS.map((link, index) => (
                        <div
                            key={link.id}
                            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: `${150 * (index + 1)}ms` }}
                        >
                            <LinkButton link={link} />
                        </div>
                    ))}
                </section>

                <section className={`w-full mt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-700">Smart Insights</h2>
                        <p className="text-gray-500 mt-1">Know what your audience actually cares about.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {ANALYTICS_DATA.map((stat, index) => (
                           <AnalyticsCard key={index} data={stat} />
                       ))}
                    </div>
                </section>

                <div className={`w-full mt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
                    <SocialIcons links={SOCIAL_LINKS} />
                </div>

                <footer className={`mt-16 text-center text-gray-500 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                    <a href="#" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                        Create your own Linkly
                    </a>
                    <p className="text-sm mt-2">Your Entire World. One Beautiful Link.</p>
                </footer>
            </main>
        </div>
    );
};

export default App;
