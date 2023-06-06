import unknown from "../assets/no_img_person.png";

const getPicture = (path) => {
  if (path === null) {
    return unknown;
  } else return "https://image.tmdb.org/t/p/original/" + path;
};

// You must rewrite it like this with a ternary operator because you have only one condition
// const getPicture2 = (path) =>
//   path === null ? unknown : `https://image.tmdb.org/t/p/original/${path}`;

export default getPicture;
