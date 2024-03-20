import React from "react";
import styles from "./card.module.css";
import Image, { StaticImageData } from "next/image";
import Eras from "@/public/Eras.png";
import Modal from "../Modal/modal";
import { useState } from "react";

interface ICardProps {
  header: React.ReactNode;
  city: React.ReactNode;
  desc: React.ReactNode;
  price: React.ReactNode;
  img: StaticImageData;
}

const Card = ({ header, city, desc, price, img }: ICardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.wrapper} onClick={() => setShowModal(true)}>
      <Image src={img} alt="Фото" className={styles.img} />
      <div className={styles.text}>
        <div className={styles.text_header}>{header}</div>
        <div className={styles.text_city}>{city}</div>
        <div className={styles.text_desc}>{desc}</div>
      </div>
      <div className={styles.text_price}>{price} руб.</div>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          desc="Отель Eras - это уютное гостеприимное место, где каждый гость
        может насладиться комфортом и качественным обслуживанием.
        Расположенный в живописном месте, он предлагает идеальное
        сочетание роскоши, уюта и отличного сервиса."
          city="Алания, Турция"
          duration="6"
          date="30 марта"
          price="70 000"
        >
          Hello from the modal!
        </Modal>
      )}
    </div>
  );
};

export default Card;
