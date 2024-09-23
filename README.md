#Namaste Food
/\*

-
- Header
- -logo
- -home
- -about us
- -contact us
- -cart
- \*Body
- -Res-card
- -food img
- -shop name
- -rating
- -time EST
- -cuisine
- -location
-
- Footer
- -&copy
- -address
- -contacts
  \*/

#setting up test library
Install React Testing Library

- Install Jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config File to disable default Babel transpilation
- Jest - `npx jest --init`
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom

const fetchData = async () => {
// // Define the URL for the POST request
// const postUrl = 'https://www.swiggy.com/dapi/restaurants/list/update'; // Replace with your API endpoint

// // Define the data payload for the POST request
// const postData = {
// lat: "22.51800",
// lng: "88.38320",
// nextOffset: "CJhlELQ4KIDwy5SxkL7fazCnEw==",
// filters: {},
// page_type: "DESKTOP_WEB_LISTING",
// seoParams: {
// seoUrl: "https://www.swiggy.com/",
// pageType: "FOOD_HOMEPAGE",
// apiName: "FoodHomePage"
// },
// apiName: "FoodHomePage",
// pageType: "FOOD_HOMEPAGE",
// seoUrl: "https://www.swiggy.com/",
// widgetOffset: {
// NewListingView_category_bar_chicletranking_TwoRows: "",
// NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
// Restaurant_Group_WebView_SEO_PB_Theme: "",
// collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "39",
// inlineFacetFilter: "",
// restaurantCountWidget: ""
// },
// \_csrf: "48bjz6DvvrKL-SBwAzZaIY5idV_eo-DnwufudK2A"
// };

// try {
// // Make the POST request
// const postResponse = await fetch(postUrl, {
// mode: 'no-cors',
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json'
// },
// body: JSON.stringify(postData)
// });

// const postResult = await postResponse.json();
// console.log('POST Success:', postResult);

// // Make the GET request
// const getResponse = await fetch(
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// );

// const getResult = await getResponse.json();
// console.log('GET Success:', getResult);

// // Update state with the fetched data
// setlistOfResturants(
// getResult?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
// );
// setfilteredRestaurant(
// getResult?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
// );
// } catch (error) {
// console.error('Error:', error);
// }
// };
