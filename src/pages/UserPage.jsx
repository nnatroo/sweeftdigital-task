import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../Components/Modules/UserPage.module.css";
import UserProfile from "../Components/User/UserProfile";
import Users from "../Components/Users/Users";

const UserPage = (props) => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
    )
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <>
      <div className={classes["user-page-container"]}>
        <UserProfile userData={userData} />
        <Users userId={userId} />
      </div>
    </>
  );
};

export default UserPage;
