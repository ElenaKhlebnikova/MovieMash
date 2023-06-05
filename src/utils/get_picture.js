import unknown from "../assets/no_img_person.png";
const getPicture = (path) => {
  if (path === null) {
    return unknown;
  } else return "https://image.tmdb.org/t/p/original/" + path;
};

export default getPicture;
