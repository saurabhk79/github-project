import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RepoInterface } from "../UserInfo/repo.interface";

const Repo: React.FC = () => {
    const [repoData, setRepoData] = useState<RepoInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const query_params = new URLSearchParams();
    const params = useParams();

    const getSetRepo = async () => {
        console.log(query_params.has("user"));

        const repoData = await axios.get(
            "https://api.github.com/repos/" + params.user + "/" + params.repo
        );
        console.log(repoData);

        setRepoData(repoData.data);
    };

    useEffect(() => {
        console.log(params.repo);
        setLoading(true);
        getSetRepo();
        setLoading(false);
    }, [params]);
    return (
        <div>
            {loading ? (
                <>Loading...</>
            ) : (
                <>
                    {repoData && (
                        <>
                            <h1>{repoData.name}</h1>
                            <p>{repoData.description}</p>

                            <h3>More info</h3>
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
