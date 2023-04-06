import FoodType from "../food-type/FoodType";
import styles from "./Filter.module.css";
import { useState } from "react";

function Filter({ filterOnChange }) {
  const [filterType, setFilterType] = useState("Popular");
  const [types, setTypes] = useState([
    { id: 1, title: "Salad", active: false },
    { id: 2, title: "Drink", active: false },
    { id: 3, title: "Pizza", active: false },
    { id: 4, title: "Pasta", active: false },
    { id: 5, title: "Dessert", active: false },
    { id: 6, title: "Salad", active: false },
    { id: 7, title: "Salad", active: false },
    { id: 8, title: "Salad", active: false },
    { id: 9, title: "Salad", active: false },
    { id: 10, title: "Salad", active: false },
  ]);
  const handleFilterChange = (id) => {
    setTypes(
      types.map((type) => {
        if (id === type.id) {
          setFilterType(type.title);
          filterOnChange(type.title);
        }
        return { ...type, active: id === type.id };
      })
    );
  };
  return (
    <div>
      <div className="container">
        <h2 className="title">Food type</h2>
      </div>
      <div className={styles.foodTypes}>
        {types.map((type) => {
          return (
            <FoodType
              key={type.id}
              type={type}
              handleFilterChange={handleFilterChange}
              style={
                type.active
                  ? { backgroundColor: "#DB6719", color: "#FFF" }
                  : null
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
