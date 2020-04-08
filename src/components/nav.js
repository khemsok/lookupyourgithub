import React from "react";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

// MUI Icons
import IconButton from "@material-ui/core/IconButton";
import LandscapeIcon from "@material-ui/icons/Landscape";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

export default function nav({ handleThemeChange, theme }) {
    const themeButton =
        theme === "light" ? <WbSunnyIcon /> : <NightsStayIcon />;

    return (
        <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
            <Link to="/">
                <IconButton>
                    <LandscapeIcon fontSize="large" />
                </IconButton>
            </Link>

            <IconButton onClick={handleThemeChange} style={{ float: "right" }}>
                {themeButton}
            </IconButton>
        </div>
    );
}
