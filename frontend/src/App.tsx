import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="topbar">
          <h2>Github Searcher</h2>

          <Link to={"/"}>Back to Search</Link>
        </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/:user" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
