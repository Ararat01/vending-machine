import styles from "./FoodTab.module.css";

function FoodTab({ food, pickFood, count = 0, removeFood }) {
  return (
    <div className={styles.tab}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={food.image} alt="" />
      </div>
      <div className={styles.info}>
        <h4>{food.name}</h4>
        <a>{food.description}</a>
        <div className={styles.price}>
          <p>{Math.floor(food.price)} $</p>
          <span className={styles.actions}>
            <button onClick={removeFood}>-</button>
            <span>{food.baskets ? food.baskets[0].count : 0}</span>
            <button onClick={pickFood}>+</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FoodTab;
