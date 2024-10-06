'use client';

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'; // Import withAutoplay HOC
import 'react-awesome-slider/dist/styles.css';

// Wrap AwesomeSlider with Autoplay HOC
const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageSlider = ({items}) => {
    return (
        <AutoplaySlider
            play={true}                // Enable autoplay
            cancelOnInteraction={false} // Keep autoplay even when interacting
            interval={15000}            // Set interval to 15 seconds (15000 milliseconds)
            bullets={false}             // Remove the navigation bullets
            buttons={false}             // Remove next/previous buttons
            style={{ height: '100vh' }} // Optional: Set max height to 100vh
        >
            {items}
       </AutoplaySlider>
    );
};

export default ImageSlider;
