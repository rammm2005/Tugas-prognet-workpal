import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const initialData = [
    {
        id: 1,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c42e6a0e785d0f1a7eaca7d4c982c9f6-1728147885/14-1723694sj-190%20Fawn%20Cove%20%2813%29_1500_.jpg',
        description: 'Living room with a mountain view',
        author: 'John Doe',
        category: 'Furniture',
    },
    {
        id: 2,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/ac33961cf2c03cd99eb845598b720453-1727519049/Desert%20Finds-01.jpg',
        description: 'Modern interior design',
        author: 'Jane Smith',
        category: 'Interior',
    },
    {
        id: 1,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c42e6a0e785d0f1a7eaca7d4c982c9f6-1728147885/14-1723694sj-190%20Fawn%20Cove%20%2813%29_1500_.jpg',
        description: 'Living room with a mountain view',
        author: 'John Doe',
        category: 'Furniture',
    },
    {
        id: 2,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/ac33961cf2c03cd99eb845598b720453-1727519049/Desert%20Finds-01.jpg',
        description: 'Modern interior design',
        author: 'Jane Smith',
        category: 'Interior',
    },
    {
        id: 1,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c42e6a0e785d0f1a7eaca7d4c982c9f6-1728147885/14-1723694sj-190%20Fawn%20Cove%20%2813%29_1500_.jpg',
        description: 'Living room with a mountain view',
        author: 'John Doe',
        category: 'Furniture',
    },
    {
        id: 2,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/ac33961cf2c03cd99eb845598b720453-1727519049/Desert%20Finds-01.jpg',
        description: 'Modern interior design',
        author: 'Jane Smith',
        category: 'Interior',
    },
    {
        id: 1,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c42e6a0e785d0f1a7eaca7d4c982c9f6-1728147885/14-1723694sj-190%20Fawn%20Cove%20%2813%29_1500_.jpg',
        description: 'Living room with a mountain view',
        author: 'John Doe',
        category: 'Furniture',
    },
    {
        id: 1,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/66b76d2990b01f3853aecd1a0673b289-1726487256/B1F83EE7-EE19-401D-8D70-9C37BF5F59B7.jpeg',
        description: 'Living room with a mountain view',
        author: 'John Doe',
        category: 'Furniture',
    },
    {
        id: 2,
        image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/788d44b18390f5805e1114ce1020db48-1726649571/5_Interactive%20LightMix.jpg',
        description: 'Modern interior design',
        author: 'Jane Smith',
        category: 'Interior',
    },

];

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const ImageGrid = () => {
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        setImageData(shuffleArray(initialData));
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-10">Di Buat Oleh Freelance Workpal.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {imageData.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow cursor-pointer rounded-lg overflow-hidden group transform transition-all duration-500 ease-in-out hover:scale-105"
                    >
                        <img
                            src={item.image}
                            alt={item.description}
                            className="w-full h-64 object-cover"
                        />

                        <div className='p-3 rounded-full bg-white absolute shadow-lg border border-slate-100 top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                            <FaHeart className="" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-sm font-semibold">
                                Featured in: <span className="font-normal">{item.category}</span>
                            </h3>
                            <p className="text-xs mt-1">by: {item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;
