import React from "react";
import { Curvedesign } from "../Components/icon";
import Styles from "./home.module.css";
import { Container, Grid, Typography } from "@mui/material";
import { Image_files } from "../images/images";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


export const BannerSection = () => {
    const handleScroll = (id)=> {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start",
          });
        }
      };

    return (
        <>
       
        <div id="top" className={Styles.banner}>
        <Container className={Styles.container}>
        <div className={Styles.bannerpadding}>
        <Grid container columnGap={"20px"}>
        <Grid item xs={12} md={6} className={Styles.buttonalignment}>
        <Typography className={Styles.bannertitle}>
        International Payments Made Easy
        </Typography>
        <Typography className={Styles.bannertext} sx={{marginTop:"20px"}}>
        Our aim is to provide a seamless process and experience for business customers, small and large, when converting currency and sending money abroad. Our Payment Platform does all the hard work, so you don't have to. Once your account is open, you're just a few clicks away from converting currency with real-time competitive rates and sending payments worldwide.
        </Typography>
        <button className={Styles.readmorebutton} onClick={handleScroll}>
            <Typography className={Styles.readmoretext}>
                Find out more
            </Typography>
            <div className={Styles.arrowbutton}>
            <ArrowForwardRoundedIcon/>
            </div>
            
        </button>
        </Grid>
        <Grid item xs={12} md={5.75} display={"flex"} alignItems={"center"} marginTop={"30px"}>
        <img src={Image_files.LiveRate}/>

        </Grid>


        </Grid>
        </div>
       
        </Container>
        <Curvedesign />
       
        </div>
       
       
        
        </>
    );
}