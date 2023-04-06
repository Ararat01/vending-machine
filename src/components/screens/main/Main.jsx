import { useState } from "react";
import Basket from "../../ui/Basket/Basket";
import Filter from "../../ui/filter/Filter";
import FoodType from "../../ui/food-type/FoodType";
import SearchInput from "../../ui/search-input/SearchInput";
import styles from "./Main.module.css";
import FoodTab from "../../ui/food-tab/FoodTab";

function Main() {
  const [filter, setFilter] = useState("Popular");
  const [modal, setModal] = useState(false);
  const [basket, setBasket] = useState({
    food: [
      {
        name: "Salmon salad",
        type: "salad",
        count: 2,
        price: 29,
        id: 1,
      },
      {
        name: "Shawerma",
        type: "meat",
        count: 4,
        price: 8,
        id: 2,
      },
      {
        name: "Cola",
        type: "drink",
        count: 4,
        price: 5,
        id: 3,
      },
    ],
    total: 110,
  });
  const filterOnChange = (filt) => {
    if (filt == filter) return;
    setFilter(filt);
  };
  return (
    <div
      className={styles.body}
      style={{ position: modal ? "fixed" : "static" }}
    >
      <div className={styles.header}>
        <img src={"./logo.png"} alt="Not found" className={styles.logo} />
        {/* <SearchInput /> */}
        <Basket
          basket={basket}
          modalOpened={modal}
          closeHandler={() => {
            setModal(false);
          }}
          openHandler={() => {
            setModal(true);
          }}
        />
      </div>
      <Filter filterOnChange={filterOnChange} />
      <div className="container">
        <h2 className="title">{filter}</h2>
        <FoodTab />
        <FoodTab />
        <FoodTab />
        <FoodTab />
        <FoodTab />
        <FoodTab />
        <FoodTab />
        <FoodTab />
        <FoodTab />
        <FoodTab />
      </div>
    </div>
  );
}

export default Main;
