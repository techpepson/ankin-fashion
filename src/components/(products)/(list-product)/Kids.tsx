import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const KidItems: React.FC = () => {
  const location = useLocation();
  // State management of items from the server
  interface Item {
    id: string;
    itemCategory: string;
    itemImages: string[];
    itemName: string;
    itemDescription: string;
    itemBrand: string;
    itemPrice: number;
    _id: string | number;
  }

  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate();

  // Function to make a GET request from the server
  const getKidsItems = async () => {
    try {
      const response = await axios.get(
        `https://ankin-server.onrender.com/get-kids`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect to call the getKidsItems function
  useEffect(() => {
    getKidsItems();
  }, []);

  // Function to route to the items page
  const directToItems = (id: string | number) => {
    navigate(`/items/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {location.pathname === "/kids" ? "Browse Our Collection of Kids" : ""}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.length > 0 ? (
          items.map((item) =>
            item ? (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.itemImages[0]}
                  alt={`Image of ${item.itemName}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.itemName}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.itemDescription}
                  </p>
                  <p className="text-gray-800 font-semibold mt-2">
                    Ghc {item.itemPrice}
                  </p>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => directToItems(item._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                      Buy
                    </button>
                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )
        ) : (
          <div className="col-span-1 text-center">
            <p className="text-gray-600">
              Oops! There are no kids' clothing to display now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KidItems;
