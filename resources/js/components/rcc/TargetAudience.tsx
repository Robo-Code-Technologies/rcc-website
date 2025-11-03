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

            <motion.div className="mt-12 flex w-full flex-col gap-6 px-4 sm:mt-16 sm:flex-col sm:gap-8 sm:px-8 md:px-16 lg:flex-row lg:gap-12 lg:px-24 xl:gap-20 xl:px-48">
                <motion.div className="flex aspect-[4/3] w-full flex-col items-center rounded-lg border border-blue-950/20 p-6 sm:aspect-[3/4] sm:p-8">
                    <motion.img className="h-20 sm:h-24 md:h-32" src={School} />
                    <motion.p className="text-center text-xl font-semibold text-blue-950 sm:text-2xl">
                        Schools
                    </motion.p>
                    <motion.p className="mt-3 text-center text-sm text-gray-500 sm:mt-4 sm:text-base">
                        Empower classrooms with structured robotics and coding
                        programs aligned with STEM goals.
                    </motion.p>
                </motion.div>
                <motion.div className="flex aspect-[4/3] w-full flex-col items-center rounded-lg border border-blue-950/20 p-6 sm:aspect-[3/4] sm:p-8">
                    <motion.img
                        className="h-20 sm:h-24 md:h-32"
                        src={TutorCenter}
                    />
                    <motion.p className="text-center text-xl font-semibold text-blue-950 sm:text-2xl">
                        Tutor Center
                    </motion.p>
                    <motion.p className="mt-3 text-center text-sm text-gray-500 sm:mt-4 sm:text-base">
                        Enhance your learning programs with robotics kits and
                        guided lessons that is exciting for every student.
                    </motion.p>
                </motion.div>
                <motion.div className="flex aspect-[4/3] w-full flex-col items-center rounded-lg border border-blue-950/20 p-6 sm:aspect-[3/4] sm:p-8">
                    <motion.img
                        className="h-20 sm:h-24 md:h-32"
                        src={Parents}
                    />
                    <motion.p className="text-center text-xl font-semibold text-blue-950 sm:text-2xl">
                        Parents
                    </motion.p>
                    <motion.p className="mt-3 text-center text-sm text-gray-500 sm:mt-4 sm:text-base">
                        Bring robotics home with kits and lessons designed to
                        help kids learn, build, and create at their own pace.
                    </motion.p>
                </motion.div>
            </motion.div>

            <div className="my-16 w-full px-12 sm:my-20 md:my-24">
                <hr className="h-[1px] border-none bg-gray-200" />
            </div>

            <motion.h1
                className="px-4 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'Fredoka' }}
            >
                Our Team & Our Story
            </motion.h1>

            <motion.p className="mt-3 px-4 text-center text-base text-gray-400 sm:text-lg">
                Our vision, our mission & our motivation!
            </motion.p>

            <motion.div className="mt-16 px-4 sm:mt-20 sm:px-8 md:mt-24 md:px-16 lg:px-24 xl:px-32">
                {/* Founders */}
                <motion.div className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
                    <motion.div className="order-2 flex-1 lg:order-1 lg:flex-[3]">
                        <motion.h1
                            className="text-center text-2xl font-bold text-blue-950 sm:text-3xl md:text-4xl lg:text-left lg:text-5xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Where It All Began
                        </motion.h1>

                        <motion.p className="my-4 text-center text-base text-blue-950 sm:my-6 sm:text-lg lg:text-left">
                            Robo Code Club was founded by passionate software
                            engineers — Kyle, Kent, and Chan — who saw firsthand
                            how fast and disruptive AI is changing the world. We
                            realized that while technology is evolving at an
                            incredible pace, education isn't keeping up — and
                            kids risk being left behind if we don't act now.
                        </motion.p>
                    </motion.div>
                    <motion.div className="order-1 flex flex-1 justify-center lg:order-2 lg:flex-[2] lg:justify-end">
                        <motion.img
                            className="w-full max-w-sm rounded-xl shadow-lg lg:max-w-none"
                            src={Founders}
                        />
                    </motion.div>
                </motion.div>

                {/* The AI Shift */}
                <motion.div className="mt-16 flex w-full flex-col gap-6 sm:mt-20 sm:gap-8 md:mt-24 lg:flex-row lg:gap-12">
                    <motion.div className="order-1 flex flex-1 justify-center lg:flex-[2] lg:justify-start">
                        <motion.img
                            className="w-full max-w-sm rounded-xl shadow-lg lg:max-w-none"
                            src={AIShift}
                        />
                    </motion.div>
                    <motion.div className="order-2 flex-1 lg:flex-[3]">
                        <motion.h1
                            className="text-center text-2xl font-bold text-blue-950 sm:text-3xl md:text-4xl lg:text-left lg:text-5xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            The AI Shift
                        </motion.h1>

                        <motion.p className="my-4 text-center text-base text-blue-950 sm:my-6 sm:text-lg lg:text-left">
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
                <motion.div className="mt-16 flex w-full flex-col gap-6 sm:mt-20 sm:gap-8 md:mt-24 lg:flex-row lg:gap-12">
                    <motion.div className="order-2 flex-1 lg:order-1 lg:flex-[3]">
                        <motion.h1
                            className="text-center text-2xl font-bold text-blue-950 sm:text-3xl md:text-4xl lg:text-left lg:text-5xl"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Our Mission
                        </motion.h1>

                        <motion.p className="my-4 text-center text-base text-blue-950 sm:my-6 sm:text-lg lg:text-left">
                            We're here to equip the next generation with
                            real-world tech skills through fun, hands-on
                            robotics and coding education. By learning through
                            play, every child gains the confidence to navigate —
                            and build — the world of tomorrow.
                        </motion.p>
                    </motion.div>
                    <motion.div className="order-1 flex flex-1 justify-center lg:order-2 lg:flex-[2] lg:justify-end">
                        <motion.img
                            className="w-full max-w-sm rounded-xl shadow-lg lg:max-w-none"
                            src={Mission}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
