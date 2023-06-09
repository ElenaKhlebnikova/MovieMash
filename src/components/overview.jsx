import propTypes from 'prop-types';
function Overview({ data }) {
    return <div className="my-5 col-span-2">{data.overview}</div>;
}

Overview.propTypes = {
    data: propTypes.object.isRequired,
};
export default Overview;
