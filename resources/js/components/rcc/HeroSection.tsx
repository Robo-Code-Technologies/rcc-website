import { motion } from 'framer-motion';
import { Blobs } from './Blobs';

const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
};

export function HeroSection() {
    return (
        <motion.main className="min-h-[100vh] min-w-screen bg-blue-950 flex items-center">
            <motion.div className="w-full px-6 sm:px-8 md:px-16 lg:px-32 xl:px-48">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[52px] leading-tight font-bold text-white text-center sm:text-left"
                    style={{ fontFamily: 'Fredoka' }}
                >
                    Building Future
                    <br /> Innovators Through
                    <br /> Robotics & Coding
                </motion.h1>
                <motion.p className="my-6 sm:my-8 md:my-10 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-left max-w-2xl">
                    Robo Code Club empowers students to explore technology,
                    solve problems, and create real-world solutions
                    through hands-on robotics and coding programs.
                </motion.p>

                <motion.div className="flex justify-center sm:justify-start">
                    <motion.button
                        className="rounded-full bg-yellow-400 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-blue-950 transition-all duration-100 hover:bg-yellow-300 text-base sm:text-lg"
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

            <motion.div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
                <Blobs />
            </motion.div>
        </motion.main>
    );
}