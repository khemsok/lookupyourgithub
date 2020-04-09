import React from "react";

import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";

// MUI Icons
import IconButton from "@material-ui/core/IconButton";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function nav({ handleThemeChange, theme, history }) {
    const themeButton =
        theme === "light" ? <WbSunnyIcon /> : <NightsStayIcon />;

    const arrowButton =
        history.location.pathname === "/" ? (
            <ArrowForwardIosIcon fontSize="large" />
        ) : (
            <ArrowBackIosIcon fontSize="large" />
        );

    return (
        <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <IconButton>
                    {/* <LandscapeIcon fontSize="large" /> */}
                    {/* <span style={{fontSize: '1.25em', color: 'rgba(0,0,0,1)'}}>🎱</span> */}
                    {/* <ArrowForwardIosIcon fontSize="large" /> */}
                    {/* <ArrowBackIosIcon fontSize='large'/> */}
                    {arrowButton}
                </IconButton>
            </Link>

            <IconButton onClick={handleThemeChange} style={{ float: "right" }}>
                {themeButton}
            </IconButton>
        </div>
    );
}

export default withRouter(nav);
