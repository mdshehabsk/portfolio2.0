
'use client'
import { useEffect, useState, useCallback } from 'react';



type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

function getInitialTheme(): Theme {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === 'dark' || stored === 'light') return stored;
        // Optionally, use prefers-color-scheme
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem(THEME_KEY, theme);
        return () => {
            document.body.classList.remove('dark');
        };
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return { theme, toggleTheme };
}