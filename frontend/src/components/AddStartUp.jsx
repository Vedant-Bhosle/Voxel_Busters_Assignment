import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function AddStartUp() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    StartupName: "",
    CityLocation: "",
    Date: "",
    InvestorsName: "",
    IndustryVertical: "",
    SubVertical: "",
    AmountInUSD: "",
    InvestmentType: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputs = (e) => {
    var names = e.target.name;
    var value = e.target.value;
    setdata({ ...data, [names]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
  };

  const submitForm = async () => {
    try {
      const res = await Axios.post(
        "https://voxel-busters-assignment-server.vercel.app/register",
        data
      );

      if (res.status === 201) {
        console.log("hereeeeeeee");
        window.alert("Sucessfully registerd!!");
        navigate("/");
      }
      // window.alert("submitted");
      // console.log("wind");
    } catch (error) {
      console.log("error is axios", error);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
      submitForm();
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};

    if (!values.Date) {
      errors.date = "Date is required!";
    }

    if (!values.StartupName) {
      errors.StartupName = "Password is required";
    }
    if (!values.IndustryVertical) {
      errors.IndustryVertical = "IndustryVertical is required";
    }
    if (!values.SubVertical) {
      errors.SubVertical = "SubVertical is required";
    }

    if (!values.CityLocation) {
      errors.CityLocation = "Location is required";
    }

    if (!values.InvestorsName) {
      errors.InvestorsName = "InvestorsName name is required";
    }

    if (!values.InvestmentType) {
      errors.InvestmentType = "InvestmentType is required";
    }

    if (!values.AmountInUSD) {
      errors.AmountInUSD = "AmountInUSD is required";
    }

    return errors;
  };

  return (
    <div>
      <Navbar />
      <div className="mt-16"></div>
      {/* form */}
      <div class=" min-h-screen flex items-center">
        <div class="w-full m-10 ">
          <h2 class="text-center  font-bold font-sans text-3xl uppercase mb-10">
            Register your Startup
          </h2>
          <div class="border border-slate-100 bg-white p-10 rounded-lg shadow-lg md:w-3/4 mx-auto lg:w-1/2">
            <form action="">
              <div class="mb-5">
                <label for="name" class="block mb-2 font-bold text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="StartupName"
                  value={data.StartupName}
                  onChange={handleInputs}
                  placeholder="Put in your fullname."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p className="text-sm text-red-400 mt-2">
                  {" "}
                  {formErrors.StartupName}
                </p>
              </div>

              <div class="mb-5">
                <label for="city" class="block mb-2 font-bold text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={data.CityLocation}
                  onChange={handleInputs}
                  name="CityLocation"
                  placeholder="Enter you city."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">
                  {" "}
                  {formErrors.CityLocation}
                </p>
              </div>

              <div class="mb-5">
                <label
                  for="starting_year"
                  class="block mb-2 font-bold text-gray-600"
                >
                  Starting year
                </label>
                <input
                  type="date"
                  id="starting_year"
                  value={data.Date}
                  onChange={handleInputs}
                  name="Date"
                  placeholder="Enter Starting year."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">{formErrors.Date}</p>
              </div>

              <div class="mb-5">
                <label for="Founder" class="block mb-2 font-bold text-gray-600">
                  InvestorsName
                </label>
                <input
                  type="text"
                  id="Founder"
                  value={data.InvestorsName}
                  onChange={handleInputs}
                  name="InvestorsName"
                  placeholder="Enter name of founders"
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">
                  {formErrors.InvestorsName}
                </p>
              </div>

              <div class="mb-5">
                <label
                  for="industrytype"
                  class="block mb-2 font-bold text-gray-600"
                >
                  Industry type
                </label>
                <input
                  type="text"
                  id="industrytype"
                  value={data.IndustryVertical}
                  onChange={handleInputs}
                  name="IndustryVertical"
                  placeholder="Enter Industry type."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">
                  {formErrors.IndustryVertical}
                </p>
              </div>
              <div class="mb-5">
                <label
                  for="SubVertical"
                  class="block mb-2 font-bold text-gray-600"
                >
                  SubVertical
                </label>
                <input
                  type="text"
                  id="SubVertical"
                  name="SubVertical"
                  value={data.SubVertical}
                  onChange={handleInputs}
                  placeholder="Enter Number of employees."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">
                  {formErrors.SubVertical}
                </p>
              </div>
              <div class="mb-5">
                <label for="amount" class="block mb-2 font-bold text-gray-600">
                  Funding Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  value={data.AmountInUSD}
                  onChange={handleInputs}
                  name="AmountInUSD"
                  placeholder="Enter Funding Amount."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">
                  {formErrors.AmountInUSD}
                </p>
              </div>
              <div class="mb-5">
                <label
                  for="InvestmentType"
                  class="block mb-2 font-bold text-gray-600"
                >
                  InvestmentType
                </label>
                <input
                  type="text"
                  id="InvestmentType"
                  value={data.InvestmentType}
                  onChange={handleInputs}
                  name="InvestmentType"
                  placeholder="Enter  InvestmentType."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">
                  {formErrors.InvestmentType}
                </p>
              </div>
              <button
                onClick={handleSubmit}
                class="block w-full bg-slate-800 text-white font-bold p-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStartUp;
