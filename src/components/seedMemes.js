import {addMeme} from "../state/slices/memeSlice";
import store from "../state/store";

export default function seedMemes() {
  store.dispatch(
    addMeme({
      title: "Ceiling cat",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-1.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "One of those nights",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-2.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "EEEEEE",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-3.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Bear wins",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-4.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "No lead in Fuel",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-5.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Pasta Masta",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-6.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Smuteg",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-7.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Truth",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-8.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Penelope deserves him",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-9.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Curse of Dopamine",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-10.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "No light, still working",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-11.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Bilbo Baggins",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-12.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "He lives in an office",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-13.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Negative Rizz",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-14.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Shrek 4eva",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-15.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Am very smart",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-16.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Krzyżacka defraudacja",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-17.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Tesla Cloaked",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-18.webp",
    })
  );
  store.dispatch(
    addMeme({
      title: "Animekwas",
      upvotes: 0,
      downvotes: 0,
      image: "images/alk-meme-19.webp",
    })
  );
}
