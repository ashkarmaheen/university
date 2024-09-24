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

const SearchBar = () => {
  const { state, dispatch } = useContext(DataContext);
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
      <Box sx={{ display: "flex", justifyContent: "center", mt: 15 }}>
        <Box
          sx={{
            width: "160px",
            position: "relative",
            left: "50px",
            top: "10px",
          }}
        >
          <img src={bubbleImage} alt="bubble-image" style={{ width: "100%" }} />
        </Box>
        <Grid sx={{ zIndex: "0", position: "relative", left: "60px" }}>
          <TextField
            InputProps={{
              style: { width: "500px", borderRadius: "4px 0px 0px 4px" },
            }}
            label="search"
            id="fullWidth"
            onChange={searchHandleChange}
          />
          <Select
            sx={{
              width: "160px",
              height: "56px",
              borderRadius: "0px 4px 4px 0px",
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
                <MenuItem key={index} value={value.name}>
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
        <Box
          sx={{
            height: "350px",
            width: "350px",
            position: "relative",
            bottom: "100px",
          }}
        >
          <img
            src={studentImage}
            alt="stundentimage"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchBar;
