import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LanguageIcon from "@mui/icons-material/Language";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { DataContext } from "../../App";

const Cards = ({ pro, flag }) => {
  const { state, dispatch } = useContext(DataContext);

  console.log(state);

  var flagFilter = flag.filter(function (el) {
    return el?.iso2 === pro.alpha_two_code;
  });

  console.log(flagFilter);
  return (
    <>
      <Card
        style={{
          marginBottom: "10px",
          minWidth: "250px",
          height: "200px",
          maxWidth: "250px",
          cursor: "pointer",
          background: state.theme.bgColor,
          color: state.theme.fontColor,
          borderColor: state.theme.borderClo,
          boxShadow: state.theme.borderShide,
        }}
        sx={{
          mx: 1,
          border: "1px solid #00000014",
          boxShadow:
            "0px 2px 1px -1px #0000001f, 0px 1px 1px 0px #0000001f, 0px 1px 3px 0px #0000001f",
        }}
      >
        <CardContent>
          <Typography
            style={{
              textAlign: "center",
              fontSize: "20px",
              height: "80px",
              overflow: "hidden",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {pro.name}
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography
              sx={{ mb: 1.5, color: state.theme.fontColor }}
              color="text.secondary"
              variant="h6"
            >
              Country
            </Typography>
            <Typography
              sx={{ mb: 1.5, display: "flex" }}
              color="text.secondary"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "20px",
                  display: "flex",
                  mx: 1,
                }}
              >
                <img src={flagFilter && flagFilter[0]?.flag} alt="" />
              </Box>
              {pro.alpha_two_code}
            </Typography>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <CardActions>
              <LanguageIcon></LanguageIcon>
              <Link href={pro.web_pages} underline="hover">
                {"Link"}
              </Link>
            </CardActions>
            <Typography
              sx={{ mr: 3, mt: 1, color: state.theme.fontColor }}
              color="text.secondary"
            >
              {pro["state-province"]}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
