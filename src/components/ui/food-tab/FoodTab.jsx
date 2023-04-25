import styles from "./FoodTab.module.css";

function FoodTab({ food, pickFood, count = 0 }) {
  return (
    <div className={styles.tab}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={food.image} alt="" />
      </div>
      <div className={styles.info}>
        <h4>
          {food.name} {Math.floor(food.price)} $
        </h4>
        <a>{food.description}</a>
        <span className={styles.actions}>
          <button onClick={pickFood}>+</button>
          <span>7</span>
          <button>-</button>
        </span>
      </div>
    </div>
  );
}

export default FoodTab;
