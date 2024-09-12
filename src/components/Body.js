import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  console.log("rendered body");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setlistOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are Offline. Please Check your Connection</h1>;
  }

  //conditional rendering
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-2">
      <div className="m-2 p-4 flex">
        <input
          type="text"
          className="focus:ring-green-600 focus:ring-1 focus:outline-none border rounded-3xl px-2 h-12  w-96 active:border-green-300"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
          placeholder="Search resturants..."
        />

        <button
          className="bg-purple-300 p-2 mx-3 rounded-3xl w-24 hover:bg-green-400 duration-500"
          onClick={() => {
            console.log(searchText);
            const filteredRes = listOfResturants.filter((el) =>
              el.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(listOfResturants);
            setfilteredRestaurant(filteredRes);
          }}
        >
          search
        </button>

        <button
          className="bg-purple-300 p-2 mx-3 rounded-3xl w-52 hover:bg-red-300 duration-500"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            console.log(filteredList);
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restarunts
        </button>
      </div>

      <div className="flex flex-wrap justify-start gap-x-8 gap-y-3 w-[98%] mx-7">
        {filteredRestaurant.map((shop) => (
          <div className="flex-[0_0_18%] w-64" key={shop.info.id}>
            <Link className="" to={"/restaurants/" + shop.info.id}>
              <ResCard resDetails={shop} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
