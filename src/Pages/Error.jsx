import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<Container maxWidth="lg" style={{ textAlign: "center", height: "100vh" }}>
			<h1>Error 404</h1>
			<Typography variant="h6">
				Sorry, page not found!
			</Typography>{" "}
			<br />
			<Button variant="outlined">
				<Link to="/">Back to Home</Link>
			</Button>
		</Container>
	);
};

export default Error;
