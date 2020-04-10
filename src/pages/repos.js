import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// MUI
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapUsersList = userData => {
  const mapUser = userData.map((element, index) => {
    return (
      <>
        <a
          href={element.html_url}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle2"
            style={{ display: "inline-block" }}
            color="secondary"
          >
            {element.name}
          </Typography>
        </a>
        <br />
      </>
    );
  });
  return mapUser;
};

export default function Followers(props) {
  const [userData, setUserData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false); // False, didn't load yet. True, finished loading
  const [isUserAvailable, setIsUserAvailable] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const userDataResponse = await fetch(
      `https://api.github.com/users/${props.match.params.id}/repos`
    );
    let data = await userDataResponse.json();
    if (data["message"]) {
      setFetchStatus(true);
    } else {
      setUserData(data);
      setFetchStatus(true);
      setIsUserAvailable(true);
    }
  };

  // Check if fetch is completed
  // Next, check if the user is available
  // Next, check if the user has any followers
  // Display followers
  const mapRepos = !fetchStatus ? (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
    </div>
  ) : !isUserAvailable ? (
    <Typography variant="subtitle1" align="center">
      User Not Found <span role="img">💔</span>
    </Typography>
  ) : userData === 0 ? (
    <>
      <Typography variant="subtitle1">Repositories 📚</Typography>
      <Typography variant="subtitle2">You have no repo 😢</Typography>
    </>
  ) : (
    <>
      <Typography variant="subtitle1">Repositories 📚</Typography>

      <Typography variant="subtitle2">{mapUsersList(userData)}</Typography>
    </>
  );

  return (
    <>
      <Container maxWidth="md">{mapRepos}</Container>
    </>
  );
}
