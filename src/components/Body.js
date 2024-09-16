import ResCard, { isResOpen } from "./ResCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const OpenRes = isResOpen(ResCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

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

  const { loggedUser, setuser } = useContext(UserContext);

  //conditional rendering
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-2 max-w-full box-border">
      <div className="m-2 p-4 flex box-border ">
        <input
          type="text"
          className="focus:ring-green-600 focus:ring-1 focus:outline-none border rounded-3xl px-2 h-12  w-96 active:border-green-300 box-border"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
          placeholder="Search resturants..."
        />

        <button
          className="bg-purple-300 p-2 mx-3 rounded-3xl w-24 hover:bg-green-400 duration-500 box-border"
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
          className="bg-purple-300 p-2 mx-3 rounded-3xl w-52 hover:bg-red-300 duration-500 box-border"
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
        
        <div className="flex items-center ">
          <label className="text-center text-black font-bold bg-gray-200 h-full flex items-center p-2 rounded-3xl">User Name </label>
          <input
            type="text"
            className="focus:ring-green-600 focus:ring-1 focus:outline-none border rounded-3xl px-2 h-12  w-96 active:border-green-300 box-border"
            value={loggedUser}
            onChange={(e) => {
              setuser(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-start gap-x-8 gap-y-3 w-[98%] mx-7 box-border">
        {filteredRestaurant.map((shop) => (
          <div className="flex-[0_0_18%] w-64" key={shop.info.id}>
            <Link className="" to={"/restaurants/" + shop.info.id}>
              {shop.info.isOpen ? (
                <OpenRes resDetails={shop} />
              ) : (
                <ResCard resDetails={shop} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
