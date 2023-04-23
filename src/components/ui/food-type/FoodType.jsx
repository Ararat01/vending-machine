import styles from "./FoodType.module.css";

function FoodType({ handleFilterChange, type, active }) {
  return (
    <div
      onClick={() => handleFilterChange(type.id)}
      className={`${styles.div} ${active ? styles.active : ""}`}
    >
      <div className={styles.imgDiv}>
        <img className={styles.img} src={type.image} alt="" />
      </div>
      <span className={styles.title}>{type.name}</span>
    </div>
  );
}

export default FoodType;
