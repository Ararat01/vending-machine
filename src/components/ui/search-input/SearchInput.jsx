import { useRef } from "react";
import Imic from "../../icons/Imic";
import Isearch from "../../icons/Isearch";
import styles from "./SearchInput.module.css";

function SearchInput() {
  const searchInput = useRef(null);
  const focusInput = () => {
    searchInput.current.focus();
  };
  return (
    <div className={styles.div} onClick={focusInput}>
      <Isearch className={styles.searchIcon} />
      <input
        ref={searchInput}
        type="text"
        placeholder="What are you looking for?"
      />
      <Imic className={styles.micIcon} />
    </div>
  );
}

export default SearchInput;
