import React from 'react';

interface ImageRowProps {
    imageUrl: string;
    numImages: number;
    opacity: number;
    middleImageUrl: string;
}

const ImageRow: React.FC<ImageRowProps> = ({ imageUrl, numImages, opacity, middleImageUrl }) => {
    const imageArray = Array.from({ length: numImages });

    return (
        <>
            <p className='text-slate-300 text-center mt-5 mb-5'>Leading the charge for Industries!</p>
            <div className="flex justify-center">
                {imageArray.map((_, index) => (
                    <div
                        key={index}
                        style={{
                            opacity: index !== Math.floor(numImages / 2) ? opacity / 100 : 1,
                        }}
                        className="mx-2"
                    >
                        <img
                            src={index === Math.floor(numImages / 2) ? middleImageUrl : imageUrl}
                            alt={`Image ${index + 1}`}
                            className="max-w-full"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ImageRow;