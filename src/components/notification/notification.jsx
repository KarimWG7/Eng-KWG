import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { notificationActions } from "../../store/notificationSlice/notification.reducer";
import classes from "./notification.module.css";

const Notification = ({ notification }) => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(notificationActions.clearNotification());
  };

  return (
    <div className={classes.body}>
      <div>
        <span
          className={`${classes.circle} ${
            notification.statusCode > 299 ? classes.error : ""
          }`}
        ></span>
        <span className={classes.status}>{notification.statusCode}</span>
      </div>
      <p>{notification.message}</p>
      <button onClick={closeModalHandler}>
        <AiOutlineClose className={classes.close} />
      </button>
    </div>
  );
};

export default Notification;
