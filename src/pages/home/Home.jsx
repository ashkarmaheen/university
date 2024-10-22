import React, { useContext, useEffect } from "react";
import { Box, ButtonGroup, styled, Switch } from "@mui/material";
import Cards from "../../components/card/Cards";
import SearchBar from "../../components/search/SearchBar";
import { DataContext } from "../../App";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./home.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import logImg from "../../image/LERNME.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home = () => {
  const { state, dispatch, mediaQuery } = useContext(DataContext);
  // console.log(state);
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) =>
        dispatch({ type: "country-list", payload: response.data.data })
      );
  }, []);

  const handleChange = (event) => {
    dispatch({ type: "theme-mode", payload: event });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktopSmall: {
      breakpoint: { max: 1270, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 775 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tabletSmall: {
      breakpoint: { max: 775, min: 600 },
      items: 2.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));
  return (
    <>
      <div
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xm={12}
        style={{
          width: "100%",
          background: state.theme.bgColor,
        }}
      >
        <Box
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xm={12}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            checked={state.theme.toggle}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: {
              xs: "38px",
              sm: "45px",
              md: "60px",
              lg: "80px",
            },
            fontFamily: "headerfont",
            color: "#A5A3FF",
          }}
        >
          SEARCH UNIVERSITY
        </Box>
        <SearchBar />
        <Box sx={{ background: state.theme.bgColor }}>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            Carousel
            Carouselarrows={true}
            customButtonGroup={<ButtonGroup />}
            partialVisible={true}
          >
            {state &&
              state.api.universitiesAPI !== "" &&
              state.api.universitiesAPI.map((value, index) => (
                <div key={index}>
                  <Cards pro={value} flag={state && state.api.countryAPI} />
                </div>
              ))}
          </Carousel>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            background: "#3B3B5C",
            display: { xs: "", sm: "flex", md: "flex", lg: "flex" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "30%", md: "30%", lg: "30%" },
              paddingLeft: { xs: "30px", sm: "", md: "", lg: "" },
              height: "100%",
            }}
          >
            <img src={logImg} alt="LearnMe" />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "30%", md: "30%", lg: "30%" },
              paddingLeft: { xs: "30px", sm: "", md: "", lg: "" },
              height: "100%",
              color: "#ffffff",
              fontFamily: "headerfont",
            }}
          >
            <h1>Contact</h1>
            <p>Office No. 6, Kottayam, Erattupetta</p>
            <p>lernme@gmail.com</p>
            <p>India :+91 9876543212, +91 1234509876</p>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "30%", md: "30%", lg: "30%" },
              paddingLeft: { xs: "30px", sm: "", md: "", lg: "" },
              height: "100%",
              color: "#ffffff",
              fontFamily: "headerfont",
              display: { xs: "", sm: "flex", md: "flex", lg: "flex" },
              justifyContent: "center",
            }}
          >
            <Box>
              <h1>Social</h1>
              <Box>
                <InstagramIcon fontSize="large" />
                <FacebookIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            background: "#A5A3FF",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          Copyright © 2024 learnme
        </Box>
      </div>
    </>
  );
};

export default Home;
