import React from 'react';
import styles from './PhotographySecion.module.css';

const PhotographySection = () => {
    return (
        <section className="py-16 photography-section">
            <div className={`${styles.photographyContainer} container mx-auto`}>
                <div className={styles.column}>
                    <div className={styles.widgetWrap}>
                        <div className="heading">
                            <div className="widget-container">
                                <h2 className={`${styles.h2Style} heading-title`}>Creating memories that last a lifetime</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.column} ${styles.border}` }>
                    <div className={styles.widgetWrap}>
                        <div className="heading">
                            <div className="widget-container">
                                <h2 className={`${styles.rightManStyle} heading-title`}>Jane Doe</h2>
                            </div>
                        </div>
                        <div className="widget-text-editor">
                            <div className="widget-container">
                                <p className={styles.pStyle}>Editorial Photography & Video Production</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.widgetWrap}>
                        <div className="widget-text-editor">
                            <div className="widget-container">
                                <p>We believe that photography is not just a profession, but a form of art that requires dedication, skill, and creativity. Our passion for photography is reflected in our work, and we strive to deliver exceptional results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotographySection;
