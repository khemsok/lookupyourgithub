import React, { useState, useRef, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default function Header() {
  const [user, setUser] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
            LOOK UP YOUR GITHUB!
          </Typography>
        </div>
      </div>

      <Container maxWidth="sm">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <TextField
              inputRef={inputRef}
              id="standard-full-width"
              style={{ margin: 8, fontSize: "16px" }}
              placeholder="Enter username"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
              required={true}
            />
          </div>
        </form>
      </Container>
    </>
  );
}
