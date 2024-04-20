import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { config } from "../../config";
import { UserInterface } from "./user.interface";
import { RepoInterface } from "./repo.interface";

const UserInfo: React.FC = () => {
    const [userData, setUserData] = useState<UserInterface | null>(null);
    const [repoData, setRepoData] = useState<RepoInterface[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams();

    const getSetUser = async () => {
        const data = await axios.get(
            config.base_url + "/user/save-user/" + params.user
        );
        const repoData = await axios.get(data.data.repos_url);

        setUserData(data.data);
        setRepoData(repoData.data);
    };

    useEffect(() => {
        console.log(params.user);
        setLoading(true);
        getSetUser();
        setLoading(false);
    }, [params]);

    return (
        <div>
            {loading ? (
                <>Loading...</>
            ) : (
                <>
                    {userData && (
                        <div>
                            <div>
                                <img
                                    src={userData.avatar_url}
                                    alt={userData.login}
                                />
                                <h1>{userData.login}</h1>
                                <p>{userData.bio}</p>
                            </div>
                            <div className="grid">
                                {repoData && (
                                    <>
                                        {repoData.map((repo: RepoInterface) => {
                                            return (
                                                <Link
                                                    to={`/repo/${repo.full_name}`}
                                                    key={repo.id}
                                                >
                                                    {repo.name}
                                                </Link>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default UserInfo;
