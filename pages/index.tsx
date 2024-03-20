import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TourSearch from "@/components/TourSearch/tourSearch";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import bg from "@/public/home_bg3.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={bg} alt="background" className={styles.bg} />
        <Header />
        <div className={styles.main}>
          <div className={styles.text}>
            <h1 className={styles.text_header}>С нами легко!</h1>
            <div className={styles.text_par}>
              Хотите окунуться в мир приключений и открытий? Тогда добро
              пожаловать в компанию Waldin! Мы - команда профессионалов, готовых
              сделать ваше путешествие незабываемым.
            </div>
          </div>
        </div>
        <TourSearch />
        <div className={styles.net}></div>
      </div>
      <Footer />
    </>
  );
}
