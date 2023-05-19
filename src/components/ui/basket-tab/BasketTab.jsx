import styles from "./BasketTab.module.css";

function BasketTab({ food, addFood, removeFood, totalProduct }) {
  return (
    <div className={styles.main}>
      <img className={styles.img} src={food.image} alt="" />
      <h3>
        {food.name} {Math.floor(food.price)} $
      </h3>
      <div className={styles.actions}>
        <button
          onClick={() => {
            removeFood(totalProduct.id, totalProduct.count - 1);
          }}
        >
          -
        </button>
        <span>{totalProduct.count}</span>
        <button
          onClick={() => {
            addFood(food);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketTab;
