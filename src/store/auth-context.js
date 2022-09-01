import React, { useState } from "react";

const AuthContext = React.createContext({
  UID: "",
  isLoggedIn: false,
  userInfo: [],
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [UID, setUID] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  //If token is an empty string, it returns false, if it is not empty, it returns true
  const userIsLoggedIn = !!UID;

  const loginHandler = (user) => {
    setUID(user.uid);
    setUserInfo(user);
  };

  const logoutHandler = () => {
    setUID(null);
    setUserInfo(null);
  };


  const contextValue = {
    UID: UID,
    userInfo: userInfo,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
