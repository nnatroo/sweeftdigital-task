import classes from "../Modules/User.module.css";

const User = (props) => {
  return (
    <>
      <div className={classes["user-card"]}>
        <img
          className={classes["user-card-image"]}
          src={`${props.imageUrl}?v=${props.id}`}
          alt="user"
        />
        <div className={classes["user-card-text"]}>
          <strong>{`${props.prefix} ${props.name} ${props.lastName}`}</strong>
          <span>{props.title}</span>
        </div>
      </div>
    </>
  );
};

export default User;
