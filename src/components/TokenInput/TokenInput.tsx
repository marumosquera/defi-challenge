import React, { useState, FC } from "react";

import "./TokenInput.scss";

const TokenDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  const options = [
    { label: "USDC", value: "usdc" },
    { label: "DAI", value: "dai" },
  ];

  const handleSelect = (value: string) => {
    setSelectedCurrency(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedCurrency
          ? options.find((option) => option.value === selectedCurrency)?.label
          : "select a currency"}
        
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TokenDropdown;
