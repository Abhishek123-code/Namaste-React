import React from "react";
import ReactDOM from "react-dom/client";
/*
 *
 * Header
 * -logo
 * -home
 * -about us
 * -contact us
 * -cart
 *
 *Body
 * -Res-card
 *  -food img
 *  -shop name
 *  -rating
 *  -time EST
 *  -cuisine
 *  -location
 *
 * Footer
 *  -&copy
 *  -address
 *  -contacts
 */

const Headerbar = () => (
  <header id="header">
    <nav id="headerNav">
      <img
        src="https://img.freepik.com/premium-vector/logo-chefs-food_326031-194.jpg"
        alt="logo"
        className="logo"
      />

      <ul id="nav-list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </nav>
  </header>
);

const resData = [
  {
      "info": {
          "id": "383830",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1a170357-6a8a-4f7e-a1ca-18f56d041eb5_383830.JPG",
          "locality": "Rajdanga Main Road",
          "areaName": "Acropolis Mall",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
          ],
          "avgRating": 4.6,
          "parentId": "547",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/kfc-rajdanga-main-road-acropolis-mall-rest383830",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "216675",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4c140390-e252-47b2-a5aa-6d199918bb10_216675.JPG",
          "locality": "Kasba",
          "areaName": "Kasba",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.5,
          "parentId": "166",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.7",
                  "ratingCount": "500+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/burger-king-kasba-rest216675",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "769456",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/1e758fd4-0981-4f7f-900a-8ce02714a4b9_769456.jpg",
          "locality": "Kalikapur",
          "areaName": "Kolkata",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 4.4,
          "parentId": "721",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-03 04:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/pizza-hut-kalikapur-kolkata-rest769456",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "150166",
          "name": "LunchBox - Meals and Thalis",
          "cloudinaryImageId": "jlkzppprdiyhxnely1qm",
          "locality": "First Lane",
          "areaName": "Ballygunge",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.5,
          "parentId": "4925",
          "avgRatingString": "4.5",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/lunchbox-meals-and-thalis-first-lane-ballygunge-rest150166",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "719437",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/8a91734c-c8a1-4089-b467-f9472618b742_719437.JPG",
          "locality": "KASBA",
          "areaName": "Rajdanga road",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "American",
              "Fast Food"
          ],
          "avgRating": 4.6,
          "parentId": "630",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-03 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/mcdonalds-kasba-rajdanga-road-rest719437",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "697216",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "Kasba",
          "areaName": "B.B. Chatterjee Street",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "2456",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 22:05:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/dominos-pizza-kasba-b-b-chatterjee-street-rest697216",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "13927",
          "name": "Wow! Momo",
          "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
          "locality": "Kasba",
          "areaName": "Kasba",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Tibetan",
              "Healthy Food",
              "Asian",
              "Chinese",
              "Snacks",
              "Continental",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.5,
          "parentId": "1776",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-09 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Chinese.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹219"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "100+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/wow-momo-kasba-rest13927",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "67722",
          "name": "Kookie Jar",
          "cloudinaryImageId": "0b69d733f3174c1d7ef9829e2a2fc33b",
          "locality": "Niharika Apartment, Ground Floor",
          "areaName": "Gariahat",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Desserts",
              "Snacks",
              "Bakery",
              "Ice Cream"
          ],
          "avgRating": 4.8,
          "parentId": "5550",
          "avgRatingString": "4.8",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 20:15:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/kookie-jar-niharika-apartment-ground-floor-gariahat-rest67722",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "69297",
          "name": "Machhli Baba Fries",
          "cloudinaryImageId": "dvaa3cfy1v7tkdmesb7s",
          "locality": "Block Eg",
          "areaName": "Rajdanga Main Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Bengali",
              "Street Food",
              "Rolls & Wraps",
              "Kebabs",
              "Fast Food"
          ],
          "avgRating": 4.5,
          "parentId": "4413",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-03 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/machhli-baba-fries-block-eg-rajdanga-main-road-rest69297",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "120155",
          "name": "Cakes",
          "cloudinaryImageId": "xo4xq9ufqmplnusb9nqs",
          "locality": "RAJDANGA MAIN ROAD",
          "areaName": "RAJDANGA MAIN ROAD",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Snacks"
          ],
          "avgRating": 4.8,
          "parentId": "4861",
          "avgRatingString": "4.8",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 21:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Desserts.png",
                      "description": "Delivery!"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                  "shortDescription": "Perfect cake delivery"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/cakes-rajdanga-main-road-rest120155",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "580620",
          "name": "GetAWay-Ice Creams & Desserts",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/9/58c3e491-c2bc-4993-9c8b-f795cf73226f_580620.jpg",
          "locality": "South Kolkata",
          "areaName": "Dhakuria",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts",
              "Healthy Food",
              "Sweets"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "354819",
          "avgRatingString": "4.7",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-03 00:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/getaway-ice-creams-and-desserts-south-dhakuria-rest580620",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "165270",
          "name": "Mama Mia! - Italian Ice Creams & Cakes",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/95d3849e-1d02-4523-81e3-f2ec4b51ad09_165270.jpg",
          "locality": "Ruby Area",
          "areaName": "VIP Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts",
              "Bakery",
              "Ice Cream Cakes"
          ],
          "avgRating": 4.7,
          "parentId": "471728",
          "avgRatingString": "4.7",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-03 02:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  },
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "Ratnesh_Badges/perfect-cake-3.svg",
                      "shortDescription": "Perfect cake delivery",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "Ratnesh_Badges/perfect-cake-3.svg",
                                  "shortDescription": "Perfect cake delivery"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "500+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/mama-mia-italian-ice-creams-and-cakes-ruby-area-vip-nagar-rest165270",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "576276",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "y1cgzcjr8gz71rrwajr0",
          "locality": "Rajdanga Main Road",
          "areaName": "Bosepukur",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.9,
          "veg": true,
          "parentId": "12175",
          "avgRatingString": "4.9",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/grameen-kulfi-rajdanga-main-road-bosepukur-rest576276",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "368809",
          "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
          "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
          "locality": "Gariahat Road",
          "areaName": "Central Kolkata",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Ice Cream Cakes",
              "Desserts",
              "Ice Cream",
              "Bakery"
          ],
          "avgRating": 4.9,
          "veg": true,
          "parentId": "21932",
          "avgRatingString": "4.9",
          "totalRatingsString": "50+",
          "sla": {
              "deliveryTime": 49,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-03 02:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/gourmet-ice-cream-cakes-by-baskin-robbins-gariahat-road-central-kolkata-rest368809",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "26533",
          "name": "6 Ballygunge Place Takeaway",
          "cloudinaryImageId": "agpdyb3uwlik0r47be6o",
          "locality": "Near Mahadevi Birla Shishu Vihar",
          "areaName": "Central Kolkata",
          "costForTwo": "₹800 for two",
          "cuisines": [
              "Bengali"
          ],
          "avgRating": 4.6,
          "parentId": "553778",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-03 03:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Bengali.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Gourmet.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Bengali.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Gourmet.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/6-ballygunge-place-takeaway-near-mahadevi-birla-shishu-vihar-central-kolkata-rest26533",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "24041",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/250d7054-1254-4158-b1a5-67141ea2d51f_24041.JPG",
          "locality": "Kasba",
          "areaName": "Kasba",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Healthy Food",
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "2",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 39,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.5",
                  "ratingCount": "50+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/subway-kasba-rest24041",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "379886",
          "name": "The Brooklyn Creamery - Healthy Ice Cream",
          "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
          "locality": "Bally Gunge",
          "areaName": "South Kolkata",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Healthy Food"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "236673",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/the-brooklyn-creamery-healthy-ice-cream-bally-gunge-south-kolkata-rest379886",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "377083",
          "name": "Keventers Ice Cream",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/eded9f86-f4ec-46cd-a7ea-49f078522101_377083.jpg",
          "locality": "Acropolis Mall",
          "areaName": "Acropolis Mall",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "272044",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 23:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/keventers-ice-cream-acropolis-mall-rest377083",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "30170",
          "name": "Hindusthan Sweets",
          "cloudinaryImageId": "uxnfklsaehf8tanbwqb5",
          "locality": "Besides 8B bus stop",
          "areaName": "Jadavpur",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Sweets",
              "Desserts",
              "Snacks",
              "Bakery"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "3371",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 4.8,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "4.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/hindusthan-sweets-besides-8b-bus-stop-jadavpur-rest30170",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "288392",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/72a3ec5b-3f98-4801-9003-649ce284df04_288392.JPG",
          "locality": "Acropolis Mall",
          "areaName": "East Kolkata Township",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
          ],
          "avgRating": 4.5,
          "parentId": "195515",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-02 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/kolkata/starbucks-coffee-acropolis-mall-east-kolkata-township-rest288392",
          "type": "WEBLINK"
      }
  }
];

const ResCard = (props) => {
  const { resDetails } = props;
  const {name,avgRating,cuisines,costForTwo,sla,cloudinaryImageId}=resDetails?.info

  return (
    <div id="resCard" class="item">
      <div id="resImg">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          id="res-img"
          alt="Res-Img"
        />
      </div>
      <div id="resInfo">
        <h4>{name}</h4>
        <span>{avgRating}</span>
        <span>{sla.slaString}</span>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

const Body = () => (
  <div id="resBody">
    <div id="search-box">
      <input type="search" id="search" placeholder="Search Food..." />
    </div>
    <div id="resCollection">
      {resData.map(shop=><ResCard key={shop.info.id} resDetails={shop}/>)}
    </div>
  </div>
);

const AppLayout = () => (
  <>
    <Headerbar />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
