"use client"
import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
    const words = ['story', 'memory', 'passion'];
    const [displayedText, setDisplayedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 250; // Speed of typing
    const deletingSpeed = 100; // Speed of deleting
    const pauseDuration = 2000; // Pause before typing the next word

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isDeleting) {
                // Remove characters
                if (currentCharacterIndex > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setCurrentCharacterIndex((prev) => prev - 1);
                } else {
                    // Move to the next word after deletion
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    setCurrentCharacterIndex(0); // Reset character index for the next word
                }
            } else {
                // Add characters
                if (currentCharacterIndex < words[currentWordIndex].length) {
                    setDisplayedText((prev) => prev + words[currentWordIndex][currentCharacterIndex]);
                    setCurrentCharacterIndex((prev) => prev + 1);
                } else {
                    // Pause before deleting
                    setIsDeleting(true);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, currentCharacterIndex, isDeleting, currentWordIndex, words]);

    // Add pause between typing and deleting
    useEffect(() => {
        if (!isDeleting && currentCharacterIndex === words[currentWordIndex].length) {
            const pauseTimer = setTimeout(() => {
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimer);
        }
    }, [isDeleting, currentCharacterIndex, currentWordIndex, words]);

    return (
        <h1 className="animated-headline ah-headline clip is-full-width">
            <span className="ah-words-wrapper">
                {displayedText}
                <span className="cursor">|</span>
            </span>
        </h1>
    );
};

export default TypingAnimation;



