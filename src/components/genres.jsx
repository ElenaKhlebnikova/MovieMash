import PropTypes from "prop-types";
function Genres({ genre }) {
  return (
    <div
      className={`bg-gradient-to-r h-8 from-cyan-200 to-fuchsia-600 w-fit mx-1 my-1 rounded-md p-1 font-semibold
        ${genre.id === 28 && "bg-gradient-to-r from-cyan-600 to-pink-300"}
        ${genre.id === 12 && "bg-gradient-to-r from-emerald-200 to-fuchsia-600"}
       ${genre.id === 16 && "bg-gradient-to-r from-sky-400 to-pink-300"}
        ${genre.id === 35 && "bg-gradient-to-r from-yellow-300 to-pink-600"}
        ${genre.id === 80 && "bg-gradient-to-r from-teal-600 to-blue-600"}
       ${genre.id === 99 && "bg-gradient-to-r from-yellow-600 to-red-600"}
        ${genre.id === 18 && "bg-gradient-to-r from-emerald-600 to-lime-600"}
        ${genre.id === 10751 && "bg-gradient-to-r from-cyan-600 to-lime-600"}
       ${genre.id === 14 && "bg-gradient-to-r from-cyan-600 to-pink-600"}
       ${genre.id === 36 && "bg-gradient-to-r from-cyan-600 to-yellow-600"}
        ${genre.id === 27 && "bg-gradient-to-r from-pink-600 to-yellow-600"}
        ${genre.id === 10402 && "bg-gradient-to-r from-violet-600 to-cyan-600"}
        ${genre.id === 9648 && "bg-gradient-to-r from-pink-600 to-cyan-600"}
        ${genre.id === 10749 && "bg-gradient-to-r from-lime-400 to-yellow-600"}
        ${genre.id === 878 && "bg-gradient-to-r from-lime-400 to-violet-600"}
        ${genre.id === 10770 && "bg-gradient-to-r from-lime-400 to-pink-600"}
        ${genre.id === 53 && "bg-gradient-to-r from-lime-400 to-cyan-600"}
        ${genre.id === 10752 && "bg-gradient-to-r from-blue-600 to-purple-500"}
        ${genre.id === 37 && "bg-gradient-to-r from-blue-600 to-yellow-600"} 
        `}
    >
      {genre.name}
    </div>
  );
}

Genres.propTypes = {
  genre: PropTypes.object,
  name: PropTypes.string,
};

export default Genres;
