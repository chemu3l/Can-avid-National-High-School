import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Box from '@mui/material/Box'
import { useNavigate } from "react-router-dom"

import type { DrawerFadeMenuProps } from '@/types/Button.interface'
import { menuMap } from '@/constants/navigationDropdowns'

export default function FadeMenu({menuType, onCloseDrawer }: DrawerFadeMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
const open = Boolean(anchorEl)
const navigate = useNavigate()

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  event.stopPropagation()
  console.log("vent.currentTarget:", event.currentTarget);
  setAnchorEl(event.currentTarget)
}

const handleClose = (event: React.MouseEvent<HTMLLIElement> | {}) => {
  if (event && 'stopPropagation' in event) {
    event.stopPropagation()
  }
  setAnchorEl(null)
}

const handleCloseMenu = () => {
  setAnchorEl(null)
}
const handleNavigate = (path: string) => {
  navigate(path)        // 1️⃣ go to page
  handleCloseMenu()     // 2️⃣ close menu
  onCloseDrawer?.()     // 3️⃣ close drawer
}
const items = menuMap[menuType];

  return (
    <Box sx={{ display: 'inline-block' }}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: '#fff' }}
      >
        {menuType === "aboutUs" ? "About Us" : "Admission"}
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
      {items.map((item) => (
        <MenuItem
          key={item.key}
          onClick={() => handleNavigate(item.path || '#')}
          sx={{ width: "100%" }}
        >
          {item.label}
        </MenuItem>
      ))}
      </Menu>
    </Box>
  )
}

/**
 * Mobile Drawer Menu Component
 * This component will open a Menu overlay without closing the parent Drawer.
 */
export function DrawerFadeMenu({menuType, onCloseDrawer }: DrawerFadeMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
const open = Boolean(anchorEl)
const navigate = useNavigate()

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  event.stopPropagation()
  console.log("vent.currentTarget:", event.currentTarget);
  setAnchorEl(event.currentTarget)
}

const handleClose = (event: React.MouseEvent<HTMLLIElement> | {}) => {
  if (event && 'stopPropagation' in event) {
    event.stopPropagation()
  }
  setAnchorEl(null)
}

const handleCloseMenu = () => {
  setAnchorEl(null)
}
const handleNavigate = (path: string) => {
  navigate(path)        // 1️⃣ go to page
  handleCloseMenu()     // 2️⃣ close menu
  onCloseDrawer?.()     // 3️⃣ close drawer
}
const items = menuMap[menuType];
  console.log("items: ", items);
  
return (
  <ListItem disablePadding>
    <ListItemButton
      id="drawer-fade-button"
      aria-controls={open ? 'drawer-fade-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      sx={{ textAlign: 'center' }}
    >
      <ListItemText primary={menuType === "aboutUs" ? "About Us" : "Admission"} />
      <KeyboardArrowDownIcon
        sx={{
          ml: 1,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s',
        }}
      />
    </ListItemButton>
    <Menu
      id="drawer-fade-menu"
      slotProps={{
        list: {
          'aria-labelledby': 'drawer-fade-button',
        },
        // CRITICAL: Configure the Paper component to match the drawer width and look like a sub-list.
        paper: {
          sx: {
            width: 240,
            // Remove floating effect for visual integration
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: 1,
          },
        },
      }}
      slots={{ transition: Fade }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      // Ensure perfect vertical and horizontal alignment to the left edge of the anchor
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {items.map((item) => (
        <MenuItem
          key={item.key}
          onClick={() => handleNavigate(item.path || '#')}
          sx={{ width: "100%" }}
        >
          {item.label}
        </MenuItem>
      ))}

    </Menu>
  </ListItem>
)
}