'use client';

import { useState, useEffect, useRef } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";

interface ScrambleTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    hover?: boolean;
}

export const ScrambleText = ({ text, className, speed = 40, delay = 0, hover = false }: ScrambleTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        // Clear any existing interval
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsScrambling(false);
            }

            iteration += 1 / 2; // Slower reveal
        }, speed);
    };

    useEffect(() => {
        if (!hover) {
            const timeout = setTimeout(startScramble, delay);
            return () => clearTimeout(timeout);
        }
    }, [text, hover, delay, speed]);

    return (
        <span
            className={className}
            onMouseEnter={hover ? startScramble : undefined}
        >
            {displayText}
        </span>
    );
};
