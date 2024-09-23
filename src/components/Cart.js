import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-4xl">Cart items</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <h1 className="m-5 p-10 font-semibold text-xl">
            Your cart is empty! Please add items to your cart
          </h1>
        ) : (
          <button
            className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
