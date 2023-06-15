import React from 'react';
import bg from '../images/map-UKCA-FINAL.png'
import styles from '../css/LoDhBrCa.module.css'
import logo from '../images/UKCA.png'
import flag3 from '../images/image (3).png'
import flag4 from '../images/image (4).png'
import flag5 from '../images/image (5).png'
import flag6 from '../images/image (6).png'
import flag7 from '../images/image (7).png'
import flag8 from '../images/image (8).png'

const UkCa = () => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.ukca_bg_img} src={bg} alt="" />
                <div>
                    <img className={styles.ukca_logo} src={logo} alt="" />
                </div>
                <div className={styles.ukca_title}>
                    <p className="Poppine regular">UKCA is a marketplace for products & services that connects people on both sides, Central Asia & United Kingdom.</p>
                </div>
                <div>
                <img className={styles.uk_flag} src={flag3} alt="" />
                    <div className={styles.ukca_flag}>                     
                        <div>
                            <img className={styles.ukca_all_flag} src={flag4} alt="" />
                        </div>
                        <div>
                            <img className={styles.ukca_all_flag} src={flag5} alt="" />
                        </div>
                        <div>
                            <img className={styles.ukca_all_flag} src={flag6} alt="" />
                        </div>
                        <div>
                            <img className={styles.ukca_all_flag} src={flag7} alt="" />
                        </div>
                        <div>
                            <img className={styles.ukca_all_flag} src={flag8} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UkCa;