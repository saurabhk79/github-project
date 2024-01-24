import React from "react";

const Search: React.FC = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter github username..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
