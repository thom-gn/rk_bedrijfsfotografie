"use client";

// components/Testimonials.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
import styles from "@/components/testimonals/Testimonials.module.css";

// Install the autoplay module
SwiperCore.use([Autoplay]);

const Testimonials = () => {
  // Define your image URLs
    const testimonials = [
        {
            text: "Thank you is simply not enough. You have captured moments that our family will treasure forever. Such a pleasure to know you. We are looking forward to seeing you at our next family event.",
            name: "Ann Doe",
            designation: "Marketing - ThemeGoods",
            image: "https://photographyv7-4.b-cdn.net/wp-content/uploads/2022/12/photo-1422544834386-d121ef7c6ea8-150x150.jpg"
        },
        {
            text: "This was an amazing experience! Highly recommend for anyone looking to capture special moments.",
            name: "John Smith",
            designation: "CEO - Company",
            image: "https://photographyv7-4.b-cdn.net/wp-content/uploads/2022/12/photo-1422544834386-d121ef7c6ea8-150x150.jpg"
        },
        // Add more testimonials as needed
    ];
  return (
      <section className="py-16 testimonial-section">
          <div className="container mx-auto">
              <Swiper
                  spaceBetween={50}        // Space between slides
                  slidesPerView={1}        // Number of slides to show per view
                  autoplay={{
                    delay: 20000,        // Delay between transitions in milliseconds
                    disableOnInteraction: false, // Allow autoplay to continue after user interaction
                  }}
              >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.innerBox}>
                            <div className={styles.text}>{testimonial.text}</div>
                            <div className={styles.infoBox}>
                                <div className="thumb">
                                    <img
                                        className={styles.thumbImg}
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                </div>
                                <h4 className="name">{testimonial.name}</h4>
                                <span className="designation">
                                        {testimonial.designation}
                                    </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
              </Swiper>
          </div>
      </section>
  );
};

export default Testimonials;
