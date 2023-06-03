import React from "react";
import "./SmartBuildings.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const SmartBuildings = () => {
	return (
		<>
			<Container maxWidth="lg">
				<div className="sb-container">
					<div data-aos="fade-down" data-aos-duration="600" className="underline">
						<h1>Smart Buildings</h1>
					</div>
					<div data-aos="zoom-in" data-aos-duration="1000" className="sb-div">
						<img src="https://handdryerassociation.org/wp-content/uploads/2020/02/SmartBuildingIndicator-680x380@2x.jpg" alt="smartBuilding" />
					</div>
					<Typography data-aos="fade-right" data-aos-anchor-placement="center-bottom" variant="subtitle1">
						At its most basic, a smart building is one that is using technology to share information about what goes on in the building between systems so as to optimise the building's performance.
						This information is then used to automate various processes, from heating and ventilation to air conditioning and security.
					</Typography>
				</div>

				<div className="gb-container">
					<div data-aos="fade-down" data-aos-duration="600" className="underline">
						<h1>Green Buildings</h1>
					</div>
					<div data-aos="zoom-in" data-aos-duration="1000" className="sb-div">
						<img src="https://whenonearth.net/wp-content/uploads/Taipei-Public-Library.jpg" alt="greenBuilding" />
					</div>
					<Typography data-aos="fade-right" data-aos-anchor-placement="center-bottom" variant="subtitle1">
						Green building refers to both a structure and the application of processes that are environmentally responsible and resource-efficient throughout a building's life-cycle: from planning to
						design, construction, operation, maintenance, renovation, and demolition.
					</Typography>
					<div data-aos="zoom-in-up" data-aos-duration="1000" className="sb-div article">
						<img src="https://i.ytimg.com/vi/THgQF8zHBW8/maxresdefault.jpg" alt="greenBuilding" />
					</div>
				</div>
			</Container>
		</>
	);
};

export default SmartBuildings;
