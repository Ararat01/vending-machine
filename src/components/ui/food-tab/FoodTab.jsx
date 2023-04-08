import styles from "./FoodTab.module.css";

function FoodTab({ pickFood }) {
  return (
    <div onClick={pickFood} className={styles.tab}>
      <div className={styles.imgDiv}>
        <img
          className={styles.img}
          src="https://www.pngmart.com/files/1/Salad-PNG-Image.png"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h4>Salmon salad 29$</h4>
        <a>Introduction about dishes</a>
        <span>
          <svg
            width="3vw"
            height="3vw"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5672 5.53329C12.4847 5.27815 12.2584 5.09694 11.9907 5.07281L8.354 4.74259L6.91595 1.37669C6.80992 1.13002 6.56843 0.970341 6.30013 0.970341C6.03182 0.970341 5.79033 1.13002 5.6843 1.37727L4.24625 4.74259L0.608965 5.07281C0.341716 5.09752 0.115996 5.27815 0.033033 5.53329C-0.0499296 5.78842 0.0266882 6.06827 0.228856 6.24467L2.97777 8.65549L2.16718 12.2262C2.10787 12.4887 2.20977 12.7601 2.42761 12.9175C2.5447 13.0021 2.68168 13.0452 2.81983 13.0452C2.93894 13.0452 3.05708 13.0131 3.16312 12.9496L6.30013 11.0748L9.43598 12.9496C9.66545 13.0877 9.95471 13.0751 10.1721 12.9175C10.39 12.7596 10.4918 12.4881 10.4325 12.2262L9.6219 8.65549L12.3708 6.24515C12.573 6.06827 12.6502 5.7889 12.5672 5.53329Z"
              fill="#DB6719"
            />
          </svg>{" "}
          5 (2000)
        </span>
      </div>
    </div>
  );
}

export default FoodTab;
