/* eslint-disable react/prop-types */

function SearchBarResults({ data }) {
  return (
    <div className="w-full bg-white rounded-b-md mt-0 px-3 text-slate-700">
      {data.map((item) => (
        <div className="hover:bg-slate-200 text-start" key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default SearchBarResults;
