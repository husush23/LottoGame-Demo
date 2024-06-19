const PyramidGrid = ({selectedNumbers, handleClick, disabledNumbers = []}) => {
  const rows = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20, 21],
  ];

  return (
    <div className='space-y-2'>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='flex justify-center space-x-2'>
          {row.map(number => (
            <button
              key={number}
              data-number={number}
              onClick={() => handleClick(number)}
              className={`m-2 p-4 rounded-full text-white text-xl w-14 h-14 transition-transform transform hover:scale-110 ${
                disabledNumbers.includes(number)
                  ? 'bg-red-300 pointer-events-none'
                  : selectedNumbers.includes(number)
                  ? 'bg-green-500'
                  : 'bg-gray-700'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PyramidGrid;
