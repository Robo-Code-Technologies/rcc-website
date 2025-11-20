import { motion } from 'framer-motion';

import BgMobile from '../../assets/bg-mobile.svg';
import BlobTopMobile2 from '../../assets/blob-top-mobile-2.svg';
import BlobTopMobile from '../../assets/blob-top-mobile.svg';
import EcosysBg from '../../assets/ecosys_bg.svg';
import BottomBlob from '../../assets/ecosys_bottom_blob.svg';
import TopBlob from '../../assets/ecosys_top_blob.svg';
import { VerticalCarousel } from './VerticalCarousel';

interface EcosystemProps {
    showDebug?: boolean;
}

export function Ecosystem({ showDebug = false }: EcosystemProps) {
    return (
        <motion.div className="relative bg-white">
            {/* Mobile: Top blobs - FIRST in vertical flow */}
            <motion.div className="relative w-full lg:hidden">
                {/* Blob 2 - Behind with animation */}
                <motion.img
                    src={BlobTopMobile2}
                    alt="Top Blob 2"
                    className="absolute top-0 left-0 z-0 block w-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                {/* Blob 1 - Front */}
                <img
                    src={BlobTopMobile}
                    alt="Top Blob"
                    className="relative z-10 block w-full"
                />
            </motion.div>

            {/* Mobile + Desktop: Content container - TOPMOST layer */}
            <motion.div className="relative z-50 aspect-[7/2] lg:aspect-[3/2]">
                {/* Mobile: SVG background */}
                <motion.div className="absolute z-0 h-full w-full lg:hidden">
                    <img
                        src={BgMobile}
                        alt="Background"
                        className="h-full w-full object-cover"
                    />
                </motion.div>

                {/* Desktop: Blob backgrounds */}
                <motion.div className="absolute z-0 hidden h-full w-full bg-white lg:block">
                    <motion.img
                        className="absolute -top-4 z-0 h-auto w-full object-cover"
                        src={TopBlob}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.img
                        className="relative z-10 h-auto w-full object-cover"
                        src={EcosysBg}
                    />
                    <motion.img
                        className="absolute right-0 -bottom-10 z-0 h-auto w-full object-cover"
                        src={BottomBlob}
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>

                {/* Original content - commented out */}
                {/* <motion.div className="relative z-10 flex aspect-[3/2] w-full items-center px-24 sm:px-36 md:px-48 lg:px-60">
                <motion.div className="flex w-1/2 justify-center">
                    <VerticalCarousel />
                </motion.div>
                <motion.div className="w-1/2">
                    <motion.h1
                        id="product"
                        className="text-6xl font-bold tracking-wide"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        One ecosystem.
                        <br />
                        Endless way to build!
                    </motion.h1>
                    <motion.p className="mt-5 max-w-[560px] text-lg text-white">
                        We combined{' '}
                        <span
                            className="font-bold"
                            style={{ color: '#F4B860' }}
                        >
                            curriculum, software, and hardware
                        </span>{' '}
                        into one seamless system — making robotics education
                        easy, accessible, and replicable for everyone.
                    </motion.p>
                </motion.div>
            </motion.div> */}

                {/* Ecosystem Section - Restructured 75vw centered with 45-55 split */}
                <motion.div
                    id="product"
                    className="relative z-10 flex aspect-[7/2] w-full items-center lg:aspect-[3/2]"
                >
                    <motion.div
                        className="relative left-1/2 w-[75vw] -translate-x-1/2"
                        style={
                            showDebug
                                ? {
                                      outline: '4px solid cyan',
                                      outlineOffset: '-4px',
                                  }
                                : {}
                        }
                    >
                        {/* Mobile Layout - Stacked vertically */}
                        <motion.div className="flex w-full flex-col lg:hidden">
                            {/* Title */}
                            <div className="px-4 pt-20 text-center">
                                <h1
                                    className="pb-4 text-3xl leading-tight font-bold tracking-wide sm:pb-6 sm:text-4xl md:pb-8 md:text-5xl"
                                    style={{
                                        fontFamily: 'Fredoka',
                                        margin: 0,
                                    }}
                                >
                                    One ecosystem.
                                    <br />
                                    Endless way to build!
                                </h1>
                            </div>

                            {/* Carousel */}
                            <div
                                className="flex w-full items-center justify-center"
                                style={
                                    showDebug
                                        ? {
                                              outline: '2px solid blue',
                                              outlineOffset: '-2px',
                                              padding: 0,
                                              margin: 0,
                                          }
                                        : { padding: 0, margin: 0 }
                                }
                            >
                                <div className="scale-[0.7] sm:scale-75 md:scale-[0.875]">
                                    <VerticalCarousel />
                                </div>
                            </div>

                            {/* Desc */}
                            <div className="px-4 pb-20 text-center">
                                <p
                                    className="mx-auto max-w-full text-base text-white sm:max-w-[540px] sm:text-lg"
                                    style={{ margin: 0 }}
                                >
                                    We combined{' '}
                                    <span
                                        className="font-bold"
                                        style={{ color: '#F4B860' }}
                                    >
                                        curriculum, software, and hardware
                                    </span>{' '}
                                    into one seamless system — making robotics
                                    education easy, accessible, and replicable
                                    for everyone.
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Layout - Side by side */}
                        <motion.div className="hidden w-full lg:flex lg:flex-row">
                            {/* Left Section - 45% - Carousel */}
                            <motion.div
                                className="flex w-[45%] items-center justify-center"
                                style={
                                    showDebug
                                        ? {
                                              outline: '2px solid blue',
                                              outlineOffset: '-2px',
                                          }
                                        : {}
                                }
                            >
                                <div className="scale-75">
                                    <VerticalCarousel />
                                </div>
                            </motion.div>

                            {/* Right Section - 55% - Text */}
                            <motion.div
                                className="flex w-[55%] flex-col justify-center p-12 text-left"
                                style={
                                    showDebug
                                        ? {
                                              outline: '2px solid green',
                                              outlineOffset: '-2px',
                                          }
                                        : {}
                                }
                            >
                                <motion.h1
                                    className="pb-4 font-bold tracking-wide sm:pb-6 md:pb-8"
                                    style={{
                                        fontFamily: 'Fredoka',
                                        fontSize: 'clamp(1.5rem, 5vh, 4rem)',
                                    }}
                                >
                                    One ecosystem.
                                    <br />
                                    Endless way to build!
                                </motion.h1>
                                <motion.p className="mt-4 max-w-full text-base text-white sm:text-lg">
                                    We combined{' '}
                                    <span
                                        className="font-bold"
                                        style={{ color: '#F4B860' }}
                                    >
                                        curriculum, software, and hardware
                                    </span>{' '}
                                    into one seamless system — making robotics
                                    education easy, accessible, and replicable
                                    for everyone.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Mobile: Bottom blobs - LAST in vertical flow (flipped) - at the bottom */}
            <motion.div
                className="relative w-full lg:hidden"
                style={{ transform: 'scaleY(-1)' }}
            >
                {/* Blob 2 - Behind with animation (flipped, way behind content div) */}
                <motion.img
                    src={BlobTopMobile2}
                    alt="Bottom Blob 2"
                    className="absolute top-0 left-0 z-0 block w-full"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                {/* Blob 1 - Front (flipped) */}
                <img
                    src={BlobTopMobile}
                    alt="Bottom Blob"
                    className="relative z-10 block w-full"
                />
            </motion.div>
        </motion.div>
    );
}
