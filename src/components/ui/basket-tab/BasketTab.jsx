import styles from "./BasketTab.module.css";

function BasketTab({ food, actions }) {
  return (
    <div className={styles.main}>
      <div className={styles.mainInfo}>
        <img className={styles.img} src={food.image} alt="" />
        <h3>{food.name}</h3>
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => {
            actions(-1);
          }}
        >
          -
        </button>
        <span>{food.count}</span>
        <button
          onClick={() => {
            actions(1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketTab;
