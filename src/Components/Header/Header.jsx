import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconButton, makeStyles, Box, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

import links from "./NavLinks";
import "./Header.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
	},
}));

const Header = () => {
	const [toggleOpen, setToggleOpen] = useState(false);

	const handleSidebar = () => {
		setToggleOpen(!toggleOpen);
	};

	const classes = useStyles();

	return (
		<div id="header">
			<AppBar elevation={1}>
				<Toolbar className="web-navbar" style={{ height: "4rem", background: "white" }}>
					<Link to="/">
						<img
							src="https://i.pinimg.com/736x/69/34/73/693473a49f5048dd83077eb82b4513f9.jpg"
							alt="logo"
							style={{
								width: "58px",
								height: "58px",
								objectFit: "cover",
							}}
						></img>
					</Link>
					{links.map((link) => {
						const { id, url, text } = link;
						return (
							<Link data-aos="fade-down" key={id} to={url}>
								<motion.div whileTap={{ scale: 1.2, yoyo: 10 }} className="navbar-links">
									{text}
								</motion.div>
							</Link>
						);
					})}
				</Toolbar>
			</AppBar>

			{/* MOBILE NAVBAR */}

			<div className="nav-container">
				<AppBar position="fixed" color="transparent" elevation={1}>
					<Toolbar className={classes.root} style={{ height: "4rem", background: "white" }}>
						<IconButton onClick={handleSidebar}>{toggleOpen ? <CloseIcon /> : <MenuIcon />}</IconButton>

						<Link to="/">
							<img src="https://i.pinimg.com/736x/69/34/73/693473a49f5048dd83077eb82b4513f9.jpg" alt="logo" style={{ width: "58px", height: "58px", objectFit: "cover" }} />
						</Link>
						<IconButton>
							<SearchIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Box className="menu-container">
					<ul className={`${toggleOpen ? "expand" : "hide"} menu-list`}>
						<motion.li whileTap={{ scale: 1.2 }} className="mobile-links">
							<Link to="/">Home</Link>
						</motion.li>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<motion.li whileTap={{ scale: 1.2 }} key={id} className="mobile-links">
									<Link to={url}>{text}</Link>
								</motion.li>
							);
						})}
					</ul>
				</Box>
			</div>
		</div>
	);
};

export default Header;
