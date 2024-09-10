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

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)
  {
    return <h1>Looks like you are Offline. Please Check your Connection</h1>
  }

  //conditional rendering
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="resBody">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            placeholder="Search resturants..."
          />

          <button
            className="searchBtn"
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
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setlistOfResturants();
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setlistOfResturants(filteredList);
          }}
        >
          Top Rated Restarunts
        </button>
      </div>

      <div id="resCollection">
        {filteredRestaurant.map((shop) => (
          <Link
            className="link"
            to={"/restaurants/" + shop.info.id}
            key={shop.info.id}
          >
            <ResCard resDetails={shop} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
