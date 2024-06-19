import PyramidGrid from './PyramidGrid';

const VotingScreen = ({
  selectedNumbers,
  voteNumbers,
  handleNumberClick,
  handleSubmitVote,
}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
      <h2 className='text-2xl mb-4'>Vote for Numbers</h2>
      <PyramidGrid
        selectedNumbers={voteNumbers}
        handleClick={handleNumberClick}
        disabledNumbers={selectedNumbers}
      />
      <div className='mt-4'>
        <button
          onClick={handleSubmitVote}
          className='bg-green-500 text-white px-4 py-2 rounded'
        >
          Submit Vote
        </button>
      </div>
    </div>
  );
};

export default VotingScreen;
