import User from "./User";
import classes from "../Modules/Users.module.css";
import { useEffect, useState } from "react";

const Users = (props) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(
      "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/100"
    )
      .then((response) => response.json())
      .then((users) => {
        setUsersData(users.list);
      });
  }, []);
  
  console.log(usersData);

  return (
    <div className={classes.users}>
      {usersData.map((user, index) =>
        <User key={user.id}
        id={user.id}
        imageUrl={user.imageUrl}
        name={user.name}
        lastName={user.lastName}
        prefix={user.prefix}
        title={user.title}
        />)}
    </div>
  );
};

export default Users;
