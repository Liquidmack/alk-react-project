import {Button, Stack} from "@mui/material";
import {useNavigate, useLocation} from "react-router-dom";
import {LocalFireDepartment, Home} from "@mui/icons-material";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack spacing={2} position={"sticky"} top={"16px"} xs={{position: "initial"}}>
      <Button
        startIcon={<LocalFireDepartment />}
        color='warning'
        variant={location.pathname === "/hot" ? "contained" : "outlined"}
        onClick={() => {
          navigate("/hot");
        }}>
        Hot
      </Button>
      <Button
        startIcon={<Home />}
        variant={location.pathname === "/regular" ? "contained" : "outlined"}
        onClick={() => {
          navigate("/regular");
        }}>
        Regular
      </Button>
    </Stack>
  );
}
