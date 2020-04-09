import React, { useEffect, useState } from "react";

import { numberWithCommas, selectLanguageColor } from "../util/helper";

// MUI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

// MUI Icon
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import StarIcon from "@material-ui/icons/Star";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function TopRepos({ userData, user }) {
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    fetchUserRepos();
  }, []);

  const fetchUserRepos = async () => {
    const userDataResponse = await fetch(
      `https://api.github.com/users/${user}/repos`
    );
    let data = await userDataResponse.json();
    data.sort((a, b) => b["stargazers_count"] - a["stargazers_count"]);
    setUserRepos(data);
  };
  console.log(userRepos);

  const topUserReposData = userRepos.length === 0 ? [] : userRepos.slice(0, 8);

  console.log(topUserReposData.length);

  let mapTopUserReposData =
    topUserReposData.length === 0 ? (
      <div style={{ width: "100%" }}>
        <LinearProgress color="primary" />
      </div>
    ) : (
      topUserReposData.map((element, index) => (
        <Grid item xs={12} md={3}>
          <Paper style={{ height: "175px", padding: "20px" }}>
            <div style={{ height: "80%" }}>
              <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
                <span>
                  <BookmarksIcon
                    style={{
                      fontSize: "1em",
                      verticalAlign: "middle",
                      marginRight: "5px"
                    }}
                  />
                </span>
                {element.name}
              </Typography>
              <Typography variant="body1">{element.description}</Typography>
            </div>

            <Typography display="inline">
              <span>
                <FiberManualRecordIcon
                  style={{
                    color: selectLanguageColor(element.language),
                    verticalAlign: "sub",
                    marginRight: "5px",
                    fontSize: "1.25em"
                  }}
                />
              </span>
              {element.language}
            </Typography>

            <Typography display="inline" style={{ float: "right" }}>
              {numberWithCommas(element.size)} KB
            </Typography>
            <Typography display="inline">
              <span>
                <StarIcon
                  style={{
                    verticalAlign: "sub",
                    fontSize: "1.25em",
                    marginLeft: "15px",
                    marginRight: "5px"
                  }}
                />
              </span>
              {element.stargazers_count}
            </Typography>
            <Typography display="inline">
              <span>
                <RestaurantIcon
                  style={{
                    verticalAlign: "sub",
                    fontSize: "1.25em",
                    marginLeft: "10px",
                    marginRight: "5px"
                  }}
                />
              </span>
              {element.forks_count}
            </Typography>
          </Paper>
        </Grid>
      ))
    );

  return (
    <div style={{ paddingTop: "30px" }}>
      <Typography variant="h4" align="left" style={{ marginBottom: "30px" }}>
        Top Repos
      </Typography>
      <Grid container spacing={2}>
        {mapTopUserReposData}
      </Grid>
    </div>
  );
}
