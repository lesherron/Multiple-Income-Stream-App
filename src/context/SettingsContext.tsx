import React, { createContext, useContext, useState, useEffect } from 'react';

export type BusinessType = 'rideshare' | 'delivery' | 'vehicle_rental' | 'home_rental' | 'consulting' | 'other';

interface BusinessProfile {
  types: BusinessType[];
  setupComplete: boolean;
}

interface SettingsContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  fontType: 'sans' | 'serif' | 'mono';
  setFontType: (type: 'sans' | 'serif' | 'mono') => void;
  fontSize: number; // 12 to 24px
  setFontSize: (size: number) => void;
  profile: BusinessProfile;
  updateProfile: (profile: Partial<BusinessProfile>) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    }
    return 'light';
  });

  const [fontType, setFontType] = useState<'sans' | 'serif' | 'mono'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('fontType') as 'sans' | 'serif' | 'mono' || 'sans';
    }
    return 'sans';
  });

  const [fontSize, setFontSize] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('fontSize') || '16');
    }
    return 16;
  });

  const [profile, setProfile] = useState<BusinessProfile>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('businessProfile');
      return saved ? JSON.parse(saved) : { types: [], setupComplete: false };
    }
    return { types: [], setupComplete: false };
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const fontFamilies = {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      serif: '"Playfair Display", Georgia, serif',
      mono: '"JetBrains Mono", ui-monospace, monospace'
    };
    root.style.setProperty('--font-headline-family', fontFamilies[fontType === 'serif' ? 'serif' : 'sans']);
    root.style.setProperty('--font-body-family', fontFamilies[fontType]);
    localStorage.setItem('fontType', fontType);
  }, [fontType]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--base-font-size', `${fontSize}px`);
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('businessProfile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (newProfile: Partial<BusinessProfile>) => {
    setProfile(prev => ({ ...prev, ...newProfile }));
  };

  return (
    <SettingsContext.Provider value={{ 
      theme, setTheme, 
      fontType, setFontType, 
      fontSize, setFontSize,
      profile, updateProfile
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
