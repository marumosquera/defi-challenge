import React, { useState, FC } from "react";

//style
import "./TokenInput.scss";

//redux
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/slice/TransactionSlice";

const TokenDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const dispatch = useDispatch();

  const options = [
    { label: "USDC", value: "usdc" },
    { label: "DAI", value: "dai" },
  ];

  const handleSelect = (value: string) => {
    setSelectedCurrency(value);
    setIsOpen(false);
    dispatch(setCurrency(value.toUpperCase() as "DAI" | "USDC"));
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedCurrency
          ? options.find((option) => option.value === selectedCurrency)?.label
          : "DAI"}
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
