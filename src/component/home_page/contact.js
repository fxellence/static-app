import React from "react";
import Styles from "./home.module.css";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import { Style } from "@mui/icons-material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Checkarrow } from "../Components/icon";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input_error } from "../Components/Textstring";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      companyname: "",
      email: "",
      mobile: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required."),
      companyname: Yup.string().required("Company Name is required."),
      mobile: Yup.string().required("Mobile Number is required."),
      message: Yup.string().required("Message is required."),
      email: Yup.string()
        .required("Email is required ")
        .email("Enter your valid email"),
    }),
    onSubmit: () => {
      const userDetails = {
        email: formik.values.email,
        mobile: formik.values.mobile,
        name: formik.values.name,
        companyname: formik.values.companyname,
        message: formik.values.message,
      };
      // handleClose();
      setIsSubmitted(true);
      formik.resetForm();
      onSendPress();
    },
  });

  const onSendPress = async () => {
    var myHeaders = new Headers();
//myHeaders.append("authority", "forms.nicepagesrv.com");
myHeaders.append("accept", "*/*");
myHeaders.append("accept-language", "en-US,en;q=0.9");
//myHeaders.append("cache-control", "no-cache");
myHeaders.append("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
myHeaders.append("origin", "https://www.fxellence.com");
//myHeaders.append("pragma", "no-cache");
myHeaders.append("referer", "https://www.fxellence.com/");
myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "cross-site");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36");

var raw = `name=${formik.values.name}&Company%2FBusiness+Name=${formik.values.companyname}&email=${formik.values.email}&phone=${formik.values.mobile}&message=${formik.values.message}&recaptchaResponse=&formServices=37c1f698806bc77d12a25b9e489b049e`;

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://forms.nicepagesrv.com/v2/form/process", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
   
   
  };

  return (
    <>
      <div id="contact" className={Styles.contact}>
        <Typography
          className={Styles.contacttitle}
          sx={{ textAlign: "center" }}
        >
          Contact
        </Typography>
        <Container className={Styles.container}>
        <Grid container className={Styles.contactpadding}>
          <Grid item xs={12} md={6}>
            <div className={Styles.contact1}>
              <Typography className={Styles.contactsubtitle}>
                Have one of our FX Payment Specialists contact you to discuss
                your FX Payment needs and see how we can help you
              </Typography>
              <Typography className={Styles.contacttext}>
                Why FXellence?
              </Typography>
              <ul className={Styles.list}>
                <li>
                  {" "}
                  <span className={Styles.icon}>
                    {" "}
                    <Checkarrow />
                  </span>
                  Transfer money fast
                </li>
                <li>
                  <span className={Styles.icon}>
                    {" "}
                    <Checkarrow />
                  </span>
                  Transparent pricing
                </li>
                <li>
                  <span className={Styles.icon}>
                    {" "}
                    <Checkarrow />
                  </span>
                  Competitive, real-time live rates
                </li>
                <li>
                  <span className={Styles.icon}>
                    {" "}
                    <Checkarrow />
                  </span>
                  Low and No fee options
                </li>
                <li>
                  <span className={Styles.icon}>
                    {" "}
                    <Checkarrow />
                  </span>
                  State-of-the-art security
                </li>
                <li>
                  <span className={Styles.icon}>
                    {" "}
                    <Checkarrow />
                  </span>
                  FX Payment Specialists
                </li>
                <li>
                  <span className={Styles.icon}>
                    {" "}
                    <Checkarrow />
                  </span>
                  Easy to use
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={formik.handleSubmit}>
              <div className={Styles.contact2}>
                <input
                  name="name"
                  placeholder="Name"
                  autoComplete="false"
                  className={Styles.contactinput}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <Box>
                  {formik.errors.name && formik.touched.name && (
                    <Input_error text={formik.errors.name} />
                  )}
                </Box>
                <input
                  name="companyname"
                  placeholder="Company / Business Name"
                  autoComplete="false"
                  className={Styles.contactinput}
                  value={formik.values.companyname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Box>
                  {formik.errors.companyname && formik.touched.companyname && (
                    <Input_error text={formik.errors.companyname} />
                  )}
                </Box>
                <input
                  name="email"
                  placeholder="Email"
                  autoComplete="false"
                  value={formik.values.email}
                  className={Styles.contactinput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Box>
                  {formik.errors.email && formik.touched.email && (
                    <Input_error text={formik.errors.email} />
                  )}
                </Box>
                <input
                  name="mobile"
                  placeholder="Phone"
                  autoComplete="false"
                  value={formik.values.mobile}
                  className={Styles.contactinput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Box>
                  {formik.errors.mobile && formik.touched.mobile && (
                    <Input_error text={formik.errors.mobile} />
                  )}
                </Box>
                <textarea
                  name="message"
                  placeholder="Message"
                  autoComplete="false"
                  value={formik.values.message}
                  className={Styles.textarea}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Box>
                  {formik.errors.message && formik.touched.message && (
                    <Input_error text={formik.errors.message} />
                  )}
                </Box>
                
                <button className={Styles.sentbutton} type="submit">
                  <Typography className={Styles.sentbuttontext}>
                    Send to FXellence
                    <SendIcon sx={{ marginLeft: "10px" }} />
                  </Typography>
                </button>
                {isSubmitted && (
                  <Typography className={Styles.submit}>
                    Thank you! Your message has been sent.
                  </Typography>
                )}
                <Typography className={Styles.contactsubtext}>
                  We value privacy, we don't sell data. We'll only use your
                  information for the purposes of discussing your FX Payment
                  needs.
                </Typography>
              </div>
            </form>
          </Grid>
        </Grid>
        </Container>
       
      </div>
    </>
  );
};
