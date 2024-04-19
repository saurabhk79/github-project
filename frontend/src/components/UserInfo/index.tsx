import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo: React.FC = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams();

  useEffect(() => {
    console.log(params);
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
