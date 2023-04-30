import styles from "./BasketTab.module.css";

function BasketTab({ food, actions }) {
  return (
    <div className={styles.main}>
      <img className={styles.img} src={food.image} alt="" />
      <h3>
        {food.name} {Math.floor(food.price)} $
      </h3>
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
