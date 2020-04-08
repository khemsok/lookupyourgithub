import React from "react";

import Typography from "@material-ui/core/Typography";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventIcon from "@material-ui/icons/Event";

import moment from "moment";

export default function userInfo({ userData }) {
    const dataArr = ["company", "location", "created_at"];
    const dataMap = dataArr.map((element, index) => {
        if (userData[element] !== null) {
            let info = null;
            if (element === "company") {
                info = (
                    <span
                        style={{
                            margin: "0.25rem 1rem",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <LocationCityIcon
                            color="primary"
                            style={{
                                verticalAlign: "middle",
                                marginRight: "10px",
                            }}
                        />
                        <Typography variant="subtitle2">
                            {userData[element]}
                        </Typography>
                    </span>
                );
            } else if (element === "location") {
                info = (
                    <span
                        style={{
                            margin: "0.25rem 1rem",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <LocationOnIcon
                            color="primary"
                            style={{
                                verticalAlign: "middle",
                                marginRight: "10px",
                            }}
                        />
                        <Typography variant="subtitle2">
                            {userData[element]}
                        </Typography>
                    </span>
                );
            } else {
                info = (
                    <span
                        style={{
                            margin: "0.25rem 1rem",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <EventIcon
                            color="primary"
                            style={{
                                verticalAlign: "middle",
                                marginRight: "10px",
                            }}
                        />
                        <Typography variant="subtitle2">
                            Joined on{" "}
                            {moment(userData[element]).format("MMMM Do, YYYY")}
                        </Typography>
                    </span>
                );
            }
            return info;
        }
    });
    return dataMap;
}
