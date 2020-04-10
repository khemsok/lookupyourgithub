import React from "react";

import { Link } from "react-router-dom";

// MUI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperStyled: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75px",
    flexDirection: "column"
  }
});

export default function UserStats({ userData }) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" style={{ marginTop: "25px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Link
            to={{
              pathname: `/user/${userData.login}/repos`,
              userData: userData
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper className={classes.paperStyled}>
              <Typography color="primary" variant="subtitle1">
                {userData.public_repos}
              </Typography>
              <Typography>Repositories</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link
            to={{
              pathname: `/user/${userData.login}/followers`,
              userData: userData
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper className={classes.paperStyled}>
              <Typography color="primary" variant="subtitle1">
                {userData.followers}
              </Typography>
              <Typography>Followers</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link
            to={{
              pathname: `/user/${userData.login}/following`,
              userData: userData
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper className={classes.paperStyled}>
              <Typography color="primary" variant="subtitle1">
                {userData.following}
              </Typography>
              <Typography>Following</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
