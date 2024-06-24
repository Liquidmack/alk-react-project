import {Button} from "@mui/material";
import {ExpandMore, ExpandLess} from "@mui/icons-material";

export default function Rating({value, type, onClick}) {
  const currentIcon = type === "upvote" ? <ExpandLess /> : <ExpandMore />;
  const currentColor = type === "upvote" ? "success" : "error";
  const currentBottomBorder = type === "upvote" ? {borderBottomRightRadius: 0} : {borderBottomLeftRadius: 0};

  return (
    <Button
      sx={{width: "100%", margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, ...currentBottomBorder}}
      color={currentColor}
      variant='outlined'
      startIcon={currentIcon}
      onClick={onClick}>
      {value}
    </Button>
  );
}
