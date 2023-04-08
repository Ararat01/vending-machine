import styles from "./FoodType.module.css";

function FoodType({ handleFilterChange, type, style }) {
  return (
    <div
      onClick={() => handleFilterChange(type.id)}
      className={styles.div}
      style={style}
    >
      <div className={styles.imgDiv}>
        <img className={styles.img} src={type.image} alt="" />
      </div>
      <span className={styles.title}>{type.name}</span>
    </div>
  );
}

export default FoodType;
