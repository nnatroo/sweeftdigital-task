import User from "./User";
import classes from "../Modules/Users.module.css";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import Skeleton from "../UI/Skeleton";

const Users = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/20`
    )
      .then((response) => response.json())
      .then((users) => {
        setUsersData((prevUsersData) => [...prevUsersData, ...users.list]);
        setShowLoading(false);
      });
  }, [currentPage]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setShowLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  // console.log(usersData);

  return (
    <>
      <div className={classes.users}>
        {usersData.map((user, index) => (
          <User
            key={user.id}
            id={user.id}
            imageUrl={user.imageUrl}
            name={user.name}
            lastName={user.lastName}
            prefix={user.prefix}
            title={user.title}
          />
        ))}
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
        <Skeleton animation="wave" width={"100%"} height={"100%"}/>
      </div>

      {showLoading && <Loading />}
    </>
  );
};

export default Users;
