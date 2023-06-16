/* eslint-disable no-eval */
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const handleClear = () => {
    setResult('');
  };

  const handleEqual = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />

      <div className="buttons">
        <div className="row">
          <button className="clear" onClick={handleClear}>AC</button>.
          <button onClick={() => handleClick('7')}>7</button>.
          <button onClick={() => handleClick('4')}>4</button>.
          <button onClick={() => handleClick('1')}>1</button>.
          <button onClick={() => handleClick('0')}>0</button>.
        </div>

        <div className="row">
          <button className="black" ></button>.
          <button onClick={() => handleClick('8')}>8</button>.
          <button onClick={() => handleClick('5')}>5</button>.
          <button onClick={() => handleClick('2')}>2</button>.
        </div>

        <div className="row">
          <button className="black"></button>.
          <button onClick={() => handleClick('9')}>9</button>.
          <button onClick={() => handleClick('6')}>6</button>.
          <button onClick={() => handleClick('3')}>3</button>.
          <button onClick={() => handleClick('.')}>,</button>.
        </div>

        <div className="row">
          <button className="operator" onClick={() => handleClick('/')}>÷</button>.
          <button className="operator" onClick={() => handleClick('*')}>×</button>.
          <button className="operator" onClick={() => handleClick('-')}>-</button>.
          <button className="operator" onClick={() => handleClick('+')}>+</button>.
          <button className="operator" onClick={handleEqual}>=</button>.
        </div>

      </div>
    </div>
  );
};

export default Calculator;