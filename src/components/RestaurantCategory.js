import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const [symbol, setsymbol] = useState("⋁");
  // console.log(setshowIndex);

  const handleClicked = () => {
    setshowIndex();
    symbol === "⋁" ? setsymbol("⋀") : setsymbol("⋁");
  };

  return (
    <div className="w-7/12 bg-slate-50 p-2 m-auto my-2 shadow-md ">
      <div
        className="flex justify-between font-bold cursor-pointer "
        onClick={handleClicked}
      >
        <span className="text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{symbol}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
