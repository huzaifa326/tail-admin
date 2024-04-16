import React, { useState } from "react";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center gap-[20px] cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-[20px] h-[20px] cursor-pointer"
      />
      {label}
    </label>
  );
};

export default Checkbox;
