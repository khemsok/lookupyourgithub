import React from "react";
import Header from "../components/header";
import Container from "@material-ui/core/Container";

export default function homepage() {
    return (
        <Container maxWidth="md">
            <div style={{ paddingTop: "10px" }}>
                <Header />
            </div>
        </Container>
    );
}
