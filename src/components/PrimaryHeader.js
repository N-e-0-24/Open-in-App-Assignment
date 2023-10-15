import React from 'react';
import styles from './PrimaryHeader.module.css';
import { Notifications } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import image from '../assets/profile.jpg';

const PrimaryHeader = () => {
  return (
    <div className={styles.myheader}> {/* Updated class name */}
        <p>Dashboard</p>
        <div className={styles.mycontent}> {/* Updated class name */}
            <div className={styles.myinput}> {/* Updated class name */}
             <input placeholder='Search...' />
             <button><Search className={styles.myicon} /></button> {/* Updated class name */}
            </div>
            <div><Notifications className={styles.mynotifications} /></div> {/* Updated class name */}
            <img src={image} className={styles.myimage} /> {/* Updated class name */}
        </div>
    </div>
  )
}

export default PrimaryHeader;
