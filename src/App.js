import "./App.css";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Layout from "./Layout";
import RegularPage from "./pages/RegularPage";
import HotPage from "./pages/HotPage";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter basename='/'>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate to='/regular' replace />} />
            <Route path='/regular' element={<RegularPage />} />
            <Route path='/hot' element={<HotPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
