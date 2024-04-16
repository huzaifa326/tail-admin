import React, { useState } from "react";

const TaskCheckBox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`flex items-center gap-[15px] cursor-pointer ${isChecked ? 'line-through' : ''} text-general-gray dark:text-dark-general-gray `} >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-[19px] h-[19px] cursor-pointer"
      />
      {label}
    </label>
  );
};

export default TaskCheckBox;
