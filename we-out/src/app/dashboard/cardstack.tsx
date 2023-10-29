import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './card'

function CardStack({ users }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'right') {
            // Logic for a "like"
        } else {
            // Logic for a "nope"
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    return (
        <AnimatePresence>
            {currentIndex < users.length && (
                <Card key={users[currentIndex].id} userData={users[currentIndex]} onSwipe={handleSwipe} />
            )}
        </AnimatePresence>
    );
}