import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../Components/Modules/UserPage.module.css";
import UserProfile from '../Components/User/UserProfile';

const UserPage = (props) => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
    )
      .then((res) => res.json())
      .then((data) => setUserData(data));
    //   console.log(userData.company.name);
  }, []);

  return (
    <UserProfile userData={userData}/>
  );
};

export default UserPage;
