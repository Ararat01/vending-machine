import Ibasket from "../../icons/Ibasket";
import styles from "./Basket.module.css";
import BasketTab from "../basket-tab/BasketTab";

function Basket({ basket, modalOpened, openHandler, closeHandler, className }) {
  return (
    <div className={`${styles.basket} ${className}`}>
      <button className={styles.openBtn} onClick={openHandler}></button>
      <Ibasket className={styles.icon} />
      <span className={styles.count}>{basket.food.length}</span>
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
        <div>
          {basket.food.map((food) => {
            return <BasketTab food={food} key={food.id} />;
          })}
          <h5>{basket.total} $</h5>
        </div>
      </div>
    </div>
  );
}

export default Basket;
