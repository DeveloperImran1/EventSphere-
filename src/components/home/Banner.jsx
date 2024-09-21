"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker

// Country sections with grouped countries
const countrySections = [
  { section: "North America", countries: ["United States", "Canada"] },
  {
    section: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Italy"],
  },
  { section: "Asia", countries: ["India", "Japan"] },
  { section: "Oceania", countries: ["Australia"] },
  { section: "South America", countries: ["Brazil"] },
];

const Banner = () => {
  const [fromSearchTerm, setFromSearchTerm] = useState("");
  const [toSearchTerm, setToSearchTerm] = useState("");
  const [dropdownVisibleFrom, setDropdownVisibleFrom] = useState(false);
  const [dropdownVisibleTo, setDropdownVisibleTo] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Date and Time state
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // Filtered list of countries based on search term
  const filteredCountrySectionsFrom = countrySections
    .map((section) => ({
      ...section,
      countries: section.countries.filter((country) =>
        country.toLowerCase().includes(fromSearchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.countries.length > 0);

  const filteredCountrySectionsTo = countrySections
    .map((section) => ({
      ...section,
      countries: section.countries.filter((country) =>
        country.toLowerCase().includes(toSearchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.countries.length > 0);

  return (
    <div className="w-full md:rounded-bl-full bg-gradient-to-r from-blue-50 to-blue-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Section: Search Bars */}
        <div className="w-full md:h-auto md:w-1/3 bg-white p-6 rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Search Flights
          </h2>

          {/* First Search Bar (From) */}
          <div className="relative mb-6">
            <input
              type="text"
              id="from-country-search"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="From"
              value={fromSearchTerm}
              onChange={(e) => setFromSearchTerm(e.target.value)}
              onClick={() => setDropdownVisibleFrom(true)}
              onBlur={() =>
                setTimeout(() => setDropdownVisibleFrom(false), 100)
              }
            />

            {/* From Dropdown */}
            {dropdownVisibleFrom && filteredCountrySectionsFrom.length > 0 && (
              <div className="absolute z-10 right-0 mt-2 border border-gray-300 rounded-lg max-h-48 overflow-y-auto bg-white shadow-lg w-full">
                {filteredCountrySectionsFrom.map((section, index) => (
                  <div key={index} className="p-2">
                    <div className="font-semibold text-gray-600 mb-1">
                      {section.section}
                    </div>
                    <ul>
                      {section.countries.map((country, i) => (
                        <li
                          key={i}
                          className="p-2 cursor-pointer hover:bg-blue-100 transition-colors"
                          onMouseDown={() => {
                            setFromSearchTerm(country);
                            setDropdownVisibleFrom(false);
                          }}
                        >
                          {country}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Second Search Bar (To) */}
          <div className="relative mb-6">
            <input
              type="text"
              id="to-country-search"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="To"
              value={toSearchTerm}
              onChange={(e) => setToSearchTerm(e.target.value)}
              onClick={() => setDropdownVisibleTo(true)}
              onBlur={() => setTimeout(() => setDropdownVisibleTo(false), 100)}
            />

            {/* To Dropdown */}
            {dropdownVisibleTo && filteredCountrySectionsTo.length > 0 && (
              <div className="absolute z-10 right-0 mt-2 border border-gray-300 rounded-lg max-h-48 overflow-y-auto bg-white shadow-lg w-full">
                {filteredCountrySectionsTo.map((section, index) => (
                  <div key={index} className="p-2">
                    <div className="font-semibold text-gray-600 mb-1">
                      {section.section}
                    </div>
                    <ul>
                      {section.countries.map((country, i) => (
                        <li
                          key={i}
                          className="p-2 cursor-pointer hover:bg-blue-100 transition-colors"
                          onMouseDown={() => {
                            setToSearchTerm(country);
                            setDropdownVisibleTo(false);
                          }}
                        >
                          {country}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Date and Time Picker */}
          <div className="relative mb-6">
            <label
              htmlFor="date-picker"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Date and Time
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select a date and time"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Search Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold shadow-lg transition duration-200">
            Search
          </button>
        </div>

        {/* Right Section: Swiper Slider */}
        <div className="w-full  md:w-2/3">
          <div className="ml-4 md:ml-12 flex flex-col items-start md:items-center justify-center text-left md:text-center mx-auto max-w-3xl px-4 py-8">
            <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-snug">
              Europe's Nº 1 destination for
              <br className="block md:hidden" />
              <span className="whitespace-nowrap">train and bus tickets*</span>
            </h1>
            <p className="text-lg md:text-xl mt-4 mb-4 text-gray-700">
              Discover Europe with great savings and easy booking
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center items-center h-64  rounded-lg shadow-lg">
                <div>
                  <img
                    src="https://i.postimg.cc/9fTsz5rx/191119074441-haneda-airport-file.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center h-64  rounded-lg shadow-lg">
                <div>
                  <img
                    src="https://i.postimg.cc/mDPjh7XT/lisbon-portugal-september-23-2021-train-at-lisbon-lisboa-oriente-railway-station-modern-architecture.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center h-64   rounded-lg shadow-lg">
                <div>
                  <img className=""
                    src="https://i.postimg.cc/4NPckmPP/happy-couple-talking-while-holding-260nw-2294396297.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>

            <div
              className="absolute top-0 right-0 m-4 autoplay-progress"
              slot="container-end"
            >
              <svg className="w-8 h-8" viewBox="0 0 48 48" ref={progressCircle}>
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  className="text-gray-300"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  className="text-blue-600"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="126"
                  strokeDashoffset="calc(126 * var(--progress))"
                ></circle>
              </svg>
              <span
                ref={progressContent}
                className="text-xs text-gray-700"
              ></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;