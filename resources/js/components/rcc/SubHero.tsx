import { motion } from 'framer-motion';
import { featuresData } from '../../data/features';
import { FeatureCard } from './FeatureCard';

import BottomBackgroundBlob from '../../assets/bottom_blob_bg.svg';
import BottomForegroundBlob from '../../assets/bottom_blob_fg.svg';
import BottomSubForegroundBlob from '../../assets/bottom_blob_fg_sub.svg';
import RobotArm from '../../assets/robot_arm.svg';

const blobAnimationVariants = {
    background: {
        y: [0, 8, 0],
        x: [0, 12, 0],
    },
    subForeground: {
        y: [0, 10, 0],
        x: [0, -8, 0],
    },
    foreground: {
        y: [0, 6, 0],
    },
};

const blobTransitions = {
    background: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 1,
    },
    subForeground: {
        duration: 5.5,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 0.3,
    },
    foreground: {
        duration: 7,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 0.8,
    },
};

interface SubHeroProps {
}

export function SubHero() {
    return (
        <motion.div className="relative -bottom-0 min-h-screen overflow-visible bg-blue-950 pt-16">
            {/* Bottom Blob Animations */}
            <motion.div className="absolute top-0 right-0 z-0 max-h-20 w-screen transform overflow-hidden select-none sm:max-h-32">
                <motion.img
                    className="ml-auto"
                    src={BottomBackgroundBlob}
                    animate={blobAnimationVariants.background}
                    transition={blobTransitions.background}
                />
            </motion.div>

            <motion.div className="absolute top-0 left-0 z-1 max-h-20 w-screen transform overflow-hidden select-none sm:max-h-32">
                <motion.img
                    className="w-full"
                    src={BottomSubForegroundBlob}
                    animate={blobAnimationVariants.subForeground}
                    transition={blobTransitions.subForeground}
                />
            </motion.div>

            <motion.div className="absolute top-0 left-0 z-2 max-h-20 w-full transform overflow-hidden select-none sm:max-h-32">
                <motion.img
                    className="w-full"
                    src={BottomForegroundBlob}
                    animate={blobAnimationVariants.foreground}
                    transition={blobTransitions.foreground}
                />
            </motion.div>

            {/* White Content Section */}
            <motion.div className="bg-white px-24 py-4 sm:px-36 sm:py-8 md:px-48 md:py-16 lg:px-60 lg:py-24">
                {/* Future Section - AI and Robotics */}
                {/* <motion.div
                    id="future"
                    className="flex w-full flex-col gap-8 lg:flex-row lg:gap-24"
                >
                    <motion.div className="w-full lg:w-1/2">
                        <motion.img className="mx-auto" src={RobotArm} />
                    </motion.div>
                    <motion.div className="w-full text-center lg:w-1/2 lg:text-left">
                        <motion.h1
                            className="text-3xl leading-tight font-bold tracking-wide text-blue-950 sm:text-4xl md:text-5xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            AI and Robotics are <br />
                            reshaping the world.
                        </motion.h1>
                        <motion.h2
                            className="my-3 text-xl font-semibold text-red-500 sm:text-2xl md:text-3xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Is your child ready for the future?
                        </motion.h2>
                        <motion.p className="mx-auto max-w-full text-base text-gray-500 sm:max-w-[540px] sm:text-lg lg:mx-0">
                            AI and robotics are transforming the world—but most
                            kids aren't learning the skills to keep up.{' '}
                            <span className="font-extrabold">
                                Robo Code Club
                            </span>{' '}
                            bridges that gap through fun, hands-on learning in
                            coding and robotics, helping children not just adapt
                            to the future,{' '}
                            <span className="font-extrabold">but build it</span>
                            .
                        </motion.p>
                    </motion.div>
                </motion.div> */}

                {/* Orange Section - 75% of viewport width */}
                <motion.div
                    id="future"
                    className="relative left-1/2 w-[75vw] -translate-x-1/2"
                >
                    <motion.div className="flex w-full flex-col lg:flex-row">
                        {/* Left Section */}
                        <motion.div
                            className="flex w-full items-center justify-center lg:w-[48%]"
                        >
                            <motion.img
                                className="mx-auto w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
                                src={RobotArm}
                                alt="Robot Arm"
                            />
                        </motion.div>

                        {/* Right Section */}
                        <motion.div
                            className="w-full pt-6 text-center sm:p-8 md:p-10 lg:w-[52%] lg:p-12 lg:text-left"
                        >
                            <motion.h1
                                className="text-3xl leading-tight font-bold tracking-wide text-blue-950 sm:text-4xl md:text-5xl lg:text-[clamp(1.5rem,5vh,4rem)]"
                                style={{
                                    fontFamily: 'Fredoka',
                                }}
                            >
                                AI and Robotics are <br />
                                reshaping the world.
                            </motion.h1>
                            <motion.h2
                                className="mt-3 mb-6 text-xl font-semibold text-red-500 sm:text-2xl md:text-3xl"
                                style={{ fontFamily: 'Fredoka' }}
                            >
                                Is your child ready for the future?
                            </motion.h2>
                            <motion.p className="mx-auto max-w-full text-base text-gray-500 sm:max-w-[540px] sm:text-lg lg:mx-0">
                                AI and robotics are transforming the world—but
                                most kids aren't learning the skills to keep up.{' '}
                                <span className="font-extrabold">
                                    Robo Code Club
                                </span>{' '}
                                bridges that gap through fun, hands-on learning
                                in coding and robotics, helping children not
                                just adapt to the future,{' '}
                                <span className="font-extrabold">
                                    but build it
                                </span>
                                .
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className="relative left-1/2 my-10 w-[75vw] -translate-x-1/2">
                    <hr className="h-[1px] border-none bg-gray-200" />
                </div>

                {/* Features Section - Every student becomes a creator */}
                {/* <motion.div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-0">
                    <motion.div className="w-full lg:w-1/2 lg:px-8 lg:pl-20">
                        <motion.p
                            className="text-2xl leading-tight font-bold text-blue-950 sm:text-3xl md:text-4xl lg:text-5xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Every student
                            <br />
                            becomes{' '}
                            <span className="text-red-500">a creator</span>
                            <br />
                            not just a learner.
                        </motion.p>
                        <motion.p className="mt-4 max-w-[400px] text-lg leading-relaxed text-gray-400">
                            We spark curiosity and turn it into skills that
                            inspire innovation and problem-solving.
                        </motion.p>
                    </motion.div>
                    <motion.div className="w-full lg:w-1/2 lg:px-8">
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
                </motion.div> */}

                {/* Features Section - Restructured like Orange Section */}
                <motion.div
                    className="relative left-1/2 w-[75vw] -translate-x-1/2"
                >
                    <motion.div className="flex w-full flex-col lg:flex-row">
                        {/* Left Section - 48% */}
                        <motion.div
                            className="w-full text-center lg:w-[48%] lg:p-12 lg:text-left"
                        >
                            <motion.p
                                className="text-3xl leading-tight font-bold tracking-wide text-blue-950 sm:text-4xl md:text-5xl lg:text-[clamp(1.5rem,5vh,4rem)]"
                                style={{
                                    fontFamily: 'Fredoka',
                                }}
                            >
                                Every student
                                <br />
                                becomes{' '}
                                <span className="text-red-500">a creator</span>
                                <br />
                                not just a learner.
                            </motion.p>
                            <motion.p className="mx-auto mt-4 max-w-full pb-8 text-base text-gray-500 sm:max-w-[540px] sm:text-lg lg:mx-0 lg:pb-0">
                                We spark curiosity and turn it into skills that
                                inspire innovation and problem-solving.
                            </motion.p>
                        </motion.div>

                        {/* Right Section - 52% */}
                        <motion.div
                            className="w-full pt-6 text-right lg:w-[52%] lg:p-12 lg:text-left"
                        >
                            <motion.ul className="pb-8 text-left sm:pb-10 md:pb-12 lg:pb-0">
                                {featuresData.map((feature, index) => (
                                    <FeatureCard
                                        key={index}
                                        title={feature.title}
                                        description={feature.description}
                                        icon={feature.icon}
                                        isFirst={index === 0}
                                        isLast={
                                            index === featuresData.length - 1
                                        }
                                    />
                                ))}
                            </motion.ul>
                        </motion.div>
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
