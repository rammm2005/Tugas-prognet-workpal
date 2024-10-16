import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';

const ImageUpload = ({ name, existingImageUrl, onChange }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (existingImageUrl instanceof File) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(existingImageUrl);
        } else if (existingImageUrl) {
            setSelectedImage(existingImageUrl);
        } else {
            setSelectedImage(null);
        }
    }, [existingImageUrl]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                onChange(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        onChange(null);
    };

    return (
        <div>
            <label
                htmlFor={name}
                className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
            >
                {selectedImage ? (
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Uploaded"
                            className="w-[22rem] h-[12rem] mb-2 object-cover rounded-lg shadow-md"
                        />
                        <button
                            type="button"
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
                            onClick={handleRemoveImage}
                        >
                            <FiTrash2 size={20} className="text-red-600" /> 
                        </button>
                    </div>
                ) : (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-11 mb-2 fill-gray-500"
                            viewBox="0 0 32 32"
                        >
                            <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000"
                            />
                            <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000"
                            />
                        </svg>
                        Upload file
                        <input
                            type="file"
                            id={name}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <p className="text-xs font-medium text-gray-400 mt-2">
                            PNG, JPG, SVG, WEBP, and GIF are Allowed.
                        </p>
                    </>
                )}
            </label>
        </div>
    );
};

export default ImageUpload;
