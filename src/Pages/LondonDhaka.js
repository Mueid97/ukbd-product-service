import React from 'react';
import bg from '../images/map-UKBD-FINAL.png'
import styles from '../css/LoDhBrCa.module.css'
import logo from '../ukbd.png'
import flag from '../UKBD-flag.png'
import flag2 from '../images/image (3).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const LondonDhaka = () => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.londondhaka_bg_img} src={bg} alt="" />
                <div>
                    <img className={styles.londondhaka_logo} src={logo} alt="" />
                </div>
                <div className={styles.londondhaka_title}>
                    <p className='font-face-pp'>UKBD is a marketplace for products & services that connects Bangladeshis on both sides, London & Dhaka.</p>
                </div>
                <div>
                    <button className={styles.londondhaka_icon}><FontAwesomeIcon icon={faAngleDown} /></button>
                    <div className={styles.londondhaka_flag}>
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

export default LondonDhaka;