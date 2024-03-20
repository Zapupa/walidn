import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Eras from "@/public/Eras.png";
import Button from "../Button/button";

const Modal = ({ onClose, desc, city, duration, date, price }: any) => {
  const modalWrapperRef = React.useRef<any>(null);

  const backDropHandler = useCallback((e: any) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      //?????
      onClose();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", backDropHandler);
    });
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_wrapper} ref={modalWrapperRef}>
        <div className={styles.modal}>
          <Image src={Eras} alt="Foto" className={styles.foto} />
          <div className={styles.text}>
            <div className={styles.text_top}>
              <div className={styles.top_elem}>
                <div className={styles.top_header}>Город</div>
                <div className={styles.top_par}>{city}</div>
              </div>
              <div className={styles.top_elem}>
                <div className={styles.top_header}>Дата</div>
                <div className={styles.top_par}>{date}</div>
              </div>
              <div className={styles.top_elem}>
                <div className={styles.top_header}>Длительность</div>
                <div className={styles.top_par}>{duration} ночей</div>
              </div>
            </div>
            <div className={styles.text_mid}>{desc}</div>
            <div className={styles.text_bottom}>
              <div className={styles.text_price}>{price} руб.</div>
              <Button>Продолжить</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
