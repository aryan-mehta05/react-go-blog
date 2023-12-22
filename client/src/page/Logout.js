import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../services/store/reducers/AuthSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    //   remove token
    window.localStorage.removeItem("token");
    // unset the user from redux
    dispatch(logoutUser());

    navigate("/", {
      state: "You have successfully logged out.",
    });
  }, [dispatch, navigate]);

  return <div>Logout</div>;
};

export default Logout;