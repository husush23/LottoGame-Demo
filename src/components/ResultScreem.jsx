const ResultScreen = ({selectedNumbers, voteNumbers}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
      <h2 className='text-2xl mb-4'>Game Results</h2>
      <div>
        <h3 className='text-xl mb-2'>Your Selected Numbers:</h3>
        <div className='flex justify-center space-x-4 mb-4'>
          {selectedNumbers.map(number => (
            <div
              key={number}
              className='p-3 bg-gray-800 text-white rounded-full text-2xl'
            >
              {number}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className='text-xl mb-2'>Your Voted Numbers:</h3>
        <div className='flex justify-center space-x-4 mb-4'>
          {voteNumbers.map(number => (
            <div
              key={number}
              className='p-3 bg-gray-800 text-white rounded-full text-2xl'
            >
              {number}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className='text-xl mb-2'>Money to Play:</h3>
        <p id='money-display' className='text-2xl text-green-500'>
          100 LBT
        </p>
      </div>
      <div className='mt-4'>
        <button className='bg-purple-500 text-white px-4 py-2 rounded'>
          Play Game
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
