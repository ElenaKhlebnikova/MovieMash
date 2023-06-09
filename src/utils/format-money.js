const formatMoney = (amount) => {
    if (amount > 10000000) {
        return Math.round(amount / 10000000) + 'B';
    }
    if (amount > 1000000) {
        return Math.round(amount / 1000000) + 'M';
    }
    if (amount > 1000) {
        return Math.round(amount / 1000) + 'K';
    }
    if (amount === 0) {
        return 'unknown';
    }
};

export default formatMoney;
