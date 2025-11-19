import { motion } from 'framer-motion';

import AIShift from '../../assets/ai_shift.png';
import Founders from '../../assets/founders.png';
import Mission from '../../assets/our_mission.png';

import Parents from '../../assets/parents.svg';
import School from '../../assets/school.svg';
import TutorCenter from '../../assets/tutor_center.svg';

interface TargetAudienceProps {
    showDebug?: boolean;
}

export function TargetAudience({ showDebug = false }: TargetAudienceProps) {
    return (
        <motion.div className="bg-white px-24 pt-16 pb-0 sm:px-36 sm:pt-24 md:px-48 md:pt-32 lg:px-60">
            {/* <motion.h1
                id="partners"
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
                <motion.div className="flex min-h-[350px] w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-8 sm:w-1/3">
                    <motion.img className="mb-4 h-24" src={School} />
                    <motion.p className="mb-3 text-center text-2xl font-semibold text-blue-950">
                        Schools
                    </motion.p>
                    <motion.p className="text-center text-base leading-relaxed text-gray-500">
                        Empower classrooms with structured robotics and coding
                        programs aligned with STEM goals.
                    </motion.p>
                </motion.div>
                <motion.div className="flex min-h-[350px] w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-8 sm:w-1/3">
                    <motion.img className="mb-4 h-24" src={TutorCenter} />
                    <motion.p className="mb-3 text-center text-2xl font-semibold text-blue-950">
                        Tutor Centers
                    </motion.p>
                    <motion.p className="text-center text-base leading-relaxed text-gray-500">
                        Enhance your learning programs with robotics kits and
                        guided lessons that is exciting for every student.
                    </motion.p>
                </motion.div>
                <motion.div className="flex min-h-[350px] w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-8 sm:w-1/3">
                    <motion.img className="mb-4 h-24" src={Parents} />
                    <motion.p className="mb-3 text-center text-2xl font-semibold text-blue-950">
                        Parents
                    </motion.p>
                    <motion.p className="text-center text-base leading-relaxed text-gray-500">
                        Bring robotics home with kits and lessons designed to
                        help kids learn, build, and create at their own pace.
                    </motion.p>
                </motion.div>
            </motion.div> */}

            {/* New 75vw centered div - similar to other sections */}
            <motion.div
                className="relative left-1/2 w-[75vw] -translate-x-1/2"
                style={
                    showDebug
                        ? {
                              outline: '4px solid pink',
                              outlineOffset: '-4px',
                          }
                        : {}
                }
            >
                <motion.h1
                    id="partners"
                    className="px-4 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl lg:text-[clamp(1.5rem,5vh,4rem)]"
                    style={{ fontFamily: 'Fredoka' }}
                >
                    For educators and parents
                </motion.h1>
                <motion.p className="mt-4 px-4 text-center text-base text-gray-500 sm:max-w-full sm:px-0 sm:text-lg">
                    We partner with schools, tutor centers, and families to make
                    robotics education simple, engaging, and future-ready.
                </motion.p>

                <motion.div className="mx-auto mt-8 flex w-full flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-4 md:gap-6 lg:mt-16 lg:w-[70%] lg:gap-8">
                    <motion.div className="flex min-h-[250px] w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-6 sm:min-h-[300px] sm:w-1/3 sm:pl-8 md:p-8 md:pl-10 lg:min-h-[350px] lg:pl-12">
                        <motion.img
                            className="mb-4 h-16 sm:h-20 md:h-24"
                            src={School}
                        />
                        <motion.p className="mb-3 text-center text-xl font-semibold text-blue-950 sm:text-2xl">
                            Schools
                        </motion.p>
                        <motion.p className="text-center text-sm leading-relaxed text-gray-500 sm:text-base">
                            Empower classrooms with structured robotics and
                            coding programs aligned with STEM goals.
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex min-h-[250px] w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-6 sm:min-h-[300px] sm:w-1/3 md:p-8 lg:min-h-[350px]">
                        <motion.img
                            className="mb-4 h-16 sm:h-20 md:h-24"
                            src={TutorCenter}
                        />
                        <motion.p className="mb-3 text-center text-xl font-semibold text-blue-950 sm:text-2xl">
                            Tutor Centers
                        </motion.p>
                        <motion.p className="text-center text-sm leading-relaxed text-gray-500 sm:text-base">
                            Enhance your learning programs with robotics kits
                            and guided lessons that is exciting for every
                            student.
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex min-h-[250px] w-full flex-col items-center justify-start rounded-lg border border-blue-950/20 p-6 sm:min-h-[300px] sm:w-1/3 sm:pr-8 md:p-8 md:pr-10 lg:min-h-[350px] lg:pr-12">
                        <motion.img
                            className="mb-4 h-16 sm:h-20 md:h-24"
                            src={Parents}
                        />
                        <motion.p className="mb-3 text-center text-xl font-semibold text-blue-950 sm:text-2xl">
                            Parents
                        </motion.p>
                        <motion.p className="text-center text-sm leading-relaxed text-gray-500 sm:text-base">
                            Bring robotics home with kits and lessons designed
                            to help kids learn, build, and create at their own
                            pace.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="relative left-1/2 my-10 w-[75vw] -translate-x-1/2">
                <hr className="h-[1px] border-none bg-gray-200" />
            </div>

            {/* <div id="team">
                <motion.h1
                    className="px-4 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl"
                    style={{ fontFamily: 'Fredoka' }}
                >
                    Our Team & Our Story
                </motion.h1>

                <motion.p className="mt-2 px-4 text-center text-base text-gray-400 sm:text-lg">
                    Our mission, our vision & our motivation!
                </motion.p>

                <motion.div className="mt-12 px-24 pb-16 sm:px-36 md:px-48 lg:px-60">
                    Founders
                    <motion.div className="mx-auto max-w-6xl p-0 px-16">
                        <motion.div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
                            <motion.div className="order-2 flex-1 lg:order-1 lg:pr-8">
                                <motion.h1
                                    className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                                    style={{ fontFamily: 'Fredoka' }}
                                >
                                    Where It All Began
                                </motion.h1>

                                <motion.p className="mt-3 text-center text-base leading-relaxed text-blue-950 sm:text-lg lg:text-left">
                                    Robo Code Club was founded by passionate
                                    software engineers — Kyle, Kent, and Chan —
                                    who saw firsthand how fast and disruptive AI
                                    is changing the world. We realized that
                                    while technology is evolving at an
                                    incredible pace, education isn't keeping up
                                    — and kids risk being left behind if we
                                    don't act now.
                                </motion.p>
                            </motion.div>
                            <motion.div className="order-1 flex-shrink-0 lg:order-2">
                                <motion.img
                                    className="w-full max-w-xs rounded-lg shadow-md"
                                    src={Founders}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    The AI Shift
                    <motion.div className="mx-auto mt-12 max-w-6xl p-0 px-16">
                        <motion.div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
                            <motion.div className="order-1 flex-shrink-0">
                                <motion.img
                                    className="w-full max-w-xs rounded-lg shadow-md"
                                    src={AIShift}
                                />
                            </motion.div>
                            <motion.div className="order-2 flex-1 lg:pl-8">
                                <motion.h1
                                    className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                                    style={{ fontFamily: 'Fredoka' }}
                                >
                                    The AI Shift
                                </motion.h1>

                                <motion.p className="mt-3 text-center text-base leading-relaxed text-blue-950 sm:text-lg lg:text-left">
                                    AI is transforming every field — from art
                                    and medicine to business and engineering.
                                    Whatever path kids choose, they'll work
                                    alongside technology. We believe
                                    understanding it early gives them the power
                                    to adapt, create, and thrive in the future.
                                    CHange the title of this to shorter
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    Our Mission
                    <motion.div className="mx-auto mt-12 max-w-6xl p-0 px-16">
                        <motion.div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
                            <motion.div className="order-2 flex-1 lg:order-1 lg:pr-8">
                                <motion.h1
                                    className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                                    style={{ fontFamily: 'Fredoka' }}
                                >
                                    Our Mission
                                </motion.h1>

                                <motion.p className="mt-3 text-center text-base leading-relaxed text-blue-950 sm:text-lg lg:text-left">
                                    We're here to equip the next generation with
                                    real-world tech skills through fun, hands-on
                                    robotics and coding education. By learning
                                    through play, every child gains the
                                    confidence to navigate — and build — the
                                    world of tomorrow.
                                </motion.p>
                            </motion.div>
                            <motion.div className="order-1 flex-shrink-0 lg:order-2">
                                <motion.img
                                    className="w-full max-w-xs rounded-lg shadow-md"
                                    src={Mission}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div> */}

            {/* New 75vw centered div for Our Team & Our Story */}
            <div id="team">
                <motion.div
                    className="relative left-1/2 w-[75vw] -translate-x-1/2"
                    style={
                        showDebug
                            ? {
                                  outline: '4px solid teal',
                                  outlineOffset: '-4px',
                              }
                            : {}
                    }
                >
                    <motion.div className="flex w-full flex-col">
                        {/* Section 1 - Header */}
                        <motion.div
                            className="w-full"
                            style={
                                showDebug
                                    ? {
                                          outline: '2px solid red',
                                          outlineOffset: '-2px',
                                      }
                                    : {}
                            }
                        >
                            <motion.h1
                                className="px-4 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl lg:text-[clamp(1.5rem,5vh,4rem)]"
                                style={{ fontFamily: 'Fredoka' }}
                            >
                                Our Team & Our Story
                            </motion.h1>
                            <motion.p className="mt-2 px-4 text-center text-base text-gray-400 sm:text-lg">
                                Our mission, our vision & our motivation!
                            </motion.p>
                        </motion.div>

                        {/* Section 2 - Where It All Began */}
                        <motion.div
                            className="w-full"
                            style={
                                showDebug
                                    ? {
                                          outline: '2px solid blue',
                                          outlineOffset: '-2px',
                                      }
                                    : {}
                            }
                        >
                            <motion.div className="flex w-full flex-col lg:flex-row">
                                {/* Column 1 - 10% */}
                                <motion.div
                                    className="w-full p-2 lg:w-[10%]"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid red',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    {/* Empty spacer column */}
                                </motion.div>

                                {/* Column 2 - 50% Text Content */}
                                <motion.div
                                    className="order-2 flex w-full flex-col justify-center p-6 lg:order-none lg:w-[50%] lg:p-12"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid purple',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    <motion.h1
                                        className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                                        style={{ fontFamily: 'Fredoka' }}
                                    >
                                        Where It All Began
                                    </motion.h1>

                                    <motion.p className="mt-3 text-center text-base leading-relaxed text-blue-950 sm:text-lg lg:text-left">
                                        Robo Code Club was founded by passionate
                                        software engineers — Kyle, Kent, and Chan —
                                        who saw firsthand how fast and disruptive AI
                                        is changing the world. We realized that
                                        while technology is evolving at an
                                        incredible pace, education isn't keeping up
                                        — and kids risk being left behind if we
                                        don't act now.
                                    </motion.p>
                                </motion.div>

                                {/* Column 3 - 30% Image */}
                                <motion.div
                                    className="order-1 flex w-full items-center justify-center p-6 lg:order-none lg:w-[30%] lg:p-12"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid orange',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    <motion.img
                                        className="w-full max-w-xs rounded-lg shadow-md lg:max-w-full"
                                        src={Founders}
                                        alt="Founders"
                                    />
                                </motion.div>

                                {/* Column 4 - 10% */}
                                <motion.div
                                    className="w-full p-2 lg:w-[10%]"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid lime',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    {/* Empty spacer column */}
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Section 3 - The AI Shift */}
                        <motion.div
                            className="w-full"
                            style={
                                showDebug
                                    ? {
                                          outline: '2px solid green',
                                          outlineOffset: '-2px',
                                      }
                                    : {}
                            }
                        >
                            <motion.div className="flex w-full flex-col lg:flex-row">
                                {/* Column 1 - 10% */}
                                <motion.div
                                    className="w-full p-2 lg:w-[10%]"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid red',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    {/* Empty spacer column */}
                                </motion.div>

                                {/* Column 2 - 30% Image */}
                                <motion.div
                                    className="order-1 flex w-full items-center justify-center p-6 lg:order-none lg:w-[30%] lg:p-12"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid cyan',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    <motion.img
                                        className="w-full max-w-xs rounded-lg shadow-md lg:max-w-full"
                                        src={AIShift}
                                        alt="The AI Shift"
                                    />
                                </motion.div>

                                {/* Column 3 - 50% Text Content */}
                                <motion.div
                                    className="order-2 flex w-full flex-col justify-center p-6 lg:order-none lg:w-[50%] lg:p-12"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid magenta',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    <motion.h1
                                        className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                                        style={{ fontFamily: 'Fredoka' }}
                                    >
                                        The AI Shift
                                    </motion.h1>

                                    <motion.p className="mt-3 text-center text-base leading-relaxed text-blue-950 sm:text-lg lg:text-left">
                                        AI is transforming every field — from art
                                        and medicine to business and engineering.
                                        Whatever path kids choose, they'll work
                                        alongside technology. We believe
                                        understanding it early gives them the power
                                        to adapt, create, and thrive in the future.
                                    </motion.p>
                                </motion.div>

                                {/* Column 4 - 10% */}
                                <motion.div
                                    className="w-full p-2 lg:w-[10%]"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid lime',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    {/* Empty spacer column */}
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Section 4 - Our Mission */}
                        <motion.div
                            className="w-full"
                            style={
                                showDebug
                                    ? {
                                          outline: '2px solid yellow',
                                          outlineOffset: '-2px',
                                      }
                                    : {}
                            }
                        >
                            <motion.div className="flex w-full flex-col lg:flex-row">
                                {/* Column 1 - 10% */}
                                <motion.div
                                    className="w-full p-2 lg:w-[10%]"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid red',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    {/* Empty spacer column */}
                                </motion.div>

                                {/* Column 2 - 50% Text Content */}
                                <motion.div
                                    className="order-2 flex w-full flex-col justify-center p-6 lg:order-none lg:w-[50%] lg:p-12"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid purple',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    <motion.h1
                                        className="text-center text-2xl font-bold text-blue-950 sm:text-3xl lg:text-left lg:text-4xl"
                                        style={{ fontFamily: 'Fredoka' }}
                                    >
                                        Our Mission
                                    </motion.h1>

                                    <motion.p className="mt-3 text-center text-base leading-relaxed text-blue-950 sm:text-lg lg:text-left">
                                        We're here to equip the next generation with
                                        real-world tech skills through fun, hands-on
                                        robotics and coding education. By learning
                                        through play, every child gains the
                                        confidence to navigate — and build — the
                                        world of tomorrow.
                                    </motion.p>
                                </motion.div>

                                {/* Column 3 - 30% Image */}
                                <motion.div
                                    className="order-1 flex w-full items-center justify-center p-6 lg:order-none lg:w-[30%] lg:p-12"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid orange',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    <motion.img
                                        className="w-full max-w-xs rounded-lg shadow-md lg:max-w-full"
                                        src={Mission}
                                        alt="Our Mission"
                                    />
                                </motion.div>

                                {/* Column 4 - 10% */}
                                <motion.div
                                    className="w-full p-2 lg:w-[10%]"
                                    style={
                                        showDebug
                                            ? {
                                                  outline: '2px solid lime',
                                                  outlineOffset: '-2px',
                                              }
                                            : {}
                                    }
                                >
                                    {/* Empty spacer column */}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
