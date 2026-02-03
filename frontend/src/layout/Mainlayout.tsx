import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { navigationLabels, navigationRoutes } from '../constants/navigationDropdowns'
import Button from '@mui/material/Button'
// Updated import path
import FadeMenu, { DrawerFadeMenu } from '../components/Drawer/Drawer';
import { FaEnvelope, FaFacebookF } from '../icons/othersImport'
import { logo } from "../assets/images";

// CSS IMPORTS
import "../assets/styles/rootPage.css"
import "../assets/styles/Navbar.css";
import "../assets/styles/HomePage.css";
import "../assets/styles/HeroPage.css";
import "../assets/styles/FooterPage.css";
import "../assets/styles/PageNotFound.css";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppRoutes from '../routes/AppRoutes'

const drawerWidth = 240

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }


  const drawer = (
    // Removed onClick={handleDrawerToggle} from the outer Box
    <Box sx={{ textAlign: 'center' }}>
      <header>
        {/* Top Bar */}

        {/* Main Header */}
        <div className="main-header-drawer">
          <div className="logo-section">
            <img src={logo} alt="School Logo" />
          </div>
        </div>
        <Divider />
        <List>
          {navigationLabels.map((item) => (
            <React.Fragment key={item}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={() => navigate(navigationRoutes[item])}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>

              {/* Insert DrawerFadeMenu between Home and Career */}
              {item === "Home" && (
                <>
                  <DrawerFadeMenu menuType="aboutUs" onCloseDrawer={handleDrawerToggle} />
                  <DrawerFadeMenu menuType="admission" onCloseDrawer={handleDrawerToggle} />
                </>
              )}
            </React.Fragment>
          ))}
        </List>
      </header>
    </Box>
  )

  const container = typeof window !== 'undefined' ? () => document.body : undefined;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <header>
          {/* Top Bar */}
          {windowWidth > 800 && (
            <div className="top-bar">
              <div className="right-top-bar">
                <div id="top-bar-trapezoid">
                </div>
                <p>Join with us and be part of the success</p>
              </div>
              <div className="left-top-bar">
                <FaFacebookF className="facebook-icon" />
              </div>
            </div>
          )}
          {/* Main Header */}
          <div className="main-header">
            <div className="logo-section">
              <img src={logo} alt="School Logo" />
              <span>CAN-AVID NATIONAL HIGH SCHOOL</span>
            </div>

            <button className="message-button">
              {windowWidth > 400 ? (
                <>
                  <span>MESSAGE US</span>
                  <FaEnvelope className="envelope-icon" />
                </>
              ) : (
                <FaEnvelope className="envelope-icon" />
              )}
            </button>

          </div>
        </header>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navigationLabels.map((item) => (
              <React.Fragment key={item}>
                <Button sx={{ color: "#fff" }} onClick={() => navigate(navigationRoutes[item])} >
                  {item}
                </Button>
                {item === "Home" && (
                  <>
                    <FadeMenu menuType="aboutUs" onCloseDrawer={handleDrawerToggle} />
                    <FadeMenu menuType="admission" onCloseDrawer={handleDrawerToggle} />
                  </>
                )}
              </React.Fragment>
            ))}
            {/* Desktop FadeMenu */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default function MainLayout() {
  return (
    <React.Fragment>
      <DrawerAppBar />
      <AppRoutes />
    </React.Fragment>
  )
}
