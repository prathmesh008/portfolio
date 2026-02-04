'use client';

import { useEffect } from 'react';

export const KeyboardNav = () => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const scrollAmount = window.innerHeight * 0.5;

            switch (e.key.toLowerCase()) {
                case 'j':
                    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
                    break;
                case 'k':
                    window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return null;
};
