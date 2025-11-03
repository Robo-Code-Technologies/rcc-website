import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { featuresData } from '../../data/features';

import BottomBackgroundBlob from '../../assets/bottom_blob_bg.svg';
import BottomForegroundBlob from '../../assets/bottom_blob_fg.svg';
import BottomSubForegroundBlob from '../../assets/bottom_blob_fg_sub.svg';
import RobotArm from '../../assets/robot_arm.svg';

const blobAnimationVariants = {
    background: {
        y: [0, 8, 0],
        x: [0, 12, 0]
    },
    subForeground: {
        y: [0, 10, 0],
        x: [0, -8, 0]
    },
    foreground: {
        y: [0, 6, 0]
    }
};

const blobTransitions = {
    background: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 1
    },
    subForeground: {
        duration: 5.5,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 0.3
    },
    foreground: {
        duration: 7,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 0.8
    }
};

export function SubHero() {
    return (
        <motion.div className="relative -bottom-0 min-h-screen overflow-visible bg-blue-950 pt-16">
            {/* Bottom Blob Animations */}
            <motion.div className="absolute top-0 right-0 z-0 sm:max-h-32 max-h-20 w-screen transform overflow-hidden select-none">
                <motion.img
                    className="ml-auto"
                    src={BottomBackgroundBlob}
                    animate={blobAnimationVariants.background}
                    transition={blobTransitions.background}
                />
            </motion.div>

            <motion.div className="absolute top-0 left-0 z-1 sm:max-h-32 max-h-20 w-screen transform overflow-hidden select-none">
                <motion.img
                    className="w-full"
                    src={BottomSubForegroundBlob}
                    animate={blobAnimationVariants.subForeground}
                    transition={blobTransitions.subForeground}
                />
            </motion.div>

            <motion.div className="absolute top-0 left-0 z-2 sm:max-h-32 max-h-20 w-full transform overflow-hidden select-none">
                <motion.img
                    className="w-full"
                    src={BottomForegroundBlob}
                    animate={blobAnimationVariants.foreground}
                    transition={blobTransitions.foreground}
                />
            </motion.div>

            {/* White Content Section */}
            <motion.div className="bg-white p-4 sm:p-8 md:p-16 lg:p-24">
                {/* Features Section */}
                <motion.div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-24">
                    <motion.div className="w-full lg:w-1/2">
                        <motion.img className='mx-auto' src={RobotArm} /> 
                    </motion.div>
                    <motion.div className="w-full lg:w-1/2">
                        <motion.h1 className='text-blue-950 font-bold text-5xl tracking-wide leading-tight' style={{ fontFamily: 'Fredoka' }}>
                            AI and Robotics are <br />
                            reshaping the world.
                        </motion.h1> 
                        <motion.h2 className='text-red-500 text-3xl font-semibold my-3' style={{ fontFamily: 'Fredoka' }}>
                            Is your child ready for the future?
                        </motion.h2>
                        <motion.p className='text-gray-500 text-lg max-w-[540px]'>
                            AI and robotics are transforming the world—but most kids aren’t learning the skills to keep up. <span className='font-extrabold'>Robo Code Club</span> bridges that gap through fun, hands-on learning in coding and robotics, helping children not just adapt to the future, <span className='font-extrabold'>but build it</span>.
                        </motion.p>
                    </motion.div>
                </motion.div>

                <hr className='my-20 border-none bg-gray-200 h-[1px]' />

                {/* Features Section */}
                <motion.div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-24">
                    <motion.div className="w-full lg:w-1/2">
                        <motion.p
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Every student<br />
                            becomes <span className='text-red-500'>a creator</span><br />
                            not just a learner.
                        </motion.p>
                        <motion.p className="text-lg text-gray-400 leading-relaxed mt-4 max-w-[400px]">
                            We spark curiosity and turn it into skills that inspire innovation and problem-solving.
                        </motion.p>
                    </motion.div>
                    <motion.div className="w-full lg:w-1/2">
                        <motion.ul>
                            {featuresData.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                    isFirst={index === 0}
                                    isLast={index === featuresData.length - 1}
                                />
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>

                {/* Programs Section */}
                {/* <motion.div className="mt-8 sm:mt-12 md:mt-16 flex w-full flex-col items-center justify-center">
                    <motion.p className="rounded-full bg-red-100 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-red-700">
                        PROGRAMS
                    </motion.p>
                    <motion.h1
                        className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 text-center px-4"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        Explore Programs we Offer
                    </motion.h1>
                    <motion.p className="mt-3 sm:mt-4 text-center text-gray-400 text-sm sm:text-base px-4 max-w-2xl">
                        We offer robotics and coding programs designed for
                        different levels of learners. Each program is hands-on, engaging, and
                        builds real-world skills.
                    </motion.p>

                    <motion.div className="mt-6 sm:mt-8 flex flex-col sm:flex-row w-full max-w-4xl px-4 gap-4">
                        {programsData.map((program, index) => (
                            <ProgramCard
                                key={index}
                                title={program.title}
                                description={program.description}
                            />
                        ))}
                    </motion.div>
                </motion.div> */}
            </motion.div>
        </motion.div>
    );
}