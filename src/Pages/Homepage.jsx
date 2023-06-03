import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import { Box, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Homepage.css";
import CarouselImages from "../Assets/HomeCarousel";
import HomepageVideo from "../Assets/Home-landing.mp4";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const imgStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  padding: "1rem"
};

const title = {
  hidden: {
    x: "-100vw",
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      type: "spring",
      stiffness: 120
    }
  }
};

const Homepage = () => {
  return (
    <ReactFullpage
      navigationTooltips={["Home", "Resorts", "Malls", "Colleges", "Hospitals", "Apartments", "Colonies", "Review", "Projects"]}
      scrollingSpeed={1000}
      scrollHorizontally={true}
      navigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <>
            <div className="video-container section">
              <video autoPlay muted loop>
                <source src={HomepageVideo} type="video/mp4" />
              </video>
              <Box data-aos="fade-down" className="titleBox-container">
                <motion.div className="titleBox">
                  <motion.h1
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 120 }}
                  >
                    We Are Professionals
                  </motion.h1>
                  <motion.h1 variants={title} initial="hidden" animate="visible">
                    We Build
                  </motion.h1>
                  <IconButton data-aos="fade-down" data-aos-delay="300" onClick={() => fullpageApi.moveSectionDown()}>
                    <ExpandMoreIcon fontSize="large" style={{ backgroundColor: "white" }} />
                  </IconButton>
                </motion.div>
              </Box>
            </div>
            {/* CARD SECTIONS */}
            <div className="section cardS1">
              <div className="text-box">
                <Typography gutterBottom variant="h5" component="h2">
                  Resorts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Reiciendis quod, praesentium doloremque voluptate dolore consequuntur culpa
                  deleniti odio molestias fugit, quae quibusdam facere quo tenetur quam, possimus sequi inventore harum!
                </Typography>
              </div>
            </div>
            <div className="section cardS2">
              <div className="text-box">
                <Typography gutterBottom variant="h5" component="h2">
                  Malls
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Similique, velit?
                </Typography>
              </div>
            </div>

            <div className="section cardS3">
              <div className="text-box">
                <Typography gutterBottom variant="h5" component="h2">
                  Colleges
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Similique, velit?
                </Typography>
              </div>
            </div>
            <div className="section cardS4">
              <div className="text-box">
                <Typography gutterBottom variant="h5" component="h2">
                  Hospitals
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit?
                </Typography>
              </div>
            </div>
            <div className="section cardS5">
              <div className="text-box">
                <Typography gutterBottom variant="h5" component="h2">
                  Apartments
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod, praesentium doloremque voluptate dolore
                  consequuntur culpa deleniti odio molestias fugit, quae quibusdam facere quo tenetur quam, possimus sequi
                  inventore harum!
                </Typography>
              </div>
            </div>
            <div className="section cardS6">
              <div className="text-box">
                <Typography gutterBottom variant="h5" component="h2">
                  Colonies
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Similique, velit?
                </Typography>
              </div>
            </div>
            <div className="section">
              <div className="quote article">
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in rem ipsa commodi beatae facilis voluptas saepe
                  porro nulla cupiditate suscipit facere illo omnis natus ut, nesciunt corrupti! Amet, ut. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Similique, velit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis quod, praesentium doloremque voluptate dolore consequuntur culpa deleniti odio molestias fugit, quae
                  quibusdam facere quo tenetur quam, possimus sequi inventore harum!
                </q>
                <cite>-Lorem ipsum</cite>
              </div>
            </div>
            <div className="section">
              <div style={{ textAlign: "center" }}>
                <h1>Our Projects</h1>
              </div>
              <Slider slidesToShow={2} autoplay={true} dots autoplaySpeed={2000} className="carousel">
                {CarouselImages.map((image, index) => {
                  return (
                    <div key={index}>
                      <img src={image.src} alt="architecture" style={imgStyle} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </>
        );
      }}
    />
  );
};

export default Homepage;
