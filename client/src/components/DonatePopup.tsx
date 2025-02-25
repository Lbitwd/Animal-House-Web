import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import axios from "axios";

const DonatePopup = ({ onClose }) => {
  const [donationType, setDonationType] = useState("once");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [savedComment, setSavedComment] = useState("");

  // Fetch exchange rates and available currencies from API
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setRates(response.data.rates);
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
      }
    };

    fetchRates();
  }, []);

  // Convert donation amount based on currency and update input field
  useEffect(() => {
    if (amount && rates[currency]) {
      const converted = (parseFloat(amount) * rates[currency]).toFixed(2);
      setConvertedAmount(converted);
      setAmount(converted); // Update input field with converted value
    }
  }, [currency, rates]);

  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  // 💰 Recommended Donation Amounts
  const donationOptions = {
    once: ["25", "50", "100", "250", "500", "1000"],
    monthly: ["10", "20", "50", "100", "150", "200"],
    yearly: ["100", "250", "500", "1000", "1500", "2000"],
  };

  // 🟢 Handle donation
  const handleDonate = () => {
    alert(
      `Thank you for donating ${convertedAmount || "0"} ${currency} ${
        donationType === "once" ? "" : `(${donationType})`
      }! 🐶🐱`
    );
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      {!showComment ? (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl shadow-xl p-8 max-w-5xl w-full flex flex-col md:flex-row"
        >
          {/* ✖ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-transform transform hover:scale-110"
          >
            ✖
          </button>

          {/* 🌟 Left Section - Info & Comments */}
          <div className="w-full md:w-1/2 pr-6">
            <div className="text-left mb-6">
              <h2 className="text-3xl font-bold text-primary mb-3">
                🐾 Help Support an Animals Care!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Can not adopt, but still want to help? Your donation directly
                impacts the lives of cats and dogs at Animal Haven, ensuring
                they receive love and care.
              </p>
            </div>

            {/* 📝 Saved Comment Display */}
            {savedComment && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">
                  💬 Your Comment:
                </h3>
                <p className="text-gray-700">{savedComment}</p>
              </div>
            )}

            {/* ✍️ Add Comment Link */}
            <div className="mt-4">
              <button
                onClick={() => setShowComment(true)}
                className="text-primary hover:text-primary/70"
              >
                📝 Add a comment
              </button>
            </div>
          </div>

          {/* 💰 Right Section - Donation Form */}
          <div className="w-full md:w-1/2 border-l pl-6">
            {/* 🔄 Donation Type Switch */}
            <div className="flex justify-center gap-3 mb-6">
              {["once", "monthly", "yearly"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setDonationType(type);
                    setAmount("");
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    donationType === type
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-primary/20"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* 💲 Recommended Donation Amounts */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {donationOptions[donationType].map((value) => (
                <button
                  key={value}
                  onClick={() =>
                    setAmount((value * (rates[currency] || 1)).toFixed(2))
                  }
                  className={`px-3 py-2 rounded-lg border ${
                    amount === (value * (rates[currency] || 1)).toFixed(2)
                      ? "border-primary bg-primary/20 shadow-md"
                      : "border-gray-300 hover:border-primary"
                  } transition-all duration-300`}
                >
                  {`${(value * (rates[currency] || 1)).toFixed(2)} ${currency}`}
                </button>
              ))}
            </div>

            {/* 💰 Custom Donation Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Custom Amount ({currency}):
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="w-full border border-gray-300 rounded-lg p-2 bg-white shadow-inner focus:ring-2 focus:ring-primary"
              />
              {convertedAmount && (
                <p className="mt-2 text-sm text-gray-500">
                  Converted: {convertedAmount} {currency}
                </p>
              )}
            </div>

            {/* 🌍 Currency Selector */}
            <div className="flex items-center gap-2 mb-6">
              <label className="text-sm font-medium text-gray-700">
                Currency:
              </label>
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="border border-gray-300 rounded-lg p-2 bg-white"
                title="Select currency"
              >
                {currencies.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>

            {/* 🟢 Donate Button (Dynamic Text) */}
            <button
              onClick={handleDonate}
              className="w-full bg-primary text-white py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Donate{" "}
              {donationType !== "once"
                ? donationType.charAt(0).toUpperCase() + donationType.slice(1)
                : "Now"}{" "}
              💖
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full"
        >
          {/* 🔙 Back Button */}
          <button
            type="button"
            title="Go back to donation form"
            onClick={() => setShowComment(false)}
            className="absolute top-4 left-4 text-primary hover:scale-110 transition-transform"
          >
            <IoArrowBackCircleOutline size={30} />
          </button>

          {/* 💬 Comment Section */}
          <h2 className="mt-8 text-2xl font-bold text-primary mb-4">
            💬 Leave a Comment
          </h2>
          <textarea
            placeholder="Write your message here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-primary"
          ></textarea>

          {/* 🔘 Save Button */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => {
                setSavedComment(comment);
                setShowComment(false);
              }}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
            >
              Save
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

DonatePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DonatePopup;
