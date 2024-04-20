import React, { FormEvent, useState } from "react";
import styles from "./search.module.css";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username) navigate(`/${username}`);
  };
  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter github username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <div className={styles.centered}>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
