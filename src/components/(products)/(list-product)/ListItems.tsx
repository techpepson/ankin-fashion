import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ListItems: React.FC = () => {
  const { id } = useParams(); // Fetch the ID from the URL
  const [item, setItem] = useState<any>(null); // State for a single item
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to get an item by ID from the server
  const getItem = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/items/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      setItem(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // useEffect to call the getItem function when the component mounts or the ID changes
  useEffect(() => {
    if (id) {
      getItem();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {item ? (
        <div key={item._id}>
          <img src={item.itemImages[0]} alt={`Image of ${item.itemName}`} />
          <div>
            <h3>{item.itemName}</h3>
            <p>{item.itemDescription}</p>
            <p>{item.itemBrand}</p>
            <p>Ghc {item.itemPrice}</p>
          </div>
        </div>
      ) : (
        <p>No item found</p>
      )}
    </div>
  );
};

export default ListItems;
