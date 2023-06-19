import PropTypes from 'prop-types';

const Rating = ({ rating, number }) => {
    if (!rating) return null;

    const ratingSrt = rating.toString();
    const int = ratingSrt.split('.')[0];
    const dec = ratingSrt.split('.')[1];

    return (
        <div className="mr-5 grid grid-cols-2 font-bold ">
            <p className="justify-self-end mx-2">⭐</p>
            <div
                className={`text-xl mr-2  flex  self-start

        ${rating === 0 && 'text-slate-200'}
                    ${rating >= 7 && 'text-green-500'}
                    ${7 > rating && rating >= 5 && 'text-yellow-400'}
                    ${rating < 5 && 'text-red-500'}
                    
                    `}
            >
                <p>{int}</p>
                <p className="text-xs self-end">{dec && '.' + dec}</p>
            </div>
            <p className="text-xs self-end col-span-2">({number} votes)</p>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number,
    number: PropTypes.number,
};

export default Rating;
