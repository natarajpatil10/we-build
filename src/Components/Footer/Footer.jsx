import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
import { Container, Toolbar } from "@material-ui/core";
import { Facebook, LinkedIn, YouTube } from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-router-dom";

const Footer = () => {
	// return (
	// 	<ReactFullpage
	// 		scrollingSpeed={1000}
	// 		navigation={true}
	// 		render={({ state, fullpageApi }) => {
		return (
			<footer>
				<a href="#header" style={{ float: "right", margin: "1rem", border: "2px solid gray" }}>
					<ArrowUpwardIcon />
				</a>
				<Container maxWidth="xl" className="footer">
					<Toolbar className="footer-toolbar">
						Lorem Ipsum
						<p>dolor sit amet.</p>
						<p>+91 9845698456</p>
						<p>Copyrights © 2021</p>
					</Toolbar>

					<Toolbar className="footer-toolbar">
						<a href="footer-links">Projects</a>
						<a href="footer-links">Services</a>
						<a href="footer-links">Products</a>
						<a href="footer-links">Sign-up</a>
						<a href="footer-links">Careers</a>
					</Toolbar>
					<Toolbar className="footer-toolbar">
						<Link to="/contact">Contact Us</Link>
						<a href="footer-links">Services</a>
						<a href="footer-links">Products</a>
						<a href="footer-links">Sign-up</a>
						<a href="footer-links">Careers</a>
					</Toolbar>

					<Toolbar className="footer-toolbar">
						<p>We Are In Social Media</p>
						<div style={{ display: "flex" }}>
							<a href="facebook">
								<Facebook />
							</a>
							<a href="instagram">
								<InstagramIcon />
							</a>
							<a href="youtube">
								<YouTube />
							</a>
							<a href="linkedin">
								<LinkedIn />
							</a>
						</div>
					</Toolbar>
				</Container>
			</footer>
	);
};
// 		}
// 		/>
// 	);
// };

export default Footer;
