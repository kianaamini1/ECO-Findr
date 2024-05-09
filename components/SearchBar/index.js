import { useState } from "react";
import styles from "./SearchBar.module.css";
import { UilSearchAlt } from "@iconscout/react-unicons";

export function SearchBar({ onSearch }) {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <UilSearchAlt className={styles.searchIcon} />
    </div>
  );
}