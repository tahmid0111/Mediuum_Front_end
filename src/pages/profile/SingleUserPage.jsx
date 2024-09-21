import React from "react";
import ProfilePageLayout from "../../layout/ProfilePageLayout";
import { useParams } from "react-router-dom";

const SingleUserPage = () => {
  const { userID } = useParams();
  return (
    <ProfilePageLayout>
      <h1>hi</h1>
    </ProfilePageLayout>
  );
};

export default SingleUserPage;
