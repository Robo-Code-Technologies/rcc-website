import { motion } from 'framer-motion';

import Bot from '../../assets/ecosys_bot.png';
import Elearning from '../../assets/ecosys_elearning.png';
import Path from '../../assets/ecosys_path.png';

export function VerticalCarousel() {
    return (
        <div className="relative" style={{ width: '380px' }}>
            {/* Top Gold line */}
            <div
                className="absolute left-1/2 top-0 z-10 h-5 w-[110%] -translate-x-1/2 rounded-full"
                style={{
                    background: 'linear-gradient(to bottom, #F4B860, #D69E4A)',
                }}
            ></div>

            {/* Parent div that crops/hides overflow */}
            <div
                className="relative w-full overflow-hidden"
                style={{ height: '520px' }}
            >
                {/* Infinite scrolling divs - continuous animation */}
                <motion.div
                    className="flex flex-col gap-4"
                    animate={{
                        y: ['0%', '-50%'], // Move up by exactly 50% (half of total content = one full set)
                    }}
                    transition={{
                        y: {
                            duration: 18, // 18 seconds for full cycle (6 seconds per item)
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                        },
                    }}
                >
                    {/* 1. Robo Code Path */}
                    <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white text-center" style={{ height: '380px' }}>
                        <img
                            src={Path}
                            className="mb-4 h-24"
                            alt="Robo Code Path"
                        />
                        <h1
                            className="text-lg font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Robo Code Path
                        </h1>
                        <p className="text-sm text-gray-500">(Programs & Curriculum)</p>
                    </div>

                    {/* 2. Robo Code Learn */}
                    <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white text-center" style={{ height: '380px' }}>
                        <img
                            src={Elearning}
                            className="mb-4 h-24"
                            alt="Robo Code Learn"
                        />
                        <h1
                            className="text-lg font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Robo Code Learn
                        </h1>
                        <p className="text-sm text-gray-500">(e-Learning Hub)</p>
                    </div>

                    {/* 3. Robo Code Bot */}
                    <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white text-center" style={{ height: '380px' }}>
                        <img
                            src={Bot}
                            className="mb-4 h-24"
                            alt="Robo Code Bot"
                        />
                        <h1
                            className="text-lg font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Robo Code Bot
                        </h1>
                        <p className="text-sm text-gray-500">(Robotic Kits)</p>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    {/* 1. Robo Code Path (duplicate) */}
                    <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white text-center" style={{ height: '380px' }}>
                        <img
                            src={Path}
                            className="mb-4 h-24"
                            alt="Robo Code Path"
                        />
                        <h1
                            className="text-lg font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Robo Code Path
                        </h1>
                        <p className="text-sm text-gray-500">(Programs & Curriculum)</p>
                    </div>

                    {/* 2. Robo Code Learn (duplicate) */}
                    <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white text-center" style={{ height: '380px' }}>
                        <img
                            src={Elearning}
                            className="mb-4 h-24"
                            alt="Robo Code Learn"
                        />
                        <h1
                            className="text-lg font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Robo Code Learn
                        </h1>
                        <p className="text-sm text-gray-500">(e-Learning Hub)</p>
                    </div>

                    {/* 3. Robo Code Bot (duplicate) */}
                    <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white text-center" style={{ height: '380px' }}>
                        <img
                            src={Bot}
                            className="mb-4 h-24"
                            alt="Robo Code Bot"
                        />
                        <h1
                            className="text-lg font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Robo Code Bot
                        </h1>
                        <p className="text-sm text-gray-500">(Robotic Kits)</p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gold line */}
            <div
                className="absolute bottom-0 left-1/2 z-10 h-5 w-[110%] -translate-x-1/2 rounded-full"
                style={{
                    background: 'linear-gradient(to bottom, #F4B860, #D69E4A)',
                }}
            ></div>
        </div>
    );
}

