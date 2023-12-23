import { useContext } from "react";
import Modal from "./Modal.jsx";
import CartContext from "../../store/CardContext.jsx";
import { currencyFormatter } from "../../util/formating.js";
import Button from "./Button.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handlerCloserCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handlerCloserCart}>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
