import React from "react";
import Slider from "react-slick";
import "./Interiors.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Interiors = () => {
	const settings = {
		autoplay: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		lazyLoad: true,
		speed: 500,
		dots: true,
	};
	
	return (
		<div className="interior-container">
			<Container maxWidth="lg">
				<Slider {...settings} className="carousel">
					<div className="interiors">
						<img src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="interior" />
					</div>
					<div className="interiors">
						<img src="https://images.unsplash.com/photo-1616137557258-95cdec177e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="interior" />
					</div>
					<div className="interiors">
						<img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="interior" />
					</div>
				</Slider>
				<div className="int-quote">
					<Typography data-aos="fade-right" variant="subtitle1">
						<q>Your Home should tell the story of who you are, and be a Collection of what you Love.</q>
					</Typography>
				</div>

				{/* ---------LANDSCAPES--------- */}

				<div className="landscape underline">
					<h1>Landscapes</h1>
				</div>

				<div className="landscape-section">
					<div data-aos="fade-up" className="article">
						<img src="https://images.unsplash.com/photo-1571512050766-0ff3b842dca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="landscape" />

						<div className="landscape-img-description">
							<h2>Lorem</h2>
							<Typography data-aos="fade-down" data-aos-anchor-placement="center-bottom" variant="body1">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, inventore officia. Fugit doloribus impedit corporis nesciunt magnam velit inventore deleniti dolores nostrum
								dignissimos, eligendi ab.
							</Typography>
						</div>
					</div>
					<div data-aos="fade-up" className="article">
						<div className="landscape-img-description">
							<h2>Lorem</h2>
							<Typography data-aos="fade-down" data-aos-anchor-placement="center-bottom" variant="body1">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, inventore officia. Fugit doloribus impedit corporis nesciunt magnam velit inventore deleniti dolores nostrum
								dignissimos, eligendi ab.
							</Typography>
						</div>
						<img src="https://images.unsplash.com/photo-1573998538588-dc057086dd27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="landscape" />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Interiors;
