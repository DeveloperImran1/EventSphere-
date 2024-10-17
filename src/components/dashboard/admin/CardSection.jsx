import React from "react";
import {
  FaShoppingCart,
  FaAppleAlt,
  FaUserPlus,
} from "react-icons/fa";
import { PiExportLight } from "react-icons/pi";
import { MdEventNote } from "react-icons/md";
import { FaTicketSimple } from "react-icons/fa6";
import { TbCoinTaka  } from "react-icons/tb";
import Chart from "./Chart";

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: "Total Events",
      icon: <MdEventNote />,
      value: "$10,000",
      description: "+1.2 from yesterday",
    },
    {
      id: 2,
      title: "Tickets Sales",
      icon: <FaTicketSimple />,
      value: "150 Orders",
      description: "+1.2 from yesterday",
    },
    {
      id: 3,
      title: "Total Sales",
      icon: <TbCoinTaka />,
      value: "$ 50 Products",
      description: "+1.2 from yesterday",
    },
    {
      id: 4,
      title: "New Organizer",
      icon: <FaUserPlus />,
      value: "25 Customers",
      description: "+1.2 from yesterday",
    },
  ];

  return (
    <>
    <div className="w-full my-3 md:my-4 lg:my-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Monthly Sales</h2>
          <span className="text-sm text-gray-500">Sales Summary</span>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center space-x-2">
              {/* Icon */}
              <PiExportLight className="text-white text-xl" />
              {/* Button Text */}
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-r from-blue-100  to-gray-100 hover:from-blue-200 shadow-lg rounded-lg p-5 transform transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex space-x-4">
              {/* Icon */}
              <div className="text-4xl items-start text-blue-500">{card.icon}</div>
              {/* Text Content */}
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                  {card.title}
                </h3>
                <p className="text-xl font-bold text-gray-900">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default CardSection;
