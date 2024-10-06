import styles from './Button.module.css'; // Importing the CSS Module
import PropTypes from 'prop-types';


const Button = ({text, transparent}) => {
    const buttonClass = `${styles.cameraButton} ${transparent ? styles.transparent : styles.opaque}`;

    return (
        <div className="button-container styles.button-container">
            <button className={buttonClass}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    transparent: PropTypes.bool.isRequired,
};

export default Button;
