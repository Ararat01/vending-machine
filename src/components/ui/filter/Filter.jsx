import FoodType from "../food-type/FoodType";
import styles from "./Filter.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Filter({ filterOnChange }) {
  const [filterType, setFilterType] = useState("Popular");

  const [types, setTypes] = useState([]);
  useEffect(() => {
    axios
      .get(`http://37.157.221.131/api/v0.1.0/foods/categories/`)
      .then((res) => {
        console.log(res);
        setTypes(
          res.data.results.map((type) => {
            return { ...type, active: type.id === 7 };
          })
        );
      });
  }, []);

  const handleFilterChange = (id) => {
    setTypes(
      types.map((type) => {
        if (id === type.id) {
          setFilterType(type.description);
          filterOnChange({ name: type.description, id: type.id });
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
              active={type.active}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
