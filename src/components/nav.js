import React from "react";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

// MUI Icons
import IconButton from "@material-ui/core/IconButton";
import LandscapeIcon from "@material-ui/icons/Landscape";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function nav(props) {
    const {handleThemeChange, theme} = props
    console.log(props)
    const themeButton =
        theme === "light" ? <WbSunnyIcon /> : <NightsStayIcon />;

    return (
        <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
            <Link to="/" style = {{textDecoration: 'none'}}>
                <IconButton >
                    {/* <LandscapeIcon fontSize="large" /> */}
                    {/* <span style={{fontSize: '1.25em', color: 'rgba(0,0,0,1)'}}>🎱</span> */}
                    <ArrowForwardIosIcon fontSize='large'/>
                    {/* <ArrowBackIosIcon fontSize='large'/> */}

                </IconButton>
            </Link>

            <IconButton onClick={handleThemeChange} style={{ float: "right" }}>
                {themeButton}
            </IconButton>
        </div>
    );
}
