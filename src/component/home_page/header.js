import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Styles from "./home.module.css";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { useRouter } from "next/router";
import { NoEncryption } from "@mui/icons-material";
import { Image_files } from "../images/images";
import { Container } from "@mui/material";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const Router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color:"black",
        "& .MuiPaper-root": { backgroundColor: "transparent" },
        
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
      
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} onClick={handleScroll}>
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem>

        
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
  
 <Box id="top"
      sx={{
        display: "flex",
        "& .MuiPaper-root": {
          backgroundColor: "white",
          
         boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
          position: "fixed",
          padding: { md: "10px 80px 10px 100px", xs: "20px 0px 20px 0px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",

        },
        "& .MuiToolbar-root": {
          justifyContent: "space-between",
          minHeight: 45,
          width:{md:"1200px", xs:"550px"},
         
         
        },
      }}
    >
      <CssBaseline />
      <Container  className={Styles.container}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" },color:"#9926f0" }
            
            }
          >
            <MenuIcon />
          </IconButton>
          <img src={Image_files.Logo}/>
          <Box className={Styles.headertext}
            sx={{
              display: { xs: "none", sm: "block" },
             // padding: "10px 40px",
              "& .MuiButtonBase-root": {
                padding: "5px 20px",
                fontFamily: 'Poppins,sans-serif',
                fontSize: "14px",
                fontWeight:900,
              },
            }}
          >
            <a className={Styles.headertext}>Home</a>
            <button className={Styles.headertext} onClick={handleScroll}>Contact</button>
            
          </Box>
         
        </Toolbar>
      </AppBar>
      </Container>
     
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
   
   
    </>
  

  );
}
DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
