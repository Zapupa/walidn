import React from "react";
import styles from "./button.module.css";

interface IButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
