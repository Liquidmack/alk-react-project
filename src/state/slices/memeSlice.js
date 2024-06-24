import {createSlice} from "@reduxjs/toolkit";

function isHot(meme) {
  const upvotes = meme.upvotes;
  const downvotes = meme.downvotes;

  return upvotes - downvotes > 5;
}

function moveMeme(from, index, to) {
  to.push(from[index]);
  from.splice(index, 1);
}

export const memeSlice = createSlice({
  name: "memes",
  initialState: {
    hot: [],
    regular: [],
  },
  reducers: {
    upvote: (state, action) => {
      if (action.payload.category === "hot") {
        state.hot[action.payload.index].upvotes += 1;

        if (!isHot(state.hot[action.payload.index])) {
          moveMeme(state.hot, action.payload.index, state.regular);
        }
      } else if (action.payload.category === "regular") {
        state.regular[action.payload.index].upvotes += 1;

        if (isHot(state.regular[action.payload.index])) {
          moveMeme(state.regular, action.payload.index, state.hot);
        }
      }
    },
    downvote: (state, action) => {
      if (action.payload.category === "hot") {
        state.hot[action.payload.index].downvotes += 1;

        if (!isHot(state.hot[action.payload.index])) {
          moveMeme(state.hot, action.payload.index, state.regular);
        }
      } else if (action.payload.category === "regular") {
        state.regular[action.payload.index].downvotes += 1;

        if (isHot(state.regular[action.payload.index])) {
          moveMeme(state.regular, action.payload.index, state.hot);
        }
      }
    },
    addMeme: (state, action) => {
      let meme = {
        title: action.payload.title,
        upvotes: action.payload.upvotes,
        downvotes: action.payload.downvotes,
        image: action.payload.image,
      };

      if (isHot(meme)) {
        state.hot.push(meme);
      } else {
        state.regular.push(meme);
      }
    },
  },
});

export const {upvote, downvote, addMeme} = memeSlice.actions;

export default memeSlice.reducer;
