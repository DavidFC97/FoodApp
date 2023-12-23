import React, { useContext } from "react";
import { currencyFormatter } from "../util/formating.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CardContext.jsx";

const MealItem = ({ meal }) => {
const cartCtx = useContext(CartContext);

  function handleAdMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          <Button onClick={handleAdMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
