import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Rating from "./Rating";

export default function Meme({name, imageAddress, upvotes, downvotes, onUpvote, onDownvote}) {
  return (
    <Card sx={{width: "100%"}}>
      <CardContent>
        <Typography variant='span' sx={{fontSize: "1.25rem", fontWeight: "bold"}}>
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{
          aspectRatio: "1/1",
          objectFit: "contain",
          backgroundColor: "#000",
        }}
        component='img'
        image={imageAddress}
      />
      <CardActions disableSpacing={true} sx={{padding: 0, margin: 0}}>
        <Rating value={upvotes} type='upvote' onClick={onUpvote} />
        <Rating value={downvotes} type='downvote' onClick={onDownvote} />
      </CardActions>
    </Card>
  );
}
