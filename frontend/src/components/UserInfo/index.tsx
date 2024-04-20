import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { config } from "../../config";

const UserInfo: React.FC = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams();

  const getSetUser = async () => {
    const data = await axios.get(config.base_url + "/user/save-user/" + params.user);
    console.log(data);
  }
  useEffect(() => {
    console.log(params.user);

    getSetUser();

  }, [params]);
  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div></div>
          <div className="grid"></div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
