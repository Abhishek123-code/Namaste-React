import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="transition-all duration-300 ease-in-out">
      {items.map((item) => (
        <div
        key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 text-left  flex h-52"
        >
          <div className="w-9/12">
            <div className="flex flex-col">
              <span className="text-lg font-medium py-1">
                {item?.card?.info?.name}
              </span>

              <span className="text-sm font-medium py-1">
                {" "}
                ₹{item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 flex flex-col items-center justify-center">
            <div className=" box-border h-36 border-none">
              <img
                src={CDN_URL + item?.card?.info?.imageId ? CDN_URL + item?.card?.info?.imageId : " "}
                alt=" "
                className="object-contain w-[100%] h-[100%] border-none"
              />
            </div>
            <button className="p-2 rounded-lg bg-black text-white relative bottom-4">
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
