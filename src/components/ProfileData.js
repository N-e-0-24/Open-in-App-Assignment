import React from 'react';
import classes from './ProfileData.module.css';
import Back from './Back';
import ProfileButton from './ProfileButton';
import { useSelector } from 'react-redux';
import BasicFormData from './BasicFormData';
import ContactData from './ContactData';

const ProfileData = () => {
  const profile = useSelector(state=>state.profile);
  return (
    <Back>
        <div className={classes.profile}>
            <div className={classes.header}><p>Add New Profile</p></div>
            <ProfileButton />
            {profile.infoStatus==='Basic' && <BasicFormData/>}
            {profile.infoStatus==='Contact' && <ContactData/>}
        </div>
    </Back>
  )
}

export default ProfileData;