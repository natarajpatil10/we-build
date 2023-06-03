import React from "react";
import { Container, FormControl, Input, InputLabel, Typography, Button } from "@material-ui/core";

const formStyle = {
	textAlign: "center",
	background: "#eee",
	margin: "2rem auto",
	padding: "1rem",
	width: "90%",
	minHeight: "30rem",
};
const Contact = () => {
	return (
		<div data-aos="zoom-in" data-aos-duration="1000" style={formStyle} id="contact-us">
			<Container maxWidth="lg">
				<div>
					<Typography variant="h4" color="primary">
						Contact Form
					</Typography>
				</div>
				<Typography variant="overline">Get in touch, our expert team will contact you.</Typography>
				<form noValidate autoComplete="off">
					<div>
						<FormControl>
							<InputLabel htmlFor="name">Full Name</InputLabel>
							<Input id="name" aria-describedby="my-helper-text" />
						</FormControl>
					</div>
					<div>
						<FormControl>
							<InputLabel htmlFor="email">Email Address</InputLabel>
							<Input id="email" aria-describedby="my-helper-text" />
						</FormControl>
					</div>
					<div>
						<FormControl>
							<InputLabel htmlFor="mobile">Mobile Number</InputLabel>
							<Input id="mobile" aria-describedby="my-helper-text" />
						</FormControl>
					</div>
					<br />
					<div>
						<Button variant="outlined" color="primary">
							Submit
						</Button>
					</div>
				</form>
			</Container>
		</div>
	);
};

export default Contact;
