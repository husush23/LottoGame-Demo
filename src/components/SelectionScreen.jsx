import React from 'react';
import PyramidGrid from './PyramidGrid';

const SelectionScreen = ({
  selectedNumbers,
  handleNumberClick,
  handleSubmitSelection,
}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
      <h2 className='text-2xl mb-4'>Select Your Seven Numbers</h2>
      <PyramidGrid
        selectedNumbers={selectedNumbers}
        handleClick={handleNumberClick}
      />
      <div className='mt-4'>
        <button
          onClick={handleSubmitSelection}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SelectionScreen;
