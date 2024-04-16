import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../forms/childcomp/calender.svg";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div
      className=" text-general-gray dark:text-dark-general-gray custom-input relative"
      onClick={onClick}
    >
      <input
        type="text"
        value={value}
        readOnly
        ref={ref}
        placeholder="Apr 3, 2024- Apr 9,2024"
        className="bg-white text-general-gray dark:text-dark-general-gray block standard-input dark:border-strokedark rounded border-[1.5px] border-stroke bg-transparent ps-[60px] pr-5 py-1 font-normal text-[16px] outline-none transition dark:border-form-strokedark dark:bg-[#1C2434] flatpickr-input"
      />
      <img
        src={CalendarIcon}
        alt="Calendar"
        className="w-[20px] h-[20px] calendar-icon absolute left-[20px] top-[8px] "
        onClick={onClick}
      />
    </div>
  ));

  return (
    <div className=" date-picker-container">
      <DatePicker
        className=""
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="dd/MM/yyyy"
        showPopperArrow={false}
      />
    </div>
  );
};

export default Calender;
