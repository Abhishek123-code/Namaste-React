import ResCard from "./ResCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState(resData);

  return (
    <div id="resBody">
      <div className="filter">
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
        {listOfResturants.map((shop) => (
          <ResCard key={shop.info.id} resDetails={shop} />
        ))}
      </div>
    </div>
  );
};

export default Body;
