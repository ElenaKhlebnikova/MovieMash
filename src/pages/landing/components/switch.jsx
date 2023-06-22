import propTypes from 'prop-types';

const Switch = (props) => {
    return (
        <div
            className={`bg-slate-100 flex w-32  mt-20 ml-10 rounded-r-full rounded-l-full ${
                props.today ? 'justify-start' : 'justify-end'
            } hover:cursor-pointer`}
        >
            <button
                onClick={() => props.switch()}
                className={` rounded-l-full rounded-r-full ${
                    props.today === true
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-1'
                        : 'bg-gradient-to-r  from-purple-500 to-pink-500 px-5 py-1'
                }`}
            >
                {props.today ? 'Today' : 'This week'}
            </button>
        </div>
    );
};

Switch.propTypes = {
    today: propTypes.bool.isRequired,
    switch: propTypes.func.isRequired,
};
export default Switch;
