import React, { useState } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function Header() {
  const [user, setUser] = useState("");
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/user/${user}`);
  };

  const handleChange = e => {
    setUser(e.target.value);
  };
  return (
    <>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        GitHub Look Up 👀
      </Typography>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Enter username"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange}
          />
        </div>
      </form>

      <Typography
        style={{
          position: "absolute",
          width: "100%",
          left: "0",
          bottom: "20px",
          textAlign: "center"
        }}
        variant="body1"
      >
        Developed by Khem Sok 🎯
      </Typography>
    </>
  );
}
