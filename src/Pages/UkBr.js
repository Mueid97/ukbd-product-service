import React from 'react';
import bg from '../images/map-UKBR-FINAL.png'
import styles from '../css/LoDhBrCa.module.css'
import logo from '../images/UKBR.png'
import flag from '../images/image (2).png'
import flag2 from '../images/image (3).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const UkBr = () => {
    return (
        <div>
        <div className={styles.container}>
            <img className={styles.ukbr_bg_img} src={bg} alt="" />
            <div>
                <img className={styles.ukbr_logo} src={logo} alt="" />
            </div>
            <div className={styles.ukbr_title}>
                <p className='font-face-pp'>UKBR is a marketplace for products & services that connects people on both sides, Brazil & United Kingdom.</p>
            </div>
            <div>
                <button className={styles.ukbr_icon}><FontAwesomeIcon icon={faAngleDown} /></button>
                <div className={styles.ukbr_flag}>
                    <div>
                        <img className={styles.uk_flag} src={flag2} alt="" />
                    </div>
                    <div>
                        <img className={styles.bd_flag} src={flag} alt="" />
                    </div>

                </div>

            </div>
        </div>
    </div>
    );
};

export default UkBr;