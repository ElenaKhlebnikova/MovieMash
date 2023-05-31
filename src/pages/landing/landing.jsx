import SearchBar from "./search-bar";

function Landing() {
  return (
    <div>
      <div className="grid grid-rows my-20 mx-0 w-full">
        <div>
          <h1 className="text-5xl bold">
            MovieMash: Where Films Find Their Perfect Match!
          </h1>
        </div>
      </div>
      <div className="m-0">
        <SearchBar />
      </div>
    </div>
  );
}

export default Landing;
