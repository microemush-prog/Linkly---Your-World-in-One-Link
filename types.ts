// Fix: Changed to a type-only import for ReactElement to resolve JSX namespace issues.
import type { ReactElement } from 'react';

export interface UserProfile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
}

export interface Link {
  id: number;
  title: string;
  url: string;
  // Fix: Replaced JSX.Element with ReactElement to fix "Cannot find namespace 'JSX'" error.
  icon?: ReactElement;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  // Fix: Replaced JSX.Element with ReactElement to fix "Cannot find namespace 'JSX'" error.
  icon: ReactElement;
}

export interface AnalyticsData {
    label: string;
    value: string;
    change: string;
    // Fix: Replaced JSX.Element with ReactElement to fix "Cannot find namespace 'JSX'" error.
    icon: ReactElement;
}
