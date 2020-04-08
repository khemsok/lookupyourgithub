import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// MUI Icons
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventIcon from "@material-ui/icons/Event";

import moment from "moment";

const displayInfo = userData => {
  const dataArr = ["company", "location", "created_at"];
  const dataMap = dataArr.map((element, index) => {
    if (userData[element] !== null) {
      let info = null;
      if (element == "company") {
        info = (
          <span style={{ margin: "0 1rem" }}>
            <LocationCityIcon style={{ verticalAlign: "middle" }} />{" "}
            <span>{userData[element]}</span>
          </span>
        );
      } else if (element == "location") {
        info = (
          <span style={{ margin: "0 1rem" }}>
            <LocationOnIcon style={{ verticalAlign: "middle" }} />{" "}
            <span>{userData[element]}</span>
          </span>
        );
      } else {
        info = (
          <span style={{ margin: "0 1rem" }}>
            <EventIcon style={{ verticalAlign: "middle" }} />{" "}
            <span>
              Joined on {moment(userData[element]).format("MMMM Do, YYYY")}
            </span>
          </span>
        );
      }
      return info;
    }
  });
  return dataMap;
};

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

  const displayUserPage = !Object.keys(userData) ? (
    <h1>Loading</h1>
  ) : (
    <div style={{ textAlign: "center" }}>
      <Avatar
        alt="Remy Sharp"
        src={userData.avatar_url}
        style={{ width: "150px", height: "150px", margin: "0 auto" }}
      />
      <Typography style={{ marginTop: "20px" }}>@{userData.login}</Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        {displayInfo(userData)}
      </Box>
    </div>
  );

  return (
    <>
      <div
        style={{
          paddingTop: "75px"
        }}
      >
        {displayUserPage}
      </div>
    </>
  );
}
