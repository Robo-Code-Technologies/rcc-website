import { motion } from 'framer-motion';

import Founders from '../assets/founders.png';
import AIShift from '../assets/ai_shift.png';
import Mission from '../assets/our_mission.png';

import Parents from '../assets/parents.svg';
import School from '../assets/school.svg';
import TutorCenter from '../assets/tutor_center.svg';

export function TargetAudience() {
    return (
        <motion.div className="flex flex-col items-center bg-white pt-32">
            <motion.h1
                className="text-5xl font-bold text-blue-950"
                style={{ fontFamily: 'Fredoka' }}
            >
                For educators and parents
            </motion.h1>
            <motion.p className="mt-4 max-w-[600px] text-center text-lg text-gray-500">
                We partner with schools, tutor centers, and families to make
                robotics education simple, engaging, and future-ready.
            </motion.p>

            <motion.div className="mt-16 flex w-full gap-20 px-48">
                <motion.div className="min-w-64 flex aspect-[3/4] w-full flex-col items-center rounded-lg border border-blue-950/20 p-8">
                    <motion.img className="h-32" src={School} />
                    <motion.p className="text-2xl font-semibold text-blue-950">
                        Schools
                    </motion.p>
                    <motion.p className="mt-4 text-center text-gray-500">
                        Empower classrooms with structured robotics and coding
                        programs aligned with STEM goals.
                    </motion.p>
                </motion.div>
                <motion.div className="min-w-64 flex aspect-[3/4] w-full flex-col items-center rounded-lg border border-blue-950/20 p-8">
                    <motion.img className="h-32" src={TutorCenter} />
                    <motion.p className="text-2xl font-semibold text-blue-950">
                        Tutor Center
                    </motion.p>
                    <motion.p className="mt-4 text-center text-gray-500">
                        Enhance your learning programs with robotics kits and
                        guided lessons that is exciting for every student.
                    </motion.p>
                </motion.div>
                <motion.div className="min-w-64 flex aspect-[3/4] w-full flex-col items-center rounded-lg border border-blue-950/20 p-8">
                    <motion.img className="h-32" src={Parents} />
                    <motion.p className="text-2xl font-semibold text-blue-950">
                        Parents
                    </motion.p>
                    <motion.p className="mt-4 text-center text-gray-500">
                        Bring robotics home with kits and lessons designed to
                        help kids learn, build, and create at their own pace.
                    </motion.p>
                </motion.div>
            </motion.div>

            <div className="mx-24 my-24 w-full border border-b-0 border-gray-300"></div>

            <motion.h1
                className="text-5xl font-bold text-blue-950"
                style={{ fontFamily: 'Fredoka' }}
            >
                Our Team & Our Story
            </motion.h1>

            <motion.p className="mt-3 text-lg text-gray-400">
                Our vision, our mission & our motivation!
            </motion.p>

            <motion.div className="mt-24 px-32">
                {/* Founders */}
                <motion.div className="flex w-full">
                    <motion.div className="flex-[3]">
                        <motion.h1
                            className="text-5xl font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Where It All Began
                        </motion.h1>

                        <motion.p className="my-6 text-lg text-blue-950">
                            Robo Code Club was founded by passionate software
                            engineers — Kyle, Kent, and Chan — who saw firsthand
                            how fast and disruptive AI is changing the world. We
                            realized that while technology is evolving at an
                            incredible pace, education isn’t keeping up — and
                            kids risk being left behind if we don’t act now.
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-[2] justify-end">
                        <motion.img
                            className="rounded-xl shadow-lg"
                            src={Founders}
                        />
                    </motion.div>
                </motion.div>

                {/* The AI Shift */}
                <motion.div className="mt-24 flex w-full">
                    <motion.div className="flex flex-[2] justify-start">
                        <motion.img
                            className="rounded-xl shadow-lg"
                            src={AIShift}
                        />
                    </motion.div>
                    <motion.div className="flex-[3]">
                        <motion.h1
                            className="text-5xl font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            The AI Shift
                        </motion.h1>

                        <motion.p className="my-6 text-lg text-blue-950">
                            AI is transforming every field — from art and
                            medicine to business and engineering. Whatever path
                            kids choose, they’ll work alongside technology. We
                            believe understanding it early gives them the power
                            to adapt, create, and thrive in the future. CHange
                            the title of this to shorter
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Our Mission */}
                <motion.div className="mt-24 flex w-full">
                    <motion.div className="flex-[3]">
                        <motion.h1
                            className="text-5xl font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Our Mission
                        </motion.h1>

                        <motion.p className="my-6 text-lg text-blue-950">
                            We’re here to equip the next generation with
                            real-world tech skills through fun, hands-on
                            robotics and coding education. By learning through
                            play, every child gains the confidence to navigate —
                            and build — the world of tomorrow.
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-[2] justify-end">
                        <motion.img
                            className="rounded-xl shadow-lg"
                            src={Mission}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
