import { motion } from 'framer-motion';

// Import images from carousel_pics
import img1 from '../../assets/carousel_pics/20250704_165753.jpg';
import img2 from '../../assets/carousel_pics/20250715_132803.jpg';
import img3 from '../../assets/carousel_pics/20250806_131301.jpg';
import img4 from '../../assets/carousel_pics/20250806_151752.jpg';
import img5 from '../../assets/carousel_pics/20250819_162127.jpg';
import img6 from '../../assets/carousel_pics/20250820_161712.jpg';
import img7 from '../../assets/carousel_pics/20250820_162512.jpg';
import img8 from '../../assets/carousel_pics/20250820_172819.jpg';
import img9 from '../../assets/carousel_pics/20250822_155522.jpg';
import img10 from '../../assets/carousel_pics/20250822_161651.jpg';
import img11 from '../../assets/carousel_pics/20250822_164953.jpg';
import img12 from '../../assets/carousel_pics/20250902_141347.jpg';
import img13 from '../../assets/carousel_pics/550732423_1490578915553601_5123361148296814754_n.jpg';
import img15 from '../../assets/carousel_pics/15.png';
import img16 from '../../assets/carousel_pics/16.png';
import img17 from '../../assets/carousel_pics/17.png';

export function ClubInActionGallery() {
    // Gallery items with all images filled in
    const galleryItems = [
        { image: img7 },
        { image: img10 },
        { image: img15 }, // Added 15.png
        { image: img3 },
        { image: img13 },
        { image: img2 },
        { image: img6 },
        { image: img16 }, // Added 16.png
        { image: img17 }, // Swapped with position 13
        { image: img1 }, // Swapped with position 9
        { image: img5 },
        { image: img9 },
        { image: img4 }, // Swapped with position 9
        { image: img8 },
        { image: img12 },
        { image: img11 },
    ];

    return (
        <div className="w-full bg-white pt-12">
            <div className="container mx-auto px-4">
                {/* 2x8 on mobile, 4x4 on desktop Gallery Grid */}
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={`gallery-${index}`}
                                className="aspect-square w-full overflow-hidden rounded-2xl"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={item.image}
                                    alt={`Robocode Club Activity ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
