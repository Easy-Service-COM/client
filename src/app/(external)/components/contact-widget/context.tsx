'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactWidgetContextType {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

const ContactWidgetContext = createContext<ContactWidgetContextType | undefined>(undefined);

export function ContactWidgetProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(prev => !prev);

    return (
        <ContactWidgetContext.Provider value={{ isOpen, open, close, toggle }}>
            {children}
        </ContactWidgetContext.Provider>
    );
}

export function useContactWidget() {
    const context = useContext(ContactWidgetContext);
    if (!context) {
        throw new Error('useContactWidget must be used within ContactWidgetProvider');
    }
    return context;
}