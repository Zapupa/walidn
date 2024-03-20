import React from "react";
import styles from "./tourSearch.module.css";
import Image from "next/image";
import searchImg from "@/public/Search.svg";

interface IHeaderProps {
  children: React.ReactNode;
}

const TourSearch = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <div className={styles.btn}>Страна</div>
        <div className={styles.btn}>Дата вылета</div>
        <div className={styles.btn}>Количество ночей</div>
        <div className={styles.btn}>Количество человек</div>
        <div className={styles.srchBlock}>
          <Image className={styles.srch} src={searchImg} alt="Поиск" />
        </div>
      </div>
    </div>
  );
};

export default TourSearch;
