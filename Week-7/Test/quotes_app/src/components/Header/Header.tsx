import * as React from "react";
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
import { Link } from "react-router-dom";
import { SxProps } from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  // useMemo here
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          Quotes-App
        </Typography>
      </Link>
      <Divider />
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Home" sx={{textDecoration:"none"}} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/all-quotes">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="All-Quotes" />
            </ListItemButton>
          </ListItem>
          </Link>        <Link to="/add-quote">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Add-new-quote" />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
    </Box>
  );

  // custome hook, dom mange
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* jo bhi likhoge uska mtlb pta hona chahiye... ?? uska mtlb smjh me nhi ataa what is this ????? */}
      <AppBar component="nav" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Quotes-App
            </Typography>
            <Link to="/">
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* do not style inline */}
            <Link to="/all-quotes"> 
            {/* where is constant ? */}
              <Button sx={{ color: "#fff" }}>All-Quotes</Button>
            </Link>
            <Link to="/add-new-quote">
              <Button sx={{ color: "#fff" }}>Add-Quotes</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          color="blue"
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

        {/* make custom drawer here, do not use directly any feature of MUI*/}
      </nav>
      <Toolbar />
    </Box>
  );
}

// const sxProps= {
//   container: {
//     margin: 10
//   }
// } satisfies Record<string,SxProps> ;

// sxProps.container