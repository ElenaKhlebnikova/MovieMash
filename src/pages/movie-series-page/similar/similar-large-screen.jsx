import { useParams } from 'react-router-dom';
import MovieItem from '../../../components/movie-item';

import useFetchSimilarMovieOrTv from '../../../hooks/use-fetch-similar-movie-or-tv';
import propTypes from 'prop-types';
function SimilarLarge({ media_type }) {
    const { id } = useParams();
    const data = useFetchSimilarMovieOrTv(id, media_type);

    return (
        <div id="scroll-movie-parent">
            <div className="lg:flex" id="movie-scroll">
                {data &&
                    data.results.map((item) => {
                        return (
                            <MovieItem
                                key={item.id}
                                item={item}
                                media_type={media_type}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

SimilarLarge.propTypes = {
    media_type: propTypes.string.isRequired,
};
export default SimilarLarge;
