"use client"
// Import necessary libraries and components
import React from 'react';
import Masonry  from 'react-responsive-masonry';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css'; // Include PhotoSwipe's CSS

// Define the image URLs
const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
];

// Create the gallery component
const MaisonGrid = () => {
    return (
        <section className="py-16 photography-section">
            <div className=" mx-auto" style={{"padding":"0px 30px 0px 30px"}}>
                <Gallery>
                    <Masonry gutter="20px">
                        {images.map((image, index) => (
                            <div key={index} style={{ cursor: 'pointer' }}>
                                {/* PhotoSwipe Item */}
                                <Item
                                    original={image}
                                    thumbnail={image}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open} // Opens the lightbox when clicked
                                            src={image}
                                            alt={`Gallery Image ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                display: 'block',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    )}
                                </Item>
                            </div>
                        ))}
                    </Masonry>
                </Gallery>
            </div>
        </section>
    );
};

export default MaisonGrid;
