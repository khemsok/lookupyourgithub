import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

// MUI Icons
import IconButton from "@material-ui/core/IconButton";
import LandscapeIcon from "@material-ui/icons/Landscape";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

export default function Header() {
    const [user, setUser] = useState("");
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/user/${user}`);
    };

    const handleChange = (e) => {
        setUser(e.target.value);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <Typography variant="subtitle1">Hey,</Typography>

                    <Typography color="primary" variant="h3">
                        LOOK UP YOUR GITHUB
                    </Typography>
                </div>
            </div>

            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "50px",
                        }}
                    >
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Enter username"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </Container>

            <Typography
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "0",
                    bottom: "40px",
                    textAlign: "center",
                }}
                variant="subtitle2"
            >
                Developed by Khem Sok 🎯
            </Typography>
        </>
    );
}
