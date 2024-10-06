import React from 'react';
import styles from './FlipBoxSection.module.css';
import FlipBox from "./FlipBox"; // Ensure to link the updated CSS

const FlipBoxSection = () => {
    return (
        <section className="py-16">
            <div className={`${styles.flipBoxContainer} container mx-auto`}>
                <div className={styles.column}>
                    <FlipBox
                        image="https://photographyv7-4.b-cdn.net/wp-content/uploads/2023/03/agelesspix-3Sgu87sJMZU-unsplash-600x600.jpg"
                        title="Testimonials"
                        description="Customers feedback"
                        button="View Feedback"
                    />
                </div>
                <div className={styles.column}>
                    <FlipBox
                        image="https://photographyv7-4.b-cdn.net/wp-content/uploads/2023/03/agelesspix-3Sgu87sJMZU-unsplash-600x600.jpg"
                        title="Testimonials"
                        description="Customers feedback"
                        button="View Feedback"
                    />
                </div>
                <div className={styles.column}>
                    <FlipBox
                        image="https://photographyv7-4.b-cdn.net/wp-content/uploads/2023/03/agelesspix-3Sgu87sJMZU-unsplash-600x600.jpg"
                        title="Testimonials"
                        description="Customers feedback"
                        button="View Feedback"
                    />
                </div>
            </div>
        </section>
    );
};

export default FlipBoxSection;
