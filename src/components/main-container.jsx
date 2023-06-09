import PropTypes from 'prop-types';

function MainContaier({ children }) {
    return (
        <div className="flex flex-col m-5 lg:grid lg:grid-cols-2 lg:m-10">
            {children}
        </div>
    );
}

// JSX components are `node` prop-types
MainContaier.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainContaier;
