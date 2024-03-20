import React from "react";
import styles from "./searchBar.module.css";
import searchImg from "@/public/Search.svg";
import Image from "next/image";

interface ISearchBarProps {
  children: React.ReactNode;
}

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.input} placeholder="Поиск города" />
      <Image src={searchImg} alt="search" className={styles.img} />
    </div>
  );
};

export default SearchBar;
