import { motion } from 'framer-motion';

import Blob1 from '../../assets/blob_1.svg';
import Blob2 from '../../assets/blob_2.svg';
import Blob3 from '../../assets/blob_3.svg';
import Blob4 from '../../assets/blob_4.svg';
import LeftBackgroundBlob from '../../assets/left_blob_bg.svg';
import LeftForegroundBlob from '../../assets/left_blog_fg.svg';
import RightBackgroundBlob from '../../assets/right_blob_bg.svg';
import RightForegroundBlob from '../../assets/right_blob_fg.svg';

const floatingAnimation = {
    repeat: Infinity,
    repeatType: 'mirror' as const,
    ease: 'easeInOut' as const
};

const rotatingAnimation = {
    repeat: Infinity,
    ease: 'easeInOut' as const
};

export function Blobs() {
    return (
        <>
            {/* Large Background Blobs */}
            <motion.img
                src={LeftForegroundBlob}
                alt="RoboCode Foreground Blob"
                className="pointer-events-none absolute left-0 z-1 select-none hidden sm:block max-h-full"
                animate={{
                    y: [0, -10, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 5,
                    ...floatingAnimation
                }}
            />
            <motion.img
                src={LeftBackgroundBlob}
                alt="RoboCode Background Blob"
                className="pointer-events-none absolute left-0 z-0 select-none hidden sm:block max-h-full"
                animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                }}
                transition={{
                    duration: 6,
                    delay: 0.5,
                    ...floatingAnimation
                }}
            />
            <motion.img
                src={RightBackgroundBlob}
                alt="RoboCode Background Blob"
                className="pointer-events-none absolute right-0 z-0 select-none hidden sm:block max-h-full"
                animate={{
                    y: [0, -12, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 7,
                    delay: 0.2,
                    ...floatingAnimation
                }}
            />
            <motion.img
                src={RightForegroundBlob}
                alt="RoboCode Foreground Blob"
                className="pointer-events-none absolute right-0 z-1 select-none hidden sm:block max-h-full"
                animate={{
                    y: [0, 18, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 4.5,
                    delay: 0.8,
                    ...floatingAnimation
                }}
            />

            {/* Small Decorative Blobs */}
            <motion.img
                src={Blob4}
                className="absolute bottom-16 left-4 sm:left-16 md:left-32 lg:left-96 w-8 sm:w-12 md:w-16 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 360, 180],
                    x: [0, 3, -2, 4, 0, 2, -1, 3, -2, 0],
                    y: [0, -2, 3, -1, 0, 2, -3, 1, -1, 0],
                }}
                transition={{
                    duration: 10,
                    ...rotatingAnimation
                }}
            />
            <motion.img
                src={Blob3}
                className="absolute bottom-32 sm:bottom-48 md:bottom-64 left-2 sm:left-8 md:left-16 lg:left-32 w-6 sm:w-10 md:w-12 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 180, 360, 180],
                    x: [0, -3, 2, -2, 0, 1, -2, 3, -1, 0],
                    y: [0, 4, -3, 2, 0, -2, 3, -2, 1, 0],
                }}
                transition={{
                    duration: 10,
                    delay: 2.5,
                    ...rotatingAnimation
                }}
            />
            <motion.img
                src={Blob2}
                className="absolute top-32 sm:top-40 md:top-48 right-4 sm:right-16 md:right-32 lg:right-96 w-8 sm:w-12 md:w-16 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 540, 180, 360],
                    x: [0, 4, -3, 2, 0, -3, 4, -2, 1, 0],
                    y: [0, -4, 5, -2, 0, 3, -4, 2, -1, 0],
                }}
                transition={{
                    duration: 10,
                    delay: 5,
                    ...rotatingAnimation
                }}
            />
            <motion.img
                src={Blob1}
                className="absolute right-4 sm:right-12 md:right-24 lg:right-48 bottom-24 sm:bottom-32 md:bottom-48 w-6 sm:w-10 md:w-12 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 360, 180, 720],
                    x: [0, -5, 3, -2, 0, 3, -4, 2, -2, 0],
                    y: [0, 3, -4, 2, 0, -3, 4, -1, 2, 0],
                }}
                transition={{
                    duration: 10,
                    delay: 7.5,
                    ...rotatingAnimation
                }}
            />
        </>
    );
}