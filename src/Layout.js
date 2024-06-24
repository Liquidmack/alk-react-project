import {Outlet} from "react-router-dom";
import Menu from "./components/Menu";
import {Box, Grid} from "@mui/material";

export default function Layout() {
  return (
    <Grid container spacing={{xs: 0, md: 2}}>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={2}
        sx={{
          position: {xs: "fixed", md: "initial"},
          bottom: {xs: 0, md: "initial"},
          width: {xs: "100%"},
          zIndex: {xs: "1024"},
          bgcolor: {xs: "#000", md: "#1e1e1e"},
          borderTop: {xs: "solid 2px #1e1e1e", md: "initial"},
          boxShadow: {xs: "0px -24px 24px rgba(0,0,0,.4)", md: "initial"},
        }}>
        <Box padding={2} minHeight={"100dvh"} sx={{minHeight: {xs: "100%"}}}>
          <Menu />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={10} sx={{paddingBottom: {xs: `128px`, md: `initial`}}}>
        <Box padding={2}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}
