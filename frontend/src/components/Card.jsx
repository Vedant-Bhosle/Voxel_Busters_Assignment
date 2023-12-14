import React, { useEffect, useState } from "react";
import CardCompnent from "./CardCompnent";
import Axios from "axios";
function Card() {
  const [selects, setselects] = useState("");
  const [startupdata, setstartupdata] = useState([]);
  const [originaldata, setoriginaldata] = useState([]);

  // console.log(startupdata);

  const getAllStatups = async () => {
    try {
      const res = await Axios.get("http://localhost:5002/getstartups");

      if (res.status === 200) {
        console.log("Startupdata succesfully fetched");

        setstartupdata(res.data.allStartups);
        setoriginaldata(startupdata);
      }
    } catch (e) {
      console.log("Error in finding startup data");
    }
  };

  useEffect(() => {
    getAllStatups();
  }, []);

  const handlesubmit = () => {
    const filteredStartups = originaldata.filter(
      (startup) =>
        startup.IndustryVertical !== undefined &&
        startup.IndustryVertical.toLowerCase().includes(selects.toLowerCase())
    );

    setstartupdata(filteredStartups);
  };

  return (
    <>
      {/* Dropdown */}
      <h1 className="mt-24 flex md:flex-row flex-col justify-center items-center ml-10 mr-10 ">
        <div className="relative w-full lg:max-w-sm flex  ">
          <select
            value={selects}
            onChange={(e) => setselects(e.target.value)}
            className="w-full p-2.5 text-gray-500 text-lg bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option value="" selected>
              Select Industry Type
            </option>
            <option>Technology</option>
            <option>Consumer Internet</option>
            <option>eCommerce</option>
            <option>Logistics</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Food & Beverage </option>
            <option>Real Estate </option>
            <option>FMCG</option>
            <option>Reality</option>
            <option>Online Travel Marketplace</option>
            <option>Online Education Platform</option>
            Others
          </select>
        </div>
        <button
          className="py-2 px-3 mt-5 md:mt-0 md:ml-5 bg-blue-600 text-white font-sans font-bold rounded-3xl"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </h1>
      {/* card section */}
      <div class="flex flex-wrap justify-center md:ml-10 md:mr-10  gap-5 mt-10 ">
        {startupdata.length !== 0 ? (
          startupdata.map((item) => {
            return <CardCompnent key={item._id} data={item} />;
          })
        ) : (
          <>
            <div className="flex flex-col justify-center items-center  h-96">
              <div className="animate-spin  h-8 w-8 border-2 rounded-lg"></div>
              <div className="mt-2">Loading...</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
