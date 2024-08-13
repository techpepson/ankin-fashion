import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Item {
  _id: string;
  itemImages: string[];
  itemName: string;
  itemDescription: string;
  itemBrand: string;
  itemPrice: number;
}

const ListItems: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  const getItem = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/items/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setItem(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement payment processing logic here
    setPaymentSuccess(true);
  };

  useEffect(() => {
    if (id) {
      getItem();
    }
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 max-w-md mx-auto">
      {item ? (
        <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={item.itemImages[0]}
            alt={`Image of ${item.itemName}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{item.itemName}</h3>
            <p className="text-gray-600 mt-2">{item.itemDescription}</p>
            <p className="text-gray-500 mt-2">{item.itemBrand}</p>
            <p className="text-lg font-bold text-gray-900 mt-4">Ghc {item.itemPrice}</p>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Details</h4>
            {paymentSuccess ? (
              <p className="text-green-600 font-semibold">Payment Successful!</p>
            ) : (
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                  <input
                    type="text"
                    name="name"
                    value={paymentDetails.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={paymentDetails.expiryDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-2 rounded-md mt-4 hover:bg-indigo-700"
                >
                  Pay Now
                </button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No item found</p>
      )}
    </div>
  );
};

export default ListItems;
