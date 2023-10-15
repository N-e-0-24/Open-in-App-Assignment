import React from 'react';
import classes from './Footer.module.css';
import PiGraph from './PiGraph';
import NewProfie from './NewProfie';
import {useSelector} from 'react-redux';
import ProfileData from './ProfileData';

const Footer = () => {
  const profile = useSelector(state => state.profile);
  return (
    <div className={classes.footer}>
        <PiGraph/>
        <NewProfie />
        {profile.status && <ProfileData/>}
    </div>
  )
}

export default Footer