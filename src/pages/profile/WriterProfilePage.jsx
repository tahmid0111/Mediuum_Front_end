import React, { useEffect, useState } from "react";
import ProfilePageLayout from "../../layout/ProfilePageLayout";
import { writerURL } from "../../utility/url.helper";
import { getData } from "../../api/fetch.api";
import WriterMenu from "../../components/profilepage/writer/menu/WriterMenu";
import WriterInfo from "../../components/profilepage/writer/info/WriterInfo";

const WriterProfilePage = () => {
  const [items, setItems] = useState({});
  const [componentName, setComponentName] = useState("writerProfile");

  const onComponentShow = (newData) => {
    setComponentName(newData);
  };

  let fetchData = async () => {
    let url = `${writerURL}/readWriterProfile`;
    let res = await getData(url);
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [items]);
  return (
    <ProfilePageLayout>
      <div className="grid grid-cols-12 mx-20 my-10">
        <div className="col-span-4 ml-auto">
          <WriterMenu items={items} onComponentShow={onComponentShow} />
        </div>
        <div className="col-span-8 mt-20 px-10">
          <WriterInfo items={items} componentName={componentName} />
        </div>
      </div>
    </ProfilePageLayout>
  );
};

export default WriterProfilePage;
