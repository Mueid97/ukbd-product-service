import React from 'react';
import bg from '../Final_UKbd_BG_Line.png'
import styles from '../css/Product.module.css'
import logo from '../ukbd.png'
import flag from '../UKBD-flag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    return (
        <div className={styles.container}>
            <img className={styles.home_bg_img} src={bg} alt="" />
            <div>
                <img className={styles.home_logo} src={logo} alt="" />
            </div>
            <div className={styles.home_title}>
                <p className='font-face-pp'>UKBD is a marketplace for porducts & <br />services that connect Bangladesh <br />sides both London & Dhaka</p>
            </div>
            <div>
                <button className={styles.home_icon}><FontAwesomeIcon icon={faAngleDown} /></button>
                <img className={styles.bd_flag} src={flag} alt="" />
            </div>
        </div>
    );
};

export default Home;