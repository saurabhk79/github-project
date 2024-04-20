import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserInterface } from "../UserInfo/user.interface";
import styles from "./followers.module.css";

const Followers: React.FC = () => {
  const [followersData, setFollowersData] = useState<UserInterface[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();

  const getSetRepo = async () => {
    const followers = await axios.get(
      "https://api.github.com/users/" + params.user + "/followers"
    );
    console.log(followers);

    setFollowersData(followers.data);
  };

  useEffect(() => {
    setLoading(true);
    getSetRepo();
    setLoading(false);
  }, [params]);
  return (
    <div className={styles.follower}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {followersData && (
            <>
              {followersData.map((follower) => {
                return (
                  <Link to={`/${follower.login}`}>
                    <img src={follower.avatar_url} alt={follower.login} />
                    <em>{follower.login}</em>
                  </Link>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Followers;
