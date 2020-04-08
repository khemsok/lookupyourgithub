import React, { useEffect, useState } from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function TopRepos({ userData, user }) {
    const [userRepos, setUserRepos] = useState([]);

    useEffect(() => {
        fetchUserRepos();
    }, []);

    const fetchUserRepos = async () => {
        const userDataResponse = await fetch(
            `https://api.github.com/users/${user}/repos`
        );
        const data = await userDataResponse.json();
        setUserRepos(data);
    };
    console.log(userRepos);

    const topUserReposData =
        userRepos.length === 0 ? [] : userRepos.slice(0, 8);

    console.log(topUserReposData.length);

    const mapTopUserReposData =
        topUserReposData.length === 0 ? (
            <LinearProgress />
        ) : (
            topUserReposData.map((element, index) => (
                <Grid item xs={12} md={3}>
                    <Paper style={{ height: "175px", padding: "20px" }}>
                        <div style={{ height: "80%" }}>
                            <Typography
                                variant="subtitle1"
                                style={{ marginBottom: "10px" }}
                            >
                                {element.name}
                            </Typography>
                            <Typography variant="body1">
                                {element.description}
                            </Typography>
                        </div>

                        <Typography display="inline">
                            {element.language}
                        </Typography>
                        <Typography display="inline" style={{ float: "right" }}>
                            {element.size} KB
                        </Typography>
                    </Paper>
                </Grid>
            ))
        );

    return (
        <div style={{ paddingTop: "30px" }}>
            <Typography
                variant="h4"
                align="left"
                style={{ marginBottom: "30px" }}
            >
                Top Repos
            </Typography>
            <Grid container spacing={2}>
                {mapTopUserReposData}
            </Grid>
        </div>
    );
}
