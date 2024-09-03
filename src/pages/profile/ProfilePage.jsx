import React, { useEffect, useState } from "react";
import { getData } from "../../api/common/getData";
import ProfilePageLayout from "../../layout/ProfilePageLayout";
import ProfileMenu from "../../components/profilepage/menu/ProfileMenu";
import ProfileInfo from "../../components/profilepage/info/ProfileInfo";

const ProfilePage = () => {
  const [items, setItems] = useState({});
  const [componentName, setComponentName] = useState("myProfile");

  const onComponentShow = (newData) => {
    setComponentName(newData);
  };

  let fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/user/api/v1/readUserProfile`
    );
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [items]);

  return (
    <ProfilePageLayout>
      <div className="grid grid-cols-12 mx-20 my-10">
        <div className="col-span-4 ml-auto">
          <ProfileMenu items={items} onComponentShow={onComponentShow} />
        </div>
        <div className="col-span-8 mt-20 px-10">
          <ProfileInfo items={items} componentName={componentName} />
        </div>
      </div>
    </ProfilePageLayout>
  );
};

export default ProfilePage;
