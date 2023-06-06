import PropTypes from "prop-types";

function Rating({ rating, number }) {
  const ratingSrt = rating.toString();
  const int = ratingSrt.split(".")[0];
  const dec = ratingSrt.split(".")[1];
  return (
    <div className="mr-5 flex justify-center">
      <p className="self-end mx-2">⭐</p>
      <div
        className={`text-xl mr-2  flex  self-end

        ${rating === 0 && "text-slate-200"}
                    ${rating >= 7 && "text-green-500"}
                    ${7 > rating && rating >= 5 && "text-yellow-400"}
                    ${rating < 5 && "text-red-500"}
                    
                    `}
      >
        <p>{int}</p>
        <p className="text-xs self-end">{dec && "." + dec}</p>
      </div>
      <p className="text-xs self-end">({number} votes)</p>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};

export default Rating;
