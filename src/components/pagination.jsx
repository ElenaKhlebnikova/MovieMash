import PropTypes from 'prop-types';

const Pagination = ({ total_pages, page, setPage }) => {
    console.log();
    return (
        <div className="flex justify-end">
            <div className="flex justify-end mr-24  w-1/4">
                <span
                    onClick={() => setPage(page - 1)}
                    className="mx-1 cursor-pointer"
                >
                    {page !== 1 && '\u2190'}
                </span>
                {page > 3 && page !== 1 && page === total_pages && (
                    <span
                        onClick={() => setPage(1)}
                        className="mx-1 cursor-pointer"
                    >
                        {1}
                    </span>
                )}

                <span
                    onClick={() => setPage(page - 1)}
                    className="mx-1 cursor-pointer"
                >
                    {page > 1 && page - 1}
                </span>
                <span className="mx-1 cursor-pointer text-lg"> {page}</span>
                <span
                    onClick={() => setPage(page + 1)}
                    className="mx-1 cursor-pointer"
                >
                    {page + 1}
                </span>
                <span
                    onClick={() => setPage(page + 2)}
                    className="mx-1 cursor-pointer"
                >
                    {page + 2}
                </span>

                {total_pages > 4 && (
                    <span className="mx-1 cursor-pointer">...</span>
                )}
                <span
                    onClick={() => setPage(total_pages)}
                    className="mx-1 cursor-pointer"
                >
                    {total_pages}
                </span>
                <span
                    onClick={() => setPage(page + 1)}
                    className="mx-1 cursor-pointer"
                >
                    {page !== total_pages && '\u2192'}
                </span>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.func,
    total_pages: PropTypes.number,
};
export default Pagination;
