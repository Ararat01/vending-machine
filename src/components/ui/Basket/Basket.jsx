import Ibasket from "../../icons/Ibasket";
import styles from "./Basket.module.css";
import BasketTab from "../basket-tab/BasketTab";
import { useEffect, useState } from "react";
import axios from "axios";

function Basket({
  modalOpened,
  openHandler,
  closeHandler,
  className,
  basket = [],
  addFood,
  removeFood,
}) {
  return (
    <div className={`${styles.basket} ${className}`}>
      <button className={styles.openBtn} onClick={openHandler}></button>
      <Ibasket className={styles.icon} />
      <span className={styles.count}>{basket.length}</span>
      <div
        className={`${styles.modal} ${
          modalOpened ? styles.modalOpen : styles.modalClose
        }`}
      >
        <div className={`${styles.title}`}>
          <h2 className="title">Basket</h2>
          <button onClick={closeHandler} className={styles.closeBtn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3598 14.36L1.63983 1.63995"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
              <path
                d="M14.3598 1.63995L1.63983 14.36"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
            </svg>
          </button>
        </div>
        <div className={styles.basketFoods}>
          {basket.map((food) => {
            return (
              <BasketTab
                totalProduct={food}
                addFood={addFood}
                removeFood={removeFood}
                food={food.product}
                key={food.product.id}
              />
            );
          })}
        </div>
        <div className={styles.total}>
          <h4 className={styles.totalTitle}>
            Total:{" "}
            {basket.reduce((t, f) => {
              return t + f.price;
            }, 0)}{" "}
            $
          </h4>
          <button>PAY</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
