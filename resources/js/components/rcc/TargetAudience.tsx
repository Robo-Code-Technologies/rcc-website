import { motion } from 'framer-motion';

import AIShift from '../../assets/ai_shift.png';
import Founders from '../../assets/founders.png';
import Mission from '../../assets/our_mission.png';

import Parents from '../../assets/parents.svg';
import School from '../../assets/school.svg';
import TutorCenter from '../../assets/tutor_center.svg';

export function TargetAudience() {
    return (
        <motion.div className="flex flex-col items-center bg-white pt-16 sm:pt-24 md:pt-32">
            <motion.h1
                className="px-4 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'Fredoka' }}
            >
                For educators and parents
            </motion.h1>
            <motion.p className="mt-4 max-w-[600px] px-4 text-center text-base text-gray-500 sm:px-0 sm:text-lg">
                We partner with schools, tutor centers, and families to make
                robotics education simple, engaging, and future-ready.
            </motion.p>

            <motion.div className="mt-12 flex w-full max-w-6xl flex-col gap-6 px-4 sm:mt-16 sm:flex-row sm:gap-6 sm:px-8 md:gap-8 md:px-16 lg:gap-8">
                <motion.div className="flex w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-8 sm:w-1/3 min-h-[350px]">
                    <motion.img className="h-24 mb-4" src={School} />
                    <motion.p className="text-center text-2xl font-semibold text-blue-950 mb-3">
                        Schools
                    </motion.p>
                    <motion.p className="text-center text-base text-gray-500 leading-relaxed">
                        Empower classrooms with structured robotics and coding
                        programs aligned with STEM goals.
                    </motion.p>
                </motion.div>
                <motion.div className="flex w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-8 sm:w-1/3 min-h-[350px]">
                    <motion.img
                        className="h-24 mb-4"
                        src={TutorCenter}
                    />
                    <motion.p className="text-center text-2xl font-semibold text-blue-950 mb-3">
                        Tutor Centers
                    </motion.p>
                    <motion.p className="text-center text-base text-gray-500 leading-relaxed">
                        Enhance your learning programs with robotics kits and
                        guided lessons that is exciting for every student.
                    </motion.p>
                </motion.div>
                <motion.div className="flex w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-8 sm:w-1/3 min-h-[350px]">
                    <motion.img
                        className="h-24 mb-4"
                        src={Parents}
                    />
                    <motion.p className="text-center text-2xl font-semibold text-blue-950 mb-3">
                        Parents
                    </motion.p>
                    <motion.p className="text-center text-base text-gray-500 leading-relaxed">
                        Bring robotics home with kits and lessons designed to
                        help kids learn, build, and create at their own pace.
                    </motion.p>
                </motion.div>
            </motion.div>

            <div className="my-12 w-full px-12 sm:my-16 md:my-20">
                <hr className="h-[1px] border-none bg-gray-200" />
            </div>

            <div className="[&_*]:!outline-none">
                <motion.h1
                    className="px-4 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl"
                    style={{ fontFamily: 'Fredoka' }}
                >
                    Our Team & Our Story
                </motion.h1>

                <motion.p className="mt-2 px-4 text-center text-base text-gray-400 sm:text-lg">
                    Our mission, our vision & our motivation!
                </motion.p>

                <motion.div className="mt-12 px-24 sm:px-36 md:px-48 lg:px-60 pb-16">
                {/* Founders */}
                <motion.div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-0 items-center">
                    <motion.div className="order-2 w-full lg:order-1 lg:w-1/2 lg:px-8">
                        <motion.h1
                            className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Where It All Began
                        </motion.h1>

                        <motion.p className="mt-3 text-center text-base text-blue-950 sm:text-lg lg:text-left leading-relaxed">
                            Robo Code Club was founded by passionate software
                            engineers — Kyle, Kent, and Chan — who saw firsthand
                            how fast and disruptive AI is changing the world. We
                            realized that while technology is evolving at an
                            incredible pace, education isn't keeping up — and
                            kids risk being left behind if we don't act now.
                        </motion.p>
                    </motion.div>
                    <motion.div className="order-1 w-full flex justify-center lg:order-2 lg:w-1/2">
                        <motion.img
                            className="w-full max-w-xs rounded-lg shadow-md"
                            src={Founders}
                        />
                    </motion.div>
                </motion.div>

                {/* The AI Shift */}
                <motion.div className="mt-12 flex w-full flex-col gap-6 lg:flex-row lg:gap-0 items-center">
                    <motion.div className="order-1 w-full flex justify-center lg:w-1/2">
                        <motion.img
                            className="w-full max-w-xs rounded-lg shadow-md"
                            src={AIShift}
                        />
                    </motion.div>
                    <motion.div className="order-2 w-full lg:w-1/2 lg:px-8">
                        <motion.h1
                            className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            The AI Shift
                        </motion.h1>

                        <motion.p className="mt-3 text-center text-base text-blue-950 sm:text-lg lg:text-left leading-relaxed">
                            AI is transforming every field — from art and
                            medicine to business and engineering. Whatever path
                            kids choose, they'll work alongside technology. We
                            believe understanding it early gives them the power
                            to adapt, create, and thrive in the future. CHange
                            the title of this to shorter
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Our Mission */}
                <motion.div className="mt-12 flex w-full flex-col gap-6 lg:flex-row lg:gap-0 items-center">
                    <motion.div className="order-2 w-full lg:order-1 lg:w-1/2 lg:px-8">
                        <motion.h1
                            className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Our Mission
                        </motion.h1>

                        <motion.p className="mt-3 text-center text-base text-blue-950 sm:text-lg lg:text-left leading-relaxed">
                            We're here to equip the next generation with
                            real-world tech skills through fun, hands-on
                            robotics and coding education. By learning through
                            play, every child gains the confidence to navigate —
                            and build — the world of tomorrow.
                        </motion.p>
                    </motion.div>
                    <motion.div className="order-1 w-full flex justify-center lg:order-2 lg:w-1/2">
                        <motion.img
                            className="w-full max-w-xs rounded-lg shadow-md"
                            src={Mission}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            </div>
        </motion.div>
    );
}
