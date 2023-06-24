import { useState } from 'react';
import PropTypes from 'prop-types';

const SwitchMoviesSeriesPeople = ({ props }) => {
    const [tvAnimation, setTvAnimation] = useState('right');

    return (
        <div className="flex ml-10 mt-5 w-2/6 justify-between">
            <div className="relative px-5 ">
                <div
                    id="slide-left"
                    className={`rounded-l-full rounded-r-full bg-gradient-to-r   from-sky-500 to-teal-500 px-8 py-3 absolute w-full top-0 left-0 h-6 ${
                        !props.movie && 'hidden'
                    }`}
                ></div>
                <button
                    className="relative"
                    onClick={() => {
                        props.selectMovie();
                        setTvAnimation('right');
                    }}
                >
                    Movies
                </button>
            </div>
            <div className="relative px-5">
                <div
                    id={tvAnimation === 'right' ? 'slide-right' : 'slide-left'}
                    className={`rounded-l-full rounded-r-full bg-gradient-to-r  from-sky-500 to-teal-500  px-8 py-3 absolute w-full top-0 left-0 h-6 ${
                        !props.tv && 'hidden'
                    }`}
                ></div>
                <button
                    className="relative"
                    onClick={() => {
                        props.selectTv();
                    }}
                >
                    TV Shows
                </button>
            </div>
            <div className="relative px-5">
                <div
                    id="slide-right"
                    className={`rounded-l-full rounded-r-full bg-gradient-to-r  from-sky-500 to-teal-500 px-8 py-3 absolute w-full top-0 left-0 h-6 ${
                        !props.people && 'hidden'
                    }`}
                ></div>
                <button
                    className="relative"
                    onClick={() => {
                        setTvAnimation('left');
                        props.selectPeople();
                    }}
                >
                    People
                </button>
            </div>
        </div>
    );
};

SwitchMoviesSeriesPeople.propTypes = {
    props: PropTypes.shape,
    movie: PropTypes.bool,
    tv: PropTypes.bool,
    people: PropTypes.bool,
    selectMovie: PropTypes.func,
    selectTv: PropTypes.func,
    selectPeople: PropTypes.func,
};

export default SwitchMoviesSeriesPeople;
