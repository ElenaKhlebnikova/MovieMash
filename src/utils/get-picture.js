import unknownPerson from '../assets/no_img_person.png';
import unknownMovie from '../assets/no_img_movie.png';

const getPicture = (path, type) => {
    if (path !== null) {
        return 'https://image.tmdb.org/t/p/original/' + path;
    }
    if (path === null && type === 'person') {
        return unknownPerson;
    }
    if (path === null && type === 'movie') {
        return unknownMovie;
    }
};

export default getPicture;
