import React, { useEffect, useState } from "react";

import {
  numberWithCommas,
  selectLanguageColor,
  checkTitleLength,
  checkDescriptionLength,
} from "../util/helper";

import { makeStyles } from "@material-ui/core/styles";

// MUI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tooltip from "@material-ui/core/Tooltip";

// MUI Icon
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import StarIcon from "@material-ui/icons/Star";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles({
  paperStyled: {
    transition: "transform .25s ease-in",

    "&:hover": {
<<<<<<< HEAD
      transform: "translate(0px, -5px)",
    },
  },
});

export default function TopRepos({ user }) {
=======
      transform: "translate(0px, -5px)"
    }
  }
});

export default function TopRepos(props) {
  const { user } = props;
>>>>>>> af6309b246fd7e0ce501e382f6e523e6d3001d40
  const [userRepos, setUserRepos] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    fetchUserRepos();
  }, []);

  const fetchUserRepos = async () => {
    const userDataResponse = await fetch(
      `https://api.github.com/users/${user}/repos`
    );
    let data = await userDataResponse.json();

    if (data.length !== 0) {
      data.sort((a, b) => b["stargazers_count"] - a["stargazers_count"]);
      setUserRepos(data);
    } else {
      setUserRepos(new Array(1000000));
    }
  };

  const topUserReposData = userRepos.length === 0 ? [] : userRepos.slice(0, 8);

  let mapTopUserReposData =
    userRepos.length === 0 ? (
      <div style={{ width: "100%" }}>
        <LinearProgress color="primary" />
      </div>
    ) : userRepos.length === 1000000 ? (
      <Grid item xs={12}>
<<<<<<< HEAD
        <Typography>Not available</Typography>
=======
        <Typography variant="subtitle2">Not available 💔</Typography>
>>>>>>> af6309b246fd7e0ce501e382f6e523e6d3001d40
      </Grid>
    ) : (
      topUserReposData.map((element, index) => (
        <Grid item xs={12} md={3}>
<<<<<<< HEAD
          <Paper
            style={{ height: "175px", padding: "20px" }}
            className={classes.paperStyled}
          >
            <div style={{ height: "80%" }}>
              <Typography
                color="primary"
                variant="subtitle1"
                style={{ marginBottom: "10px" }}
              >
                <a
                  href={element["html_url"]}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
=======
          <a
            href={element["html_url"]}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <Paper
              style={{ height: "175px", padding: "20px" }}
              className={classes.paperStyled}
            >
              <div style={{ height: "80%" }}>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  style={{ marginBottom: "10px" }}
>>>>>>> af6309b246fd7e0ce501e382f6e523e6d3001d40
                >
                  <span>
                    <BookmarksIcon
                      style={{
                        fontSize: "1em",
                        verticalAlign: "middle",
<<<<<<< HEAD
                        marginRight: "5px",
                      }}
                    />
                  </span>
                  {checkTitleLength(element.name)}
                </a>
              </Typography>
              <Typography variant="body1">
                {checkDescriptionLength(element.description)}
              </Typography>
              <a></a>
            </div>

            <Typography display="inline">
              <span>
                <FiberManualRecordIcon
                  style={{
                    color: selectLanguageColor(element.language),
                    verticalAlign: "sub",
                    marginRight: "5px",
                    fontSize: "1.25em",
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
                <Tooltip title="Stars" placement="top">
                  <StarIcon
                    style={{
                      verticalAlign: "sub",
                      fontSize: "1.25em",
                      marginLeft: "15px",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </span>
              {element.stargazers_count}
            </Typography>
            <Typography display="inline">
              <span>
                <Tooltip title="Git Fork (git it 😂)" placement="top">
                  <RestaurantIcon
                    style={{
                      verticalAlign: "sub",
                      fontSize: "1.25em",
                      marginLeft: "10px",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </span>
              {element.forks_count}
            </Typography>
          </Paper>
=======
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
                  <Tooltip title="Stars" placement="top">
                    <StarIcon
                      style={{
                        verticalAlign: "sub",
                        fontSize: "1.25em",
                        marginLeft: "15px",
                        marginRight: "5px"
                      }}
                    />
                  </Tooltip>
                </span>
                {element.stargazers_count}
              </Typography>
              <Typography display="inline">
                <span>
                  <Tooltip title="Git Fork (git it 😂)" placement="top">
                    <RestaurantIcon
                      style={{
                        verticalAlign: "sub",
                        fontSize: "1.25em",
                        marginLeft: "10px",
                        marginRight: "5px"
                      }}
                    />
                  </Tooltip>
                </span>
                {element.forks_count}
              </Typography>
            </Paper>
          </a>
>>>>>>> af6309b246fd7e0ce501e382f6e523e6d3001d40
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
