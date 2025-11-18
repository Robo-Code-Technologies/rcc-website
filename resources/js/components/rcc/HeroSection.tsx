import { motion } from 'framer-motion';
import { Blobs } from './Blobs';
import { Mascot } from './Mascot';

const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

export function HeroSection() {
    return (
        <motion.main
            id="home"
            className="relative z-[100] flex min-h-[100vh] min-w-screen items-center bg-blue-950"
            style={{ outline: '4px solid cyan', outlineOffset: '-4px' }}
        >
            {/* Main content container - ready for restructuring */}
            <div className="relative z-50 flex h-full min-h-full w-full items-center">
                {/* Content area - 75% width centered, fills available height */}
                <div 
                    className="hero-content-1300 relative z-50 mx-auto flex h-auto w-[75%] flex-col items-center justify-center outline outline-4 outline-green-500 md:flex-row"
                >
                    <style>{`
                        @media (min-width: 1200px) and (max-width: 1600px) {
                            .hero-content-1300 {
                                padding-top: 2rem;
                                padding-bottom: 2rem;
                            }
                        }
                    `}</style>
                    {/* Mascot section - Shows on top on mobile, right side on desktop */}
                    <motion.div 
                        className="flex w-full items-center justify-center py-4 outline outline-2 outline-purple-500 md:order-2 md:w-[40%] md:py-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Mascot />
                    </motion.div>

                    {/* Text Content section - Shows below mascot on mobile, left side on desktop */}
                    <motion.div className="flex w-full flex-col justify-center py-4 text-center outline outline-2 outline-yellow-500 md:order-1 md:w-[60%] md:py-6 md:text-left">
                        <motion.h1
                            className="hero-heading-1300 font-bold leading-tight text-white"
                            style={{ 
                                fontFamily: 'Fredoka',
                                fontSize: 'clamp(1.5rem, 5vh, 4rem)'
                            }}
                        >
                            Building Future
                            <br /> Innovators Through
                            <br /> Robotics & Coding
                        </motion.h1>
                        <motion.p 
                            className="my-3 text-base leading-relaxed text-gray-400 sm:my-4 sm:text-lg md:my-5 lg:my-6"
                        >
                            Robo Code Club empowers students to explore technology,
                            solve problems, and create real-world solutions through
                            hands-on robotics and coding programs.
                        </motion.p>

                        <motion.div className="flex justify-center md:justify-start">
                            <motion.button
                                className="rounded-full bg-yellow-400 font-semibold text-blue-950 transition-all duration-100 hover:bg-yellow-300"
                                style={{ 
                                    fontSize: 'clamp(0.875rem, 1.8vh, 1.125rem)',
                                    padding: 'clamp(0.625rem, 1.5vh, 1rem) clamp(1.25rem, 3vh, 2rem)'
                                }}
                                variants={buttonVariants}
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                whileTap="tap"
                                transition={{ duration: 0.2, delay: 0.1 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ========== COMMENTED OUT - Original Content ========== */}
                {/* 
                <motion.div className="flex-1 text-center md:text-left">
                    <motion.h1
                        className="text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        Building Future
                        <br /> Innovators Through
                        <br /> Robotics & Coding
                    </motion.h1>
                    <motion.p className="mx-auto my-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:my-6 sm:text-base md:mx-0 md:my-8 md:text-lg lg:my-10 lg:text-xl">
                        Robo Code Club empowers students to explore technology,
                        solve problems, and create real-world solutions through
                        hands-on robotics and coding programs.
                    </motion.p>

                    <motion.div className="flex justify-center md:justify-start">
                        <motion.button
                            className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-blue-950 transition-all duration-100 hover:bg-yellow-300 sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            whileTap="tap"
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="z-10 hidden flex-shrink-0 md:block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Mascot />
                </motion.div>
                */}
                {/* ========== END COMMENTED OUT ========== */}
            </div>

            {/* Background Blobs */}
            <motion.div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
                <Blobs />
            </motion.div>
        </motion.main>
    );
}
