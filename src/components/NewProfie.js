import React, { useState } from "react";
import classes from "./NewProfile.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../store/profile-slice";
import ProfileCard from "./ProfileCard";

const NewProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state=>state.profile);
  const addProfile = () => {
    dispatch(profileAction.setStatus());
  };
  const AddProfile = (
    <div className={classes.main}> 
      <button>
        <AddIcon className={classes.icon} />
      </button>
      <p>Add Profile</p>
    </div>
  );
  return <div className={classes.mainDiv} onClick={addProfile} >
    {!profile.submitStatus && AddProfile}
    {profile.submitStatus && <ProfileCard/>}
  </div>;
};

export default NewProfile;
