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
            <div className="profile-card">
                <img src={userData.profilePic} alt="Profile" className="profile-pic"/>
                <div className="profile-info">
                    <h3>Name: {userData.name} </h3>
                    <h3>Days Available: {userData.daysAvailable.join(', ')}</h3>
                    <h3>Times Available: {userData.timesAvailable.join(', ')}</h3>
                    <h3>Experience Level: {userData.experienceLevel}</h3>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;