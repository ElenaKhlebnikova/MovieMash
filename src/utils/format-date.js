// create index.js file in utils/ and import all util functions there and export them from there
// and then whenever you need them just import them from the index file and not from their own file
// import {formatDate} from '../utils'

const options = { month: 'long', day: 'numeric', year: 'numeric' };
const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', options);
};

export default formatDate;
