import React, { useState, useEffect } from "react";

// Components
import UserInfo from "../components/userInfo";
import UserStats from "../components/userStats";
import TopRepos from "../components/topRepos";

// MUI
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function User({ match }) {
  const [userData, setUserData] = useState({});
  const [fetchStatus, setFetchStatus] = useState(true); // True = Okay False = Not Okay

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const userDataResponse = await fetch(
      `https://api.github.com/users/${match.params.id}`
    );
    const data = await userDataResponse.json();
    if (data["message"]) {
      setFetchStatus(false);
    }

    setUserData(data);
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
        <img
          src={userData.avatar_url}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "100px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
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
          <a
            href={`https://github.com/${match.params.id}`}
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            @{userData.login}
          </a>
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
        <TopRepos user={match.params.id} />
      </div>
    );

  return (
    <>
      {fetchStatus ? (
        displayUserInfo
      ) : (
        <Typography variant="subtitle1" align="center">
          User Not Found <span role="img">💔</span>
        </Typography>
      )}
    </>
  );
}
