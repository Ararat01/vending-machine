import { useState, useEffect } from "react";
import Basket from "../../ui/basket/Basket";
import Filter from "../../ui/filter/Filter";
import FoodType from "../../ui/food-type/FoodType";
import SearchInput from "../../ui/search-input/SearchInput";
import styles from "./Main.module.css";
import FoodTab from "../../ui/food-tab/FoodTab";
import axios from "axios";
import { DotPulse } from "@uiball/loaders";

function Main() {
  const [filter, setFilter] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `http://37.157.221.131/api/v0.1.0/foods/categories/${
          filter ? filter.id : "123"
        }`
      )
      .then((res) => {
        setFoodArr([]);
        console.log(1, res);
        res.data.results ? setFoodArr(res.data.results) : setFoodArr([]);
      });
  }, [filter]);
  /////////////
  //vars
  //////////////////
  const [basketAnim, setBasketAnim] = useState("");
  const [foodArr, setFoodArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [basket, setBasket] = useState({
    food: [],
    total: 0,
  });
  ///////////////////////
  // functions
  /////////////////////
  const filterOnChange = (filt) => {
    if (filt == filter) return;
    setFilter(filt);
  };
  const pickFood = (food) => {
    setBasketAnim(styles.anim);
    putBasket(food);
    setTimeout(() => {
      setBasketAnim("");
    }, 500);
  };
  const putBasket = (food) => {
    basket.food.find((obj) => obj.id === food.id)
      ? setBasket({
          food: [
            ...basket.food.map((fd) => {
              return food.id == fd.id ? { ...fd, count: fd.count + 1 } : fd;
            }),
          ],
          total: basket.food.reduce(
            (t, f) => t + parseFloat(f.price) * f.count,
            parseFloat(food.price)
          ),
        })
      : setBasket({
          food: [...basket.food, { ...food, count: 1 }],
          total: basket.food.reduce(
            (t, f) => t + parseFloat(f.price) * f.count,
            parseFloat(food.price)
          ),
        });
  };
  console.log(basket);

  //////////////////
  // html
  ////////////////
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
          className={basketAnim}
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
        <h2 className="title">{filter ? filter.name : `Loading...`}</h2>
        {!foodArr.length ? (
          <div className={styles.dot}>
            <DotPulse size={60} speed={1} color="#e88a4f" />
          </div>
        ) : (
          foodArr.map((food) => {
            return (
              <FoodTab
                key={food.id}
                pickFood={() => pickFood(food)}
                food={food}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Main;
