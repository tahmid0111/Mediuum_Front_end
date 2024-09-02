import React from "react";
import Connections from "./Connections";
import Password from "./Password";
import MyProfile from "./MyProfile";

const ProfileInfo = (props) => {
  const { componentName, items } = props;
  return (
    <>
      {componentName === "connections" ? (
        <Connections items={items} />
      ) : componentName === "password" ? (
        <Password items={items} />
      ) : (
        <MyProfile items={items} />
      )}
    </>
  );
};

export default ProfileInfo;
