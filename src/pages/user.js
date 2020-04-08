import React, { useState, useEffect } from "react";

// Components
import UserInfo from "../components/userInfo";
import UserStats from "../components/userStats";
import TopRepos from "../components/topRepos";

// MUI
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

export default function User({ match }) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const userDataResponse = await fetch(
            `https://api.github.com/users/${match.params.id}`
        );
        const data = await userDataResponse.json();
        setUserData(data);
        console.log(data);
    };

    const displayUserInfo =
        Object.keys(userData).length === 0 ? (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress />
            </div>
        ) : (
            <div>
                {/* <Avatar
                    alt="Remy Sharp"
                    src={userData.avatar_url}
                    style={{
                        width: "150px",
                        height: "150px",
                        margin: "0 auto",
                    }}
                /> */}
                <img
                    src={userData.avatar_url}
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "100px",
                        boxShadow:
                            "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                        display: "block",
                        margin: "0 auto",
                    }}
                />
                <Typography
                    style={{ marginTop: "20px" }}
                    variant="subtitle1"
                    color="primary"
                    align="center"
                >
                    @{userData.login}
                </Typography>
                <Box
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <UserInfo userData={userData} />
                </Box>
                <UserStats userData={userData} />
                <TopRepos userData={userData} user={match.params.id} />
            </div>
        );

    return (
        <>
            <div>{displayUserInfo}</div>
        </>
    );
}
