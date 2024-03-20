import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Inter, Roboto, Montserrat } from "next/font/google";
import styles from "@/styles/Tours.module.css";
import TourSearch from "@/components/TourSearch/tourSearch";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Card from "@/components/Card/card";
import Modal from "@/components/Modal/modal";

import Tihan from "@/public/Taihan.png";
import Vizyon from "@/public/Vizyon.png";
import Fors from "@/public/Fors.png";
import Eras from "@/public/Eras.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.document}>
      <div className={styles.wrapper}>
        <Header />
        <TourSearch />
        <div className={styles.main}>
          <Card
            header="Eras Hotel"
            city="Алания, Турция"
            desc="Отель Eras - это уютное гостеприимное место, где каждый гость может насладиться комфортом и качественным обслуживанием. Расположенный в живописном месте, он предлагает идеальное сочетание роскоши, уюта и отличного сервиса. "
            price="70 000"
            img={Eras}
          />
          <Card
            header="Fors Hotel Sultanahmet"
            city="Стамбул, Турция"
            desc="Fors HOTEL сочетает в себе историческую атмосферу Стамбула с современными удобствами. Отель расположен в центре, в нескольких минутах ходьбы от Голубой мечети и Гранд базара. Компактные и функциональные номера оснащены удобствами для обеспечения комфорта. "
            price="77 537"
            img={Fors}
          />
          <Card
            header="Tayhan Hotel"
            city="Стамбул, Турция"
            desc="Отель в районе Кумкапы, одном из старейших кварталов Стамбула. С террасы на крыше открывается вид на Мраморное море. В ресторане сервируют различные блюда турецкой и международной кухни. Блюда подают в помещении и на веранде под открытым небом."
            price="81 000"
            img={Tihan}
          />
          <Card
            header="Vizyon City Hotel"
            city="Стамбул, Турция"
            desc="Отель расположен в районе Султанахмет, недалеко от всех исторических и культурных туристических мест. В 100 метрах от отеля — трамвайная остановка. В распоряжении гостей номера с бесплатным Wi-Fi. По утрам на террасе отеля накрывается завтрак «шведский стол»."
            price="81 000"
            img={Vizyon}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
