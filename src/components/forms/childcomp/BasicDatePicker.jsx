import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "./calender.svg";

const BasicDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div
      className="w-full text-general-gray dark:text-dark-general-gray custom-input relative"
      onClick={onClick}
    >
      <input
        type="text"
        value={value}
        readOnly
        ref={ref}
        placeholder="mm/dd/yyyy"
        className="text-general-gray dark:text-dark-general-gray block standard-input dark:border-strokedark w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-[#1C2434] dark:focus:border-primary flatpickr-input"
      />
      <img
        src={CalendarIcon}
        alt="Calendar"
        className="w-[20px] h-[20px] calendar-icon absolute right-[20px] top-[15px] "
        onClick={onClick}
      />
    </div>
  ));

  return (
    <div className="w-full date-picker-container">
      <DatePicker
        className="w-full"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="dd/MM/yyyy"
        showPopperArrow={false}
      />
    </div>
  );
};

export default BasicDatePicker;
