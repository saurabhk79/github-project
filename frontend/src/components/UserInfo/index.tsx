import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { config } from "../../config";
import { UserInterface } from "./user.interface";

const UserInfo: React.FC = () => {
    const [userData, setUserData] = useState<UserInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams();

    const getSetUser = async () => {
        const data = await axios.get(
            config.base_url + "/user/save-user/" + params.user
        );
        console.log(data);

        setUserData(data.data);
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
                            <div className="grid"></div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default UserInfo;
