// SliderItems.js
import TypingAnimation from "../animations/TypingAnimation";
import Button from "@/components/button/Button";
import styles from "./SliderItems.module.css";

const SliderItems = () => {
    return [
        <div key="1" data-src="/images/alvin-balemesa.jpg">
            <div className={styles.imageContentContainer}>
                <section></section>
                <section className={styles.fullWidth}>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <h1 className={styles.titleHeader}>Photography</h1>
                    </div>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <h1 className={styles.titleHeader}>That tells your</h1>
                    </div>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <span className={styles.titleHeader}>
                            <TypingAnimation />
                        </span>
                    </div>
                </section>
                <section className={styles.buttonSection}>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <div className={styles.buttonContainer}>
                            <Button text="Bekijk Portfolio" transparent={true}  />
                            <span className={styles.text}>Capturing life’s precious moments</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>,
        <div key="2" data-src="/images/claudio-schwarz.jpg">
            <div className={styles.imageContentContainer}>
                <section></section>
                <section className={styles.fullWidth}>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <h1 className={styles.titleHeader}>Photography</h1>
                    </div>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <h1 className={styles.titleHeader}>That tells your</h1>
                    </div>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <span className={styles.titleHeader}>
                            <TypingAnimation />
                        </span>
                    </div>
                </section>
                <section className={styles.buttonSection}>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <div className={styles.buttonContainer}>
                            <Button text="Bekijk Portfolio" transparent={true}  />
                            <span className={styles.text}>Capturing life’s precious moments</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>,
        <div key="3" data-src="/images/j-sharp.jpg">
            <div className={styles.imageContentContainer}>
                <section></section>
                <section className={styles.fullWidth}>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <h1 className={styles.titleHeader}>Photography</h1>
                    </div>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <h1 className={styles.titleHeader}>That tells your</h1>
                    </div>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <span className={styles.titleHeader}>
                            <TypingAnimation />
                        </span>
                    </div>
                </section>
                <section className={styles.buttonSection}>
                    <div className={`${styles.fullWidth} container mx-auto`}>
                        <div className={styles.buttonContainer}>
                            <Button text="Bekijk Portfolio" transparent={true}  />
                            <span className={styles.text}>Capturing life’s precious moments</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    ];
};

export default SliderItems;
