import React, { useContext, useEffect } from "react";
import bubbleImage from "../../image/bubble end.png";
import { Box, Switch } from "@mui/material";
import Cards from "../../components/card/Cards";
import SearchBar from "../../components/search/SearchBar";
import { DataContext } from "../../App";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const { state, dispatch } = useContext(DataContext);
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
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "700px",
          background: state.theme.bgColor,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              width: "133px",
              position: "relative",
              right: "231px",
              top: "111px",
            }}
          >
            <img
              src={bubbleImage}
              alt="bubbleimage-end"
              style={{ width: "100%" }}
            />
          </Box>
          <Switch
            checked={state.theme.toggle}
            onChange={handleChange}
            aria-label={"login switch"}
          />
        </Box>
        <SearchBar />
        <Box sx={{}}>
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
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            customRightArrow={<CustomRightArrow />}
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
      </div>
    </>
  );
};

export default Home;
