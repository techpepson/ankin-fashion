import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Men: React.FC = () => {
  // State management of items from the server
  const [items, setItems] = useState<any[]>([]); // Use a more specific type if possible
  const navigate = useNavigate();   

  //useParams funtion
  const {id} = useParams()
  // Function to make a GET request from the server
  const getMenItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/kids`, {
        // Updated endpoint
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  //function to route to the items page
  const directToItems = (id)=>{
    navigate(`/items/${id}`)
  }

  return (
    <div>
      {items.map(
        (item) =>
          item.itemCategory === "kids" && ( // Check each item's category
            <div key={item.id}>
              {" "}
              {/* Add a unique key for each item */}
              <img
                src={item.itemImages[0]} // Use the first image
                alt={`Image of ${item.itemName}`}
              />
              {/* Container for product name and descriptions with texts */}
              <div>
                <h3>{item.itemName}</h3>
                <p>{item.itemDescription}</p>
                <p>{item.itemBrand}</p>
                <p>Ghc{item.itemPrice}</p> {/* Added a dollar sign */}
              </div>
              {/* Button to purchase the cloth */}
              <div>
                <button onClick={directToItems({item._id})}>Buy</button>
                <button>Reserve</button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Men;
