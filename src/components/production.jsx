import propTypes from 'prop-types';

const Production = ({ data }) => {
    return (
        <div className=" mt-20 flex flex-col justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 rounded-md lg:row-start-3 lg:col-start-1 lg:col-span-2 ">
            <h3 className="text-2xl mb-5 font-semibold">Production</h3>
            {data.production_companies.map((prod) => {
                return prod.logo_path ? (
                    <img
                        key={prod.id}
                        className="h-14 my-3 opacity-100"
                        src={
                            'https://image.tmdb.org/t/p/original/' +
                            prod.logo_path
                        }
                    />
                ) : (
                    <p key={prod.id} className="my-3">
                        {prod.name}
                    </p>
                );
            })}
        </div>
    );
};

Production.propTypes = {
    data: propTypes.object.isRequired,
};

export default Production;
