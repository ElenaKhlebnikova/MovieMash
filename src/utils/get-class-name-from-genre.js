const getClassNameFromGenre = (genre) => {
    let style = '';
    switch (genre) {
        case 'Action':
            style = ' from-blue-600 to-yellow-600';
            break;
        case 'Action & Adventure':
            style = ' from-violet-600 to-cyan-600';
            break;
        case 'Adventure':
            style = ' from-cyan-600 to-pink-300';
            break;
        case 'News':
            style = ' from-cyan-600 to-pink-300';
            break;
        case 'Comedy':
            style = ' from-emerald-200 to-fuchsia-600';
            break;
        case 'Reality':
            style = ' from-emerald-200 to-fuchsia-600';
            break;
        case 'Crime':
            style = ' from-sky-400 to-pink-300';
            break;
        case 'Kids':
            style = ' from-sky-400 to-pink-300';
            break;
        case 'Documentary':
            style = ' from-yellow-300 to-pink-600';
            break;
        case 'Sci-Fi & Fantasy':
            style = ' from-yellow-300 to-pink-600';
            break;
        case 'Drama':
            style = ' from-teal-300 to-yellow-400';
            break;
        case 'Soap':
            style = ' from-teal-600 to-blue-600';
            break;
        case 'Talk':
            style = ' from-yellow-600 to-red-600';
            break;
        case 'Family':
            style = ' from-yellow-600 to-red-600';
            break;
        case 'War & Politics':
            style = ' from-emerald-600 to-lime-600';
            break;
        case 'Fantasy':
            style = ' from-emerald-600 to-lime-600';
            break;
        case 'History':
            style = ' from-cyan-600 to-lime-600';
            break;
        case 'Horror':
            style = ' from-cyan-600 to-pink-600';
            break;
        case 'Music':
            style = ' from-cyan-600 to-yellow-600';
            break;
        case 'Mystery':
            style = ' from-pink-600 to-yellow-600';
            break;
        case 'Romance':
            style = ' from-violet-600 to-cyan-600';
            break;
        case 'Science Fiction':
            style = ' from-pink-600 to-cyan-600';
            break;
        case 'TV Movie':
            style = ' from-lime-400 to-yellow-600';
            break;
        case 'Thriller':
            style = ' from-lime-400 to-violet-600';
            break;
        case 'War':
            style = ' from-lime-400 to-pink-600';
            break;
        case 'Western':
            style = ' from-lime-400 to-cyan-600';
            break;
        case 'Animation':
            style = ' from-blue-600 to-purple-500';
            break;
        default:
            style =
                ' h-8 from-cyan-200 to-fuchsia-600 w-fit mx-1 my-1 rounded-md p-1 font-semibold';
    }
    return style;
};

export default getClassNameFromGenre;
