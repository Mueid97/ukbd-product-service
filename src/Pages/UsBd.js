import React from 'react';
import bg from '../images/map-USBD-FINAL.png'
import styles from '../css/LoDhBrCa.module.css'
import logo from '../images/USBD.png'
import flag from '../UKBD-flag.png'
import flag2 from '../images/image (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const UsBd = () => {
    return (
        <div>
        <div className={styles.container}>
            <img className={styles.usbd_bg_img} src={bg} alt="" />
            <div>
                <img className={styles.usbd_logo} src={logo} alt="" />
            </div>
            <div className={styles.usbd_title}>
                <p className='font-face-pp'>USBD is a marketplace for products & services that connects Bangladeshis on both sides, Dhaka & States.</p>
            </div>
            <div>
                <button className={styles.usbd_icon}><FontAwesomeIcon icon={faAngleDown} /></button>
                <div className={styles.usbd_flag}>
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

export default UsBd;