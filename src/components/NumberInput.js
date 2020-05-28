import React from 'react';
import './NumberInput.css';

function NumberInput({ value, onChange }) {
  const hundreds = Math.floor(value / 100);
  const tens = Math.floor((value - 100 * hundreds) / 10);
  const ones = Math.floor(value % 10);

  function handleDigitChange(digit, scale) {
    let newValue = 0;
    for (let exponent = 1; exponent <= 100; exponent *= 10) {
      const existingDigit = Math.floor(value / exponent) % 10;
      newValue += exponent * (scale === exponent ? digit : existingDigit);
    }
    onChange(newValue);
  }

  return (
    <div className="numberInput">
      <Digit
        value={hundreds}
        max={1}
        isDimmed={hundreds === 0}
        onChange={(value) => handleDigitChange(value, 100)}
      />
      <Digit
        value={tens}
        isDimmed={hundreds === 0 && tens === 0}
        onChange={(value) => handleDigitChange(value, 10)}
      />
      <Digit value={ones} onChange={(value) => handleDigitChange(value, 1)} />
    </div>
  );
}

function Digit({ value, max, isDimmed, onChange }) {
  const buttons = [];
  for (let i = 0; i <= (max || 9); i++) {
    buttons.push(
      <button
        key={i}
        className={value === i ? 'selected' : ''}
        onClick={() => onChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="numberColumn">
      <span>{isDimmed ? String.fromCharCode(160) : value}</span>
      {buttons}
    </div>
  );
}

export default NumberInput;
