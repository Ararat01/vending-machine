import FoodType from "../food-type/FoodType";
import styles from "./Filter.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Filter({ filterOnChange }) {
  const [filterType, setFilterType] = useState("Popular");

  const [types, setTypes] = useState([]);
  const headers = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwOTg0NTk4LCJpYXQiOjE2ODA5ODI0MTUsImp0aSI6IjYwYjcyMzRiZDkxMjQwMTZhOTU1YjA0NjZlZDhlZjIyIiwidXNlcl9pZCI6Mn0.nDe5Lky8Cv863n5TCySvjpUpgpkGz-7whmKK3hQZV3I",
  };
  useEffect(() => {
    axios
      .get(`http://37.157.221.131/api/v0.1.0/foods/categories/`, { headers })
      .then((res) => {
        console.log(res);
        setTypes(res.data.results);
      });
  }, []);

  const handleFilterChange = (id) => {
    setTypes(
      types.map((type) => {
        if (id === type.id) {
          setFilterType(type.description);
          filterOnChange(type.description);
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
