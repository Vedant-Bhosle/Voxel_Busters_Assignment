import React from "react";

function Modal({ visible, onClose, detail }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-10 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white absolute flex flex-col flex-wrap gap-2 max-w-2xl  rounded-2xl shadow-2xl   m-10">
        <h2 className="font-sans  rounded-tl-2xl rounded-tr-2xl pt-3 pl-8 pb-5 bg-slate-800 text-3xl font-semibold text-white">
          {detail.StartupName}
        </h2>

        <div className="pl-8 pb-8 pr-8 pt-2 flex flex-col flex-wrap gap-3">
          <h2 className="font-sans text-blue-950 text-lg">
            <span className="font-semibold text-xl ">Location - </span>
            {detail.CityLocation}
          </h2>
          <h2 className="font-sans text-blue-950  text-lg">
            <span className="font-semibold text-xl"> Funding Amount - </span>
            {detail.AmountInUSD === undefined
              ? "Not Mentioned"
              : detail.AmountInUSD}
          </h2>
          <h2 className="font-sans text-blue-950  text-lg">
            <span className="font-semibold text-xl">Industry Vertical - </span>
            {detail.IndustryVertical}
          </h2>
          <h2 className="font-sans text-blue-950  text-lg">
            <span className="font-semibold text-xl">Sub Vertical - </span>{" "}
            Online
            {detail.SubVertical}
          </h2>
          <h2 className="font-sans text-blue-950  text-lg">
            <span className="font-semibold text-xl">InvestorsName - </span>
            {detail.InvestorsName}
          </h2>
          <h2 className="font-sans  text-blue-950 text-lg">
            <span className="font-semibold text-xl">InvestmentType - </span>{" "}
            {detail.InvestmentType}
          </h2>
          <h2 className="font-sans text-blue-950  text-lg">
            <span className="font-semibold text-xl">Starting Date - </span> -
            {detail.Date}
          </h2>
        </div>

        <button className="absolute right-2 pr-5 pt-4 top-0" onClick={onClose}>
          {" "}
          <ion-icon
            color="light"
            name="close-circle-outline"
            size="large"
          ></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default Modal;
