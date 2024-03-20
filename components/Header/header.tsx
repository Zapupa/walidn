import React from "react";
import styles from "./header.module.css";
import Logo from "@/public/WaldinLogo.svg";
import Image from "next/image";
import SearchBar from "../SearchBar/searchBar";
import Link from "next/link";

interface IHeaderProps {
  children: React.ReactNode;
}

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Image src={Logo} alt="Logo" className={styles.img} />
      </Link>
      <div className={styles.navbar}>
        <Link href="/tours" className={styles.navbar_item}>
          Туры
        </Link>
        <Link href="#" className={styles.navbar_item}>
          Виза
        </Link>
        <Link href="#" className={styles.navbar_item}>
          Контакты
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
