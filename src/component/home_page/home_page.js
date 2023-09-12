import React from "react";
import DrawerAppBar from "./header";
import { Footer } from "./footer";
import { BannerSection } from "./banner";
import { Contact } from "./contact";


export const HomePage = ()=> {
return(
<>
    <div>
        
        <DrawerAppBar/>
        <BannerSection/>
        <Contact/>
        <Footer/>
       
       
    </div>
</>

);
}