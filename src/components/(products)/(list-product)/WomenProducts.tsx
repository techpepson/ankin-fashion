import { ScrollArea } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WomenItems: React.FC = () => {
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
  const getWomenItems = async () => {
    try {
      const response = await axios.get(
        "https://ankin-server.onrender.com/get-women",
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

  // useEffect to call the getWomenItems function
  useEffect(() => {
    getWomenItems();
  }, []);

  // Function to route to the items page
  const directToItems = (id: string | number) => {
    navigate(`/list-products/${id}`);
  };

  return (
    <div className="flex">
      <ScrollArea
        scrollbars="vertical"
        style={{ height: "100vh" }}
        size="1"
        asChild
      >
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Women Clothing
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item._id}
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
              ))
            ) : (
              <div className="col-span-1 text-center">
                <p className="text-gray-600">
                  There is no women's clothing to display now.
                </p>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default WomenItems;
