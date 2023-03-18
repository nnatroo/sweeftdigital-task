import React from "react";
import classes from "../Modules/UserPage.module.css";
import GroupIcon from "@mui/icons-material/Group";

const UserProfile = (props) => {
  return (
    <>
      <a style={{display: 'flex', justifyContent: 'center'}} className={classes["home-btn"]} href="/">
        <GroupIcon style={{ fontSize: "2.6rem", color: "black" }} />
      </a>
      <div className={classes["user-container"]}>
        <img
          className={classes["user-image"]}
          src={props.userData.imageUrl}
          alt="user"
        ></img>
        <fieldset className={classes["user-info-container"]}>
          <legend>Info</legend>
          <strong>{`${props.userData.prefix} ${props.userData.name} ${props.userData.lastName}`}</strong>
          <span>
            <em>{props.userData.title}</em>
          </span>
          <br></br>
          <span>
            <u>Email:</u> {props.userData.email}
          </span>
          <span>
            <u>Ip Address:</u> {props.userData.ip}
          </span>
          <span>
            <u>Job Area:</u> {props.userData.jobArea}
          </span>
          <span>
            <u>Job Type:</u> {props.userData.jobType}
          </span>
        </fieldset>

        <fieldset className={classes["user-address-container"]}>
          <legend>Address</legend>
          <strong>
            {props.userData?.company?.name} {props.userData?.company?.sufix}
          </strong>
          <span>
            <u>City:</u> {props.userData?.address?.city}
          </span>
          <span>
            <u>Country:</u> {props.userData?.address?.country}
          </span>
          <span>
            <u>State:</u> {props.userData?.address?.state}
          </span>
          <span>
            <u>Street Address:</u> {props.userData?.address?.streetAddress}
          </span>
          <span>
            <u>Zip:</u> {props.userData?.address?.zipCode}
          </span>
        </fieldset>
      </div>

      <h2 className={classes["user-page-heading"]}>Friends :</h2>
    </>
  );
};

export default UserProfile;
