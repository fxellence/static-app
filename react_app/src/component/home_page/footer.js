import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Image_files } from "../images/images";
import Styles from "./home.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import dynamic from 'next/dynamic'
import { CookieConsentProvider, useCookieConsentContext } from '@use-cookie-consent/react'
import CloseIcon from '@mui/icons-material/Close';


export const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };
  const { acceptAllCookies, declineAllCookies, acceptCookies } =
  useCookieConsentContext();
  console.log(acceptAllCookies ,'useCookieConsentContext______',  declineAllCookies, acceptCookies);

  return (
    <>
      <Container className={Styles.fotterpadding}>
        <div className={Styles.footer}>
          <Grid container alignItems={"start"}>
            <Grid item xs={12} md={8}>
              <img src={Image_files.Logo} width={"190px"} />
              <Typography
                className={Styles.footertext}
                sx={{ marginTop: "40px" }}
              >
                FXellence and FXellence International Payments are trade names
                of FXellence Technology Limited
              </Typography>
              <Typography className={Styles.footertext}>
                FXellence Technology Limited is registered in England and Wales.
                Company number: 14942373
              </Typography>

              <Typography className={Styles.footertext}>
                © Copyright 2023 FXellence Technology Limited
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display={"flex"}
              justifyContent={{ md: "end", xs: "start" }}
              columnGap={1}
            >
              <a
                target="_blank"
                className={Styles.button}
                href="https://www.facebook.com/people/FXellence/100094004388155/"
              >
                <FacebookRoundedIcon className={Styles.footericon} />
              </a>
              <a
                className={Styles.button}
                href="https://twitter.com/fxellenceip"
              >
                <TwitterIcon className={Styles.footericon} />
              </a>
              <a className={Styles.button} href="">
                <LinkedInIcon className={Styles.footericon} />
              </a>
              <a className={Styles.button} href="">
                <InstagramIcon className={Styles.footericon} />
              </a>
            </Grid>
          </Grid>
          <button className={Styles.backtotop} onClick={handleScroll}>
            <ExpandLessRoundedIcon sx={{ fontSize: "35px" }} />
          </button>
        </div>
        
      </Container>
    </>
  );
};
