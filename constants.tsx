
import React from 'react';
import type { UserProfile, Link, SocialLink, AnalyticsData } from './types';

// Icons
const StoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);
const NewsletterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PortfolioIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const BookingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3-2.5 4.5-2.5 4.5"></path><path d="M2.5 17a24.12 24.12 0 0 0 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3-2.5 4.5-2.5 4.5"></path><path d="M12 4v16"></path><path d="M12 4c-3.33 1-5 2.67-5 4s1.67 3 5 4 5-1.67 5-4-1.67-3-5-4Z"></path><path d="M12 20c-3.33-1-5-2.67-5-4s1.67-3 5-4 5 1.67 5 4-1.67 3-5 4Z"></path></svg>
);
const ClicksIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>;
const CTRIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const TrafficIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>;
const GrowthIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;


export const USER_PROFILE: UserProfile = {
  name: "Elara Vance",
  handle: "@elara.vance",
  bio: "Designer, coach & creator. Weaving stories through pixels and purpose. Welcome to my world.",
  avatarUrl: "https://picsum.photos/id/1027/200/200",
};

export const LINKS: Link[] = [
  { id: 1, title: "My Online Store", url: "#", icon: <StoreIcon /> },
  { id: 2, title: "Book a 1:1 Coaching Session", url: "#", icon: <BookingIcon /> },
  { id: 3, title: "The Creator's Weekly Newsletter", url: "#", icon: <NewsletterIcon /> },
  { id: 4, title: "Latest YouTube Video", url: "#", icon: <YoutubeIcon /> },
  { id: 5, title: "View My Design Portfolio", url: "#", icon: <PortfolioIcon /> },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 1, platform: "Instagram", url: "#", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314 1.64 20.644 1.23 19.86.928c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.488.96-.91 1.381-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.488-1.379-.91-.42-.419-.69-.824-.91-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.859 0-3.211.016-3.586.061-4.859.061-1.17.255-1.814.42-2.234.21-.57.479-.96.91-1.381.419-.419.81-.689 1.379-.91.42-.165 1.065-.359 2.235-.42.92-.041 1.25-.054 3.34-.059zm0 5.48c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5-2.462-5.5-5.5-5.5zm0 8.842c-1.838 0-3.342-1.504-3.342-3.342s1.504-3.342 3.342-3.342 3.342 1.504 3.342 3.342-1.504 3.342-3.342 3.342zM18.406 4.156c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875S19.44 4.156 18.406 4.156z"/></svg> },
  { id: 2, platform: "TikTok", url: "#", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.77-1.77-2.69-4.2-2.51-6.64.17-2.29 1.61-4.48 3.66-5.95 2.05-1.48 4.66-1.95 6.98-1.57v4.03c-1.44.13-2.87.5-4.12 1.17-.61.33-1.18.73-1.68 1.19-.38.35-.63.78-.8 1.25-.21.57-.22 1.21-.23 1.85-.02 1.63.01 3.26.01 4.88.01.09.02.17.03.25.03.23.06.47.11.7.19.82.59 1.61 1.24 2.22.65.61 1.48 1.01 2.39 1.16.8.12 1.6.09 2.38-.06.77-.14 1.5-.44 2.12-.87.65-.45 1.18-1.01 1.58-1.65.37-.59.62-1.25.74-1.94.03-.18.05-.37.06-.56.02-1.08.01-2.17.01-3.25V4.62c-.01-.1-.01-.2-.02-.3-.02-.33-.06-.67-.14-1-.13-.56-.35-1.1-.64-1.61-.29-.5-.65-.97-1.08-1.36-.32-.28-.65-.54-.99-.78-.01-.01-.02-.02-.03-.03v.01z"/></svg> },
  { id: 3, platform: "X", url: "#", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> },
  { id: 4, platform: "Spotify", url: "#", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>Spotify</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.78 17.394c-.2.315-.573.417-.887.218-2.61-1.598-5.895-1.95-10.334-1.06-.34.07-.666-.164-.735-.504s.164-.666.504-.735c4.823-.97 8.49- .57 11.38 1.19.314.19.416.573.217.886zm.44-3.11c-.243.38-.7.493-1.08.25-2.92-1.8-7.348-2.32-12.02-.915-.417.09-.83-.175-.92-.59-.09-.417.175-.83.59-.92 5.11-1.53 9.947-.945 13.245 1.11.38.243.492.7.25 1.08zm.135-3.234C15.21 8.12 9.724 7.886 5.65 9.07c-.494.148-.99-.12-1.137-.614-.148-.494.12-.99.614-1.137C9.91 5.95 15.94 6.22 20.493 8.95c.44.264.592.83.328 1.27-.264.44-.83.592-1.27.328z"/></svg> },
];

export const ANALYTICS_DATA: AnalyticsData[] = [
    { label: "Total Clicks", value: "1.2K", change: "+14%", icon: <ClicksIcon /> },
    { label: "Click-Through Rate", value: "58%", change: "+2.3%", icon: <CTRIcon /> },
    { label: "Top Traffic Source", value: "Instagram", change: "72%", icon: <TrafficIcon /> },
    { label: "Follower Growth", value: "+257", change: "this week", icon: <GrowthIcon /> },
]

