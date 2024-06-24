import {Grid} from "@mui/material";
import Meme from "./Meme";
import {useDispatch, useSelector} from "react-redux";
import {downvote, upvote} from "../state/slices/memeSlice";

export default function MemeGrid({category}) {
  const memes = useSelector((state) => (category === "hot" ? state.meme.hot : state.meme.regular));
  const dispatch = useDispatch();

  const memeComponents = memes.map((meme, index) => (
    <Grid item xs={12} sm={4} lg={3} xl={2.4}>
      <Meme
        name={meme.title}
        imageAddress={meme.image}
        upvotes={meme.upvotes}
        downvotes={meme.downvotes}
        onUpvote={() => dispatch(upvote({index: index, category: category}))}
        onDownvote={() => dispatch(downvote({index: index, category: category}))}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {memeComponents}
    </Grid>
  );
}
