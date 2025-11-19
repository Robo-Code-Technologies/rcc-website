import { motion } from 'framer-motion';

export function ClubInActionGallery() {
    // Placeholder image - will be replaced with actual photos
    const placeholderBg = '#9CA3AF'; // Gray-400 placeholder

    return (
        <div className="w-full bg-white pt-12">
            <div className="container mx-auto px-4">
                {/* 2x8 on mobile, 4x4 on desktop Gallery Grid */}
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {/* Row 1 - Full opacity */}
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={`row1-${item}`}
                                className="aspect-square w-full rounded-2xl"
                                style={{ backgroundColor: placeholderBg }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Placeholder for image */}
                                <div className="flex h-full w-full items-center justify-center text-gray-400">
                                    Photo {item}
                                </div>
                            </motion.div>
                        ))}

                        {/* Row 2 - 75% opacity */}
                        {[5, 6, 7, 8].map((item) => (
                            <motion.div
                                key={`row2-${item}`}
                                className="aspect-square w-full rounded-2xl opacity-75"
                                style={{ backgroundColor: placeholderBg }}
                                whileHover={{ scale: 1.05, opacity: 0.85 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Placeholder for image */}
                                <div className="flex h-full w-full items-center justify-center text-gray-400">
                                    Photo {item}
                                </div>
                            </motion.div>
                        ))}

                        {/* Row 3 - 50% opacity */}
                        {[9, 10, 11, 12].map((item) => (
                            <motion.div
                                key={`row3-${item}`}
                                className="aspect-square w-full rounded-2xl opacity-50"
                                style={{ backgroundColor: placeholderBg }}
                                whileHover={{ scale: 1.05, opacity: 0.65 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Placeholder for image */}
                                <div className="flex h-full w-full items-center justify-center text-gray-400">
                                    Photo {item}
                                </div>
                            </motion.div>
                        ))}

                        {/* Row 4 - 25% opacity (3/4 transparent = 1/4 visible) */}
                        {[13, 14, 15, 16].map((item) => (
                            <motion.div
                                key={`row4-${item}`}
                                className="aspect-square w-full rounded-2xl opacity-25"
                                style={{ backgroundColor: placeholderBg }}
                                whileHover={{ scale: 1.05, opacity: 0.4 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Placeholder for image */}
                                <div className="flex h-full w-full items-center justify-center text-gray-400">
                                    Photo {item}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
