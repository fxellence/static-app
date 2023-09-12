import CookieBanner from "@/component/home_page/cookies";
import "@/styles/globals.css";
import { StyledEngineProvider } from "@mui/material";
import Head from "next/head";
import { posthog } from "posthog-js";

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
      <script src="https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=1921e622-314b-11ee-b2af-cf8cc1ab24a1"></script>
        <title>FXellence International Payments</title>
        <meta
          name="keywords"
          content="International Payments, Send money abroad, FXellence, FXellence IP, FXellence International Payments, FXellence Technology Limited, Foreign Exchange, IMT, Overseas, Money Transfer, Money Movement, Send Money, Currencies, Worldwide, Online, Secure, Simple, Easy, Small Business, Large Business, Convert Currency, Converting Currency, Payment Platform, real-time rates, real-time live rates, live rates, competitive rates, real time rates, exchange rates, sending payments, send payment, send worldwide, Euro, US Dollar, FX, FX Experts, Payment Expert, Payments Experts, Bank Payment, FX Specialist, Payment Specialist, international payment needs, payments platform, major currencies, countries worldwide"
        />

        <meta
          name="description"
          content="International Payments made easy.  Send money abroad in all major currencies to almost any destination worldwide.  Online, Secure &amp; Simple.  Foreign Exchange for Small and Large Businesses.  UK Company."
        ></meta>

        <meta
          property="og:description"
          content="International Payments made easy.  Send money abroad in all major currencies to almost any destination worldwide.  Online, Secure &amp; Simple.  Foreign Exchange for Small and Large Businesses.  UK Company."
        ></meta>
      </Head>

      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}
