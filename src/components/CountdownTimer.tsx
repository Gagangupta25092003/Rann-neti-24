import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }
        // console.log(timeLeft);
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clear interval on component unmount
    }, []);

    return (
        <div className="flex space-x-4 md:space-x-8 text-center text-base md:text-6xl">
            {timeLeft.days !== undefined ? (
                <>
                    <div className="flex flex-col items-center bg-red-900 p-4 rounded-2xl ">
                        <span className=" font-bold text-white">{timeLeft.days}</span>
                        <span className="text-sm font-medium text-white">Days</span>
                    </div>
                    <div className="flex flex-col items-center bg-red-900 p-4 rounded-2xl">
                        <span className=" font-bold text-white">{timeLeft.hours}</span>
                        <span className="text-sm font-medium text-white">Hours</span>
                    </div>
                    <div className="flex flex-col items-center bg-red-900 p-4 rounded-2xl">
                        <span className=" font-bold text-white">{timeLeft.minutes}</span>
                        <span className="text-sm font-medium text-white">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center bg-red-900 p-4 rounded-2xl">
                        <span className=" font-bold text-white">{timeLeft.seconds}</span>
                        <span className="text-sm font-medium text-white">Seconds</span>
                    </div>
                </>
            ) : (
                <span className="text-xl font-semibold text-white">Time's up!</span>
            )}
        </div>
    );
};

export default CountdownTimer;
