import { Heading } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MenItems: React.FC = () => {
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
    _id: string;
  }

  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate();

  // Function to make a GET request from the server
  const getMenItems = async () => {
    try {
      const response = await axios.get(
        "https://ankin-server.onrender.com/get-men",
        {
          // Updated endpoint
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Initialize data with the response from the server
      const data = response.data;
      // Update state with items from the server
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect to call the getMenItems function
  useEffect(() => {
    getMenItems();
  }, []);

  // Function to route to the items page
  const directToItems = (id: string | number) => {
    navigate(`/list-products/${id}`);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div>
        {location.pathname === "/men-items" ? (
          <Heading className="justify-center items-center">
            "Browse Our Collection of Men Items"
          </Heading>
        ) : (
          ""
        )}
      </div>
      {items.map((item) =>
        item ? ( // Check each item's category
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Add a unique key for each item */}
            <img
              src={item.itemImages[0]} // Use the first image
              alt={`Image of ${item.itemName}`}
              className="w-full h-64 object-cover"
            />
            {/* Container for product name and descriptions with texts */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.itemName}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {item.itemDescription}
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                {item.itemBrand}
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                Ghc{item.itemPrice}
              </p>
              {/* Button to purchase the cloth */}
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
        ) : (
          <div>
            <p>There are no men listings today</p>
          </div>
        )
      )}
    </div>
  );
};

export default MenItems;
