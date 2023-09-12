import React from "react";
import Styles from "./home.module.css";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import CloseIcon from "@mui/icons-material/Close";

import { posthog } from "posthog-js";
import { useState } from "react";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true); // new

  const acceptCookies = () => {
    posthog.opt_in_capturing(); // new
    setShowBanner(false); // new
  };

  const declineCookies = () => {
    posthog.opt_out_capturing(); // new
    setShowBanner(false); // new
  };

  return (
    <>
      <div >
      {showBanner && (
        <div className={Styles.cookies}>
        <div className={Styles.spacebetween}>
          <div>
            <CookieOutlinedIcon sx={{ marginRight: "10px" }} />
            FXellence uses cookies to ensure you get the best experience on our
            website.{" "}
            <a
              href="privacy-policy.pdf"
              id="notificationPolicyLink"
              target="_blank"
              style={{ textDecoration: "underline", color: "#9f30efFF" }}
            >
              Learn More
            </a>
          </div>
          <div>
            <button onClick={declineCookies} className={Styles.cookiesbutton}>
              Decline
            </button>
            <button onClick={acceptCookies} className={Styles.cookiesbutton}>
              Allow All
            </button>
            <CloseIcon sx={{ marginLeft: "10px" }} />
          </div>
        </div>
      </div>

      )
      }


      </div>
      
    </>
  );
}

export default CookieBanner;
