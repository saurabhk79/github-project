/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { RepoInterface } from "../UserInfo/repo.interface";
import styles from "./repo.module.css";

const Repo: React.FC = () => {
  const [repoData, setRepoData] = useState<RepoInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();

  const getSetRepo = async () => {
    const repoData = await axios.get(
      "https://api.github.com/repos/" + params.user + "/" + params.repo
    );

    setRepoData(repoData.data);
  };

  useEffect(() => {
    setLoading(true);
    getSetRepo();
    setLoading(false);
  }, [params]);
  return (
    <div className={styles.repo}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {repoData && (
            <>
              <h1>{repoData.name}</h1>
              <p>{repoData.description}</p>

              <h4>More info</h4>
              <p>Made using {repoData.language}</p>
              <p>Visibility : {repoData.visibility}</p>
              <p>On {repoData.default_branch} branch</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Repo;
