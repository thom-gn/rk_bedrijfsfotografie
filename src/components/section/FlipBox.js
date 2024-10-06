import React from 'react';
import Button from '../button/Button';
import styles from './FlipBox.module.css';


const FlipBox = ({image,title,description,button}) => {
return(
    <div className={styles['flip-box-wrapper']}>
        {/* Front Side */}
        <div
            className={styles.square}
            style={{
                backgroundImage:`url(${image})`
            }}
        >
            <div className={styles.squareContainer}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.flipOverlay}></div>
        </div>
        {/* Back Side */}
        <div
            className={styles.square2}
            style={{
                backgroundImage:`url(${image})`
            }}
        >
            <div className={styles.squareContainer2}>
                <div className="align-center"></div>
                <Button
                    text={button}
                    transparent={true}
                />
            </div>
            <div className={styles.flipOverlay}></div>
        </div>
    </div>
)
}

export default FlipBox;
