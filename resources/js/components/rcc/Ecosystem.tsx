import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';

import EcosysBg from '../../assets/ecosys_bg.svg';
import Bot from '../../assets/ecosys_bot.png';
import BottomBlob from '../../assets/ecosys_bottom_blob.svg';
import Elearning from '../../assets/ecosys_elearning.png';
import Path from '../../assets/ecosys_path.png';
import TopBlob from '../../assets/ecosys_top_blob.svg';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

export function Ecosystem() {
    return (
        <motion.div className="relative aspect-[3/2] bg-white">
            <motion.div className="absolute z-0 bg-white w-full">
                <motion.img
                    className="object-cover w-full absolute -top-4 z-0"
                    src={TopBlob}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.img className="relative object-cover w-full z-10" src={EcosysBg} />
                <motion.img
                    className="absolute right-0 -bottom-10 z-0"
                    src={BottomBlob}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>

            <motion.div className="relative z-10 flex aspect-[3/2] w-full items-center">
                <motion.div className="w-1/2">
                    <Swiper
                        loop={true}
                        className="h-[calc(min(450px,35vw))] w-[calc(min(450px,35vw))] rounded-xl"
                        direction="vertical"
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectCreative, Autoplay, Pagination]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        effect="creative"
                        creativeEffect={{
                            prev: {
                                scale: 0.8,
                                opacity: 0,
                                translate: [0, '-100%', 0],
                            },
                            next: {
                                scale: 0.8,
                                opacity: 0,
                                translate: [0, '100%', 0],
                            },
                        }}
                    >
                        <SwiperSlide>
                            <motion.div className="flex h-full flex-col items-center rounded-xl bg-white p-10">
                                <motion.img
                                    src={Elearning}
                                    className="mb-6 h-36"
                                />
                                <motion.h1
                                    className="text-xl font-bold text-blue-950"
                                    style={{ fontFamily: 'Fredoka' }}
                                >
                                    Robo Code Learn
                                </motion.h1>
                                <motion.p className="text-gray-500">
                                    (e-Learning Hub)
                                </motion.p>
                                <motion.p className="mt-6 text-center text-gray-500">
                                    Our learning platform gives students guided
                                    lessons, interactive challenges, and
                                    progress tracking so they can learn at their
                                    own pace.
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div className="flex h-full flex-col items-center rounded-xl bg-white p-10">
                                <motion.img src={Bot} className="mb-6 h-36" />
                                <motion.h1
                                    className="text-xl font-bold text-blue-950"
                                    style={{ fontFamily: 'Fredoka' }}
                                >
                                    Robo Code Bot
                                </motion.h1>
                                <motion.p className="text-gray-500">
                                    (Robotic Kits)
                                </motion.p>
                                <motion.p className="mt-6 text-center text-gray-500">
                                    Our learning platform gives students guided
                                    lessons, interactive challenges, and
                                    progress tracking so they can learn at their
                                    own pace.
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div className="flex h-full flex-col items-center rounded-xl bg-white p-10">
                                <motion.img src={Path} className="mb-6 h-36" />
                                <motion.h1
                                    className="text-xl font-bold text-blue-950"
                                    style={{ fontFamily: 'Fredoka' }}
                                >
                                    Robo Code Learn
                                </motion.h1>
                                <motion.p className="text-gray-500">
                                    (e-Learning Hub)
                                </motion.p>
                                <motion.p className="mt-6 text-center text-gray-500">
                                    Our learning platform gives students guided
                                    lessons, interactive challenges, and
                                    progress tracking so they can learn at their
                                    own pace.
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
                <motion.div className="w-1/2">
                    <motion.h1
                        className="text-6xl font-bold tracking-wide"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        One ecosystem.
                        <br />
                        Endless way to build!
                    </motion.h1>
                    <motion.p className='max-w-[560px] text-lg text-gray-400 mt-5'>
                        We combined curriculum, software, and hardware into one
                        seamless system — making robotics education easy,
                        accessible, and replicable for everyone.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
