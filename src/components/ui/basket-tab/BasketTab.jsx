import styles from "./BasketTab.module.css";

function BasketTab({ food }) {
  return (
    <div className={styles.main}>
      <div className={styles.mainInfo}>
        <img
          className={styles.img}
          src="https://www.pngmart.com/files/1/Salad-PNG-Image.png"
          alt=""
        />
        <h3>{food.name}</h3>
      </div>

      <div className={styles.actions}>
        <button>-</button>
        <span>{food.count}</span>
        <button>+</button>
      </div>
    </div>
  );
}

export default BasketTab;