import PicAndInfo from './pic-and-info';
import Popularity from './popularity';
import Overview from './overview';
import Genres from './genres/genres';
import propTypes from 'prop-types';

function MainInfoContainer({ data, media_type }) {
    return (
        <div>
            <PicAndInfo data={data} media_type={media_type} />
            <Overview data={data} />
            <Popularity data={data} />
            <Genres data={data} />
        </div>
    );
}

MainInfoContainer.propTypes = {
    data: propTypes.object.isRequired,
    media_type: propTypes.string.isRequired,
};
export default MainInfoContainer;
