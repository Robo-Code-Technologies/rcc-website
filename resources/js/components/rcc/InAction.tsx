import { motion } from 'framer-motion';
import { ClubInActionGallery } from './ClubInActionGallery';

interface InActionProps {
    showDebug?: boolean;
}

export default function InAction({ showDebug = false }: InActionProps) {
    return (
        <div
            id="impact"
            className="bg-white px-24 py-16 sm:px-36 md:px-48 lg:px-60"
        >
            <div className="relative left-1/2 my-10 w-[75vw] -translate-x-1/2">
                <hr className="h-[1px] border-none bg-gray-200" />
            </div>

            {/* <h1
                className="text-center text-5xl font-bold text-blue-950"
                style={{ fontFamily: 'Fredoka' }}
            >
                Robocode Club in action.
            </h1>
            <p className="mt-4 text-center text-gray-500">
                A glimpse of what we've built so far.
            </p>

            Gallery Grid
            <ClubInActionGallery /> */}

            {/* New 75vw centered div for In Action section */}
            <motion.div
                className="relative left-1/2 w-[75vw] -translate-x-1/2"
                style={
                    showDebug
                        ? {
                              outline: '4px solid indigo',
                              outlineOffset: '-4px',
                          }
                        : {}
                }
            >
                <motion.div className="flex w-full flex-col">
                    {/* Section 1 - Title */}
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
                        <h1
                            className="px-4 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl lg:text-[clamp(1.5rem,5vh,4rem)]"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Robocode Club in action.
                        </h1>
                        <p className="mt-4 px-4 text-center text-base text-gray-500 sm:text-lg">
                            A glimpse of what we've built so far.
                        </p>
                    </motion.div>

                    {/* Section 2 - Gallery Grid */}
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
                        <ClubInActionGallery />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
