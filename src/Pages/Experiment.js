import React from 'react';
import bg from '../Final_UKbd_BG_Line.png'
import styles from '../css/Experiment.module.css'
import bg_logo from '../ukbd.png'
import flag from '../UKBD-flag.png'
import apple_logo from '../apple-1.png'
import google_logo from '../google-1.png'
const Experiment = () => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.bg_img} src={bg} alt="" />
                <div className={styles.product_service_main}>
                    <div>
                        <h3 >Looking for original Brand?</h3>
                        <p >We delever 100% authentic British products to your <br /> doorsteps Bangladesh </p>
                    </div>
                    <div className={styles.product_service_main_right}>
                        <div className={styles.product_service_cricle}>
                            <h3 >Looking?</h3>
                            <div className={styles.product_service_cricle_upline}></div>
                            <div className={styles.product_service_cricle_updown_line}></div>
                        </div>
                        <div>
                            <div className={styles.product_service_right}>
                                <p >UK & EU BRANDS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiment;