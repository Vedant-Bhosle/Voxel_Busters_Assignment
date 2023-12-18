import React, { useState } from "react";
import Modal from "./Modal";

function CardCompnent({ data }) {
  const [showmodal, setshowmodal] = useState(false);

  const handleOnClose = () => {
    setshowmodal(false);
  };

  return (
    <div class="p-5   max-w-md">
      <span
        onClick={() => setshowmodal(true)}
        class="flex rounded-lg w-80 md:w-96 shadow-lg hover:shadow-2xl border border-blue-100 h-full  bg-white p-8  flex-col"
      >
        <div class="flex items-center  mb-3">
          <h2 class="text-blue-950  text-3xl  font-medium">
            {data.StartupName}
          </h2>
        </div>

        <div className="mb-2">
          <h2 className="text-black    text-xl font-medium">
            <span className="font-semibold">Location</span>
            <ion-icon
              color="danger"
              className="-z-50"
              name="location-outline"
            ></ion-icon>
            - {data.CityLocation}
          </h2>
        </div>
        <div className="mb-2">
          <h2 className="text-black font-sans text-xl font-medium">
            <span className="font-semibold">Funding Amount - </span>
            {data.AmountInUSD === undefined ? "None" : data.AmountInUSD}
          </h2>
        </div>
        <div className="">
          <h2 className="text-black  text-xl font-medium">
            {" "}
            <span className="font-semibold">Date</span> - {data.Date}
          </h2>
        </div>
      </span>
      <Modal visible={showmodal} detail={data} onClose={handleOnClose} />
    </div>
  );
}

export default CardCompnent;
