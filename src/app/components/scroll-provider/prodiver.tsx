'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollContextType {
    isVisible: boolean;
    isAtBottom: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                
                const showThreshold = 100; // ✅ 100px вместо 200
                const bottomThreshold = 50;
                
                setIsVisible(scrollY > showThreshold);
                setIsAtBottom(scrollY + windowHeight >= documentHeight - bottomThreshold);
            }, 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ isVisible, isAtBottom }}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScroll() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
}