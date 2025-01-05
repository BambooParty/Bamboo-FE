import React, { ChangeEventHandler } from "react";

const MbtiButton: React.FC<{
  choices: { value: string; id: string }[];
  selected: string;
  onChange: ChangeEventHandler;
}> = ({ choices, selected, onChange }) => {
  return (
    <div className="flex">
      <div>
        <input
          className="hidden peer"
          type="radio"
          id={choices[0].id}
          onChange={onChange}
          checked={selected == choices[0].value}
        />
        <label
          className="bg-bamboo-50 hover:bg-bamboo peer-checked:bg-bamboo text-gray-800 font-semibold py-2 px-4 cursor-pointer rounded-l"
          htmlFor={choices[0].id}
        >
          {choices[0].value.toUpperCase()}
        </label>
      </div>
      <div>
        <input
          className="hidden peer"
          type="radio"
          id={choices[1].id}
          onChange={onChange}
          checked={selected == choices[1].value}
        />
        <label
          className="bg-bamboo-50 hover:bg-bamboo peer-checked:bg-bamboo text-gray-800 font-semibold py-2 px-4 cursor-pointer rounded-r"
          htmlFor={choices[1].id}
        >
          {choices[1].value.toUpperCase()}
        </label>
      </div>
    </div>
  );
};

export default MbtiButton;
