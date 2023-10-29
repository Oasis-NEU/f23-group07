import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Card({ userData, onSwipe }) {
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                    onSwipe('left');
                } else if (swipe > swipeConfidenceThreshold) {
                    onSwipe('right');
                }
            }}
        >
            {/* Your card content using userData */}
        </motion.div>
    );
}

export default Card;