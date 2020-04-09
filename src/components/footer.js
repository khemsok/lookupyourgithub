import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";

export default function footer({ pageType }) {
  console.log(pageType);
  const displayFooter =
    pageType === "homepage" ? (
      <>
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
    ) : (
      <>
        <Typography
          style={{
            position: "absolute",
            textAlign: "center",
          }}
          variant="subtitle2"
        >
          Developed by Khem Sok 🎯
        </Typography>
      </>
    );
  return { displayFooter };
}
