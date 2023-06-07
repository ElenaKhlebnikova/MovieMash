import unknown from '../assets/no_img_person.png';
const getPicture = (path) => {
    path === null ? unknown : `https://image.tmdb.org/t/p/original/${path}`;
    return 'https://image.tmdb.org/t/p/original/' + path;
};

export default getPicture;
