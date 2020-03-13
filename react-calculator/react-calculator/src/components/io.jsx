import React from 'react';

const handleChange = event => {
  console.dir(event.target);
};

const InputOutput = () => {
  return (
    <>
      <input type="number" onChange={handleChange} />
    </>
  );
};

export default InputOutput;
