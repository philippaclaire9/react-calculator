import React from 'react';

const Keypad = () => {
  return (
    <form>
      <div className="calculator-buttons">
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="add">+</button>
        <button id="multiply">x</button>
        <br />
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="subtract">-</button>
        <button id="divide">/</button>
        <br />
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="equals">=</button>
        <button id="decimal">.</button>
        <br />
        <button id="zero">0</button>
      </div>
    </form>
  );
};

export default Keypad;
