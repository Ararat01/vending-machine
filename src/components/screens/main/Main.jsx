import { useState, useEffect } from "react";
import Basket from "../../ui/basket/Basket";
import Filter from "../../ui/filter/Filter";
import FoodType from "../../ui/food-type/FoodType";
import styles from "./Main.module.css";
import FoodTab from "../../ui/food-tab/FoodTab";
import axios from "axios";
import { DotPulse } from "@uiball/loaders";

function Main() {
  /////////////
  //vars
  //////////////////
  const [filter, setFilter] = useState(undefined);
  const [basketAnim, setBasketAnim] = useState("");
  const [onChange, setOnChange] = useState(0);
  const [foodArr, setFoodArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [basket, setBasket] = useState([]);
  ///////////////////////
  // functions
  /////////////////////
  useEffect(() => {
    axios.get(`http://37.157.221.131/api/v0.1.0/foods/baskets/`).then((res) => {
      setBasket(res.data.results);
    });
  }, []);
  const filterOnChange = (filt) => {
    if (filt == filter) return;
    setFilter(filt);
  };
  const basketAnimation = () => {
    setBasketAnim(styles.anim);

    setTimeout(() => {
      setBasketAnim("");
    }, 500);
  };
  const pickFood = (food) => {
    axios
      .post(
        `http://37.157.221.131/api/v0.1.0/foods/products/${food.id}/add/`,
        (food = { count: 1 })
      )
      .then((res) => {
        axios
          .get(`http://37.157.221.131/api/v0.1.0/foods/baskets/`)
          .then((res) => {
            setBasket(res.data.results);
          });
      });
    setOnChange(onChange + 1);
  };
  const removeFood = (id, count) => {
    if (count) {
      axios
        .put(`http://37.157.221.131/api/v0.1.0/foods/baskets/${id}/`, {
          count: count,
        })
        .then(() => {
          axios
            .get(`http://37.157.221.131/api/v0.1.0/foods/baskets/`)
            .then((res) => {
              setBasket(res.data.results);
            });
        });
    } else {
      axios
        .delete(`http://37.157.221.131/api/v0.1.0/foods/baskets/${id}/remove`)
        .then(() => {
          axios
            .get(`http://37.157.221.131/api/v0.1.0/foods/baskets/`)
            .then((res) => {
              setBasket(res.data.results);
            });
        });
    }
  };
  useEffect(() => {
    axios
      .get(
        `http://37.157.221.131/api/v0.1.0/foods/categories/${
          filter ? filter.id : ""
        }`
      )
      .then((res) => {
        setFoodArr([]);
        res.data.results ? setFoodArr(res.data.results) : setFoodArr([]);
      });
  }, [filter, basketAnim]);
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
        <Basket
          basket={basket}
          modalOpened={modal}
          className={basketAnim}
          addFood={pickFood}
          removeFood={removeFood}
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
                pickFood={() => {
                  basketAnimation();
                  pickFood(food);
                }}
                removeFood={() => {
                  basketAnimation();
                  removeFood(food.basket[0].id, food.basket[0].count - 1);
                }}
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
