import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";

export default function footer() {
    return (
        <>
            <Typography
                style={{
                    position: "absolute",
                    textAlign: "center",
                    bottom: 0,
                    width: "100%",
                    padding: "50px",
                }}
                variant="subtitle2"
            >
                Developed by Khem Sok <span role="img">🎯</span>
            </Typography>
        </>
    );
}
