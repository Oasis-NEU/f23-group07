import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './card';
import { User } from 'firebase/auth';

function CardStack({ users }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLike = () => {
        console.log("Like");

        //TODO: Work on matching algorithm later
        /*

        // If both liked each other, then match
        if (match) {
            console.log("Match");
            router.push('/match');
        }

        // Else, just move to the next person
        else {
            console.log("No Match");
        }

        */
    };

    const handleNope = () => {
        console.log("Nope");
    };

    const handleSwipe = (direction) => {
        if (direction === 'right') {
            handleLike();
        } else {
           handleNope();
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div>
            Users
            <AnimatePresence>
                {currentIndex < users.length && (
                    <Card key={users[currentIndex].id} userData={users[currentIndex]} onSwipe={handleSwipe} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default CardStack;