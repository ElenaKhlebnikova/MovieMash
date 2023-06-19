const options = { month: 'long', day: 'numeric', year: 'numeric' };
const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', options);
};

export default formatDate;
