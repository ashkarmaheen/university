import {
  Avatar,
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Select from "@mui/material/Select";
import { DataContext } from "../../App";
import studentImage from "../../image/student.png";
import bubbleImage from "../../image/bubble start.png";
import axios from "axios";
import bubbleoImage from "../../image/bubble end.png";

const SearchBar = () => {
  const { state, dispatch, mediaQuery } = useContext(DataContext);
  const [country, setCountry] = useState("India");
  const [search, setSearch] = useState();
  const handleChange = (event) => {
    setCountry(event.target.value);

    // console.log(event.target.value);
    axios
      .get(
        `http://universities.hipolabs.com/search?name=${search}&country=${event.target.value}`
      )
      .then((res) => {
        dispatch({ type: "university-list", payload: res.data });
      });
  };

  const searchHandleChange = (event) => {
    setSearch(event.target.value);

    // console.log(event.target.value);

    axios
      .get(
        `http://universities.hipolabs.com/search?name=${event.target.value}&country=${country}`
      )
      .then((res) => {
        dispatch({ type: "university-list", payload: res.data });
      });
  };

  //console.log(state);
  return (
    <>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          mt: 5,
          height: {
            xs: "135px",
            sm: "160px",
            md: "243px",
            lg: "358px",
          },
        }}
      >
        <Box
          sx={{
            width: "8%",
            height: {
              xs: "125px",
              sm: "80%;",
              md: "67%",
              lg: "215px",
            },
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <img
              src={bubbleImage}
              alt="bubble-image"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              xs: "83%",
              sm: "69%",
              md: "55%",
              lg: "50%",
            },
            height: {
              xs: "120px",
              sm: "75%",
              md: "60%",
              lg: "200px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid sx={{ width: "100%" }}>
            <TextField
              sx={{
                width: {
                  xs: "66%",
                  sm: "65.9%",
                  md: "71%",
                  lg: "78%",
                  border: "1px solid #00000014",
                  borderRadius: "10px 0px 0px 10px",
                  borderColor: state.theme.borderClo,
                },
              }}
              placeholder="Search"
              onChange={searchHandleChange}
            />
            <Select
              sx={{
                width: "160px",
                height: "57.2px",
                borderRadius: "0px 4px 4px 0px",
                color: state.theme.fontColor,
                background: state.theme.selectBg,
                borderColor: state.theme.selectborder,
              }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              variant="filled"
              value={country}
              onChange={handleChange}
            >
              {state &&
                state.api.countryAPI !== "" &&
                state.api.countryAPI?.map((value, index) => (
                  <MenuItem key={index} value={value.name} sx={{}}>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        sx={{ fontWeight: 600, mt: 2 }}
                      >
                        {value.name}
                      </Typography>
                      <Avatar
                        alt={value.name}
                        src={value.flag}
                        sx={{ width: 34, height: 24 }}
                        variant="square"
                      />
                    </Stack>
                  </MenuItem>
                ))}
            </Select>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "8%",
            height: {
              xs: "120px",
              sm: "",
              md: "",
              lg: "200px",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <img
              src={bubbleImage}
              alt="bubbleoimage-end"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        {mediaQuery.mobile && (
          <Box sx={{ width: "25%", height: "200px" }}>
            <img
              src={studentImage}
              alt="stundentimage"
              style={{ width: "100%" }}
            />
          </Box>
        )}
      </Stack>
    </>
  );
};

export default SearchBar;
