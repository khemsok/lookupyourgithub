import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import { Link, withRouter } from "react-router-dom";

// MUI Icons
import IconButton from "@material-ui/core/IconButton";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
function nav({ handleThemeChange, theme, history }) {
  const themeButton =
    theme === "light" ? (
      <Tooltip title="Light Mode" placement="bottom">
        <IconButton onClick={handleThemeChange} style={{ float: "right" }}>
          <WbSunnyIcon />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Night Mode" placement="bottom">
        <IconButton onClick={handleThemeChange} style={{ float: "right" }}>
          <NightsStayIcon />
        </IconButton>
      </Tooltip>
    );

  const arrowButton =
    history.location.pathname === "/" ? (
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tooltip title="Home" placement="bottom">
          <IconButton>
            <NavigateNextIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Link>
    ) : (
      <Tooltip title="Back" placement="bottom">
        <IconButton onClick={() => history.goBack()}>
          <NavigateBeforeIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    );

  return (
    <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
      {arrowButton}

      {themeButton}
    </div>
  );
}

export default withRouter(nav);
