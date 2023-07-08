import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateRestaurant } from "./utils/validation";
import "./App.css";

function App() {
  const [restaurantData, setRestaurantData] = useState({
    restaurantName: "",
    contactName: "",
    pincode: "",
    location: "",
    website: "",
    phoneNumber: "",
    avgDailyTransactions: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // perform validation on restaurant data
    const validationErrors = validateRestaurant(restaurantData);
    if (validationErrors) {
      toast.error(validationErrors.error);
      return;
    }

    // send request to API endpoint
    try {
      const response = await fetch("http://localhost:8000/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurantData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Submitted successfully!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to Submit");
    }
  };

  const handleChange = (event) => {
    setRestaurantData({
      ...restaurantData,
      [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
    });
  };
  

  return (
    <div>
      <ToastContainer position="top-center" />
      <h1>Restaurant Onboarding</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-field">
            <label>
              Restaurant Name:
              <input
                type="text"
                name="restaurantName"
                value={restaurantData.restaurantName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Contact Name:
              <input
                type="text"
                name="contactName"
                value={restaurantData.contactName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Pincode:
              <input
                type="number"
                name="pincode"
                value={restaurantData.pincode}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={restaurantData.location}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="form-section">
          <div className="form-field">
            <label>
              Website:
              <input
                type="text"
                name="website"
                value={restaurantData.website}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={restaurantData.phoneNumber}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Average Daily Transactions:
              <input
                type="number"
                name="avgDailyTransactions"
                value={restaurantData.avgDailyTransactions}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-field">
          <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
