import { useState } from 'react';
import { useRouter} from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './card'

function CardStack({ users }) {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLike = () => {
        console.log("Like");

        router.push('/match');

        // Work on matchin algorithm later
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
        <AnimatePresence>
            {currentIndex < users.length && (
                <Card key={users[currentIndex].id} userData={users[currentIndex]} onSwipe={handleSwipe} />
            )}
        </AnimatePresence>
    );
}