import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import Image1 from '../../assets/carousel_pics/image_1.jpg';
import Image2 from '../../assets/carousel_pics/image_2.jpg';
import Image3 from '../../assets/carousel_pics/image_3.jpg';
import Image4 from '../../assets/carousel_pics/image_4.jpg';
import Image5 from '../../assets/carousel_pics/image_5.jpg';
import Image6 from '../../assets/carousel_pics/image_6.jpg';
import Image7 from '../../assets/carousel_pics/image_7.jpg';
import Image8 from '../../assets/carousel_pics/image_8.jpg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

export default function InAction() {
    return (
        <div className="bg-white">
            <h1
                className="text-center text-5xl font-bold text-blue-950"
                style={{ fontFamily: 'Fredoka' }}
            >
                Robocode Club in action.
            </h1>
            <p className="mt-4 mb-12 text-center text-gray-500">
                A glimpse of what we've built so far.
            </p>

            <Swiper
                className="max-w-[800px] overflow-hidden rounded-2xl shadow-xl"
                direction="horizontal"
                modules={[Pagination]}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-[17/9] overflow-hidden">
                            <img
                                className="max-h-96 w-full rounded-2xl object-cover"
                                src={image}
                                alt={"Robocode Club in Action: " + index}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
