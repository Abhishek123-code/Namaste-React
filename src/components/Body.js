import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

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


//   const fetchData = async () => {
//     // Define the URL for the POST request
//     const postUrl = 'https://www.swiggy.com/dapi/restaurants/list/update'; // Replace with your API endpoint

//     // Define the data payload for the POST request
//     const postData = {
//         lat: "22.51800",
//         lng: "88.38320",
//         nextOffset: "CJhlELQ4KIDwy5SxkL7fazCnEw==",
//         filters: {},
//         page_type: "DESKTOP_WEB_LISTING",
//         seoParams: {
//             seoUrl: "https://www.swiggy.com/",
//             pageType: "FOOD_HOMEPAGE",
//             apiName: "FoodHomePage"
//         },
//         apiName: "FoodHomePage",
//         pageType: "FOOD_HOMEPAGE",
//         seoUrl: "https://www.swiggy.com/",
//         widgetOffset: {
//             NewListingView_category_bar_chicletranking_TwoRows: "",
//             NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
//             Restaurant_Group_WebView_SEO_PB_Theme: "",
//             collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "39",
//             inlineFacetFilter: "",
//             restaurantCountWidget: ""
//         },
//         _csrf: "48bjz6DvvrKL-SBwAzZaIY5idV_eo-DnwufudK2A"
//     };

//     try {
//         // Make the POST request
//         const postResponse = await fetch(postUrl, {
//             mode: 'no-cors',
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(postData)
//         });

//         const postResult = await postResponse.json();
//         console.log('POST Success:', postResult);

//         // Make the GET request
//         const getResponse = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//         );

//         const getResult = await getResponse.json();
//         console.log('GET Success:', getResult);

//         // Update state with the fetched data
//         setlistOfResturants(
//             getResult?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//         );
//         setfilteredRestaurant(
//             getResult?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//         );
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


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
         <Link className="link" to={"/restaurants/"+ shop.info.id} key={shop.info.id}><ResCard resDetails={shop} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
