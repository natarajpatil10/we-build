import React from "react";
import { Container, Typography } from "@material-ui/core";
import Slider from "react-slick";

const Architecture = () => {
	const imgStyle = {
		width: "100%",
		height: "auto",
		objectFit: "cover",
		padding: "1rem",
	};

	return (
		<div>
			<Container maxWidth="lg">
				<div data-aos="zoom-in" data-aos-duration="1000" className="article">
					<img
						src="https://cdn.britannica.com/28/116528-050-1CAC6728/Great-Court-Foster-and-Partners-British-Museum-2000.jpg"
						alt="architecture"
						style={{ width: "100%", height: "auto", objectFit: "cover", marginBottom: "1rem" }}
					/>
				</div>
				<Slider slidesToShow={2} autoplay={true} autoplaySpeed={2000} dots={true} className="carousel">
					<div>
						<img
							src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="architecture"
							style={imgStyle}
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1511718014670-c04ae7843d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="architecture"
							style={imgStyle}
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1600119602122-80606a17dde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="architecture"
							style={imgStyle}
						/>
					</div>
				</Slider>
				<Typography data-aos="fade-right" data-aos-anchor-placement="center-bottom" variant="body1">
					Architecture is the art and science of designing buildings and other physical structures. A wider definition often includes the design of the total built environment from the macro level of
					town planning, urban design, and landscape architecture to the micro level of construction details and, sometimes, furniture.
				</Typography>
			</Container>
		</div>
	);
};

export default Architecture;
