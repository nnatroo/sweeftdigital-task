import User from "./User";
import classes from "../Modules/Users.module.css";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import Skeleton from "../UI/Skeleton";

const Users = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (props.userId === undefined) {
      fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/20`
      )
        .then((response) => response.json())
        .then((users) => {
          setUsersData((prevUsersData) => [...prevUsersData, ...users.list]);
        });
    } else {
      fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${props.userId}/friends/${currentPage}/20`
      )
        .then((response) => response.json())
        .then((users) => {
          setUsersData((prevUsersData) => [...prevUsersData, ...users.list]);
        });
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY - 1 >= document.body.offsetHeight) {
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
      }, 400);
    }
  };

  return (
    <>
      <div className={classes.users}>
        {usersData.map((user) => (
          <User
            key={user.id}
            id={user.id}
            imageUrl={user.imageUrl}
            name={user.name}
            lastName={user.lastName}
            prefix={user.prefix}
            title={user.title}
            userId={user.userId}
          />
        ))}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <Loading />
    </>
  );
};

export default Users;
