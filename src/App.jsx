import {useState, useEffect} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import SelectionScreen from './components/SelectionScreen';
import VotingScreen from './components/VotingScreen';
import ResultScreen from './components/ResultScreem';

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [voteNumbers, setVoteNumbers] = useState([]);
  const [screen, setScreen] = useState(0); // 0: Connect Wallet, 1: Selection, 2: Voting, 3: Result
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accounts => {
        setWalletAddress(accounts[0] || '');
        if (!accounts.length) {
          setScreen(0);
        }
      });
    }
  }, []);

  const handleNumberClick = (number, isSelectionScreen) => {
    if (isSelectionScreen) {
      setSelectedNumbers(prev => {
        if (prev.includes(number)) {
          return prev.filter(n => n !== number);
        }
        if (prev.length < 7) {
          return [...prev, number];
        }
        return prev;
      });
    } else {
      setVoteNumbers(prev => {
        if (prev.includes(number)) {
          return prev.filter(n => n !== number);
        }
        if (prev.length < 7) {
          return [...prev, number];
        }
        return prev;
      });
    }
  };

  const handleSubmitSelection = () => {
    if (selectedNumbers.length === 7) {
      setScreen(2);
    } else {
      toast.error('Please select exactly seven numbers.');
    }
  };

  const handleSubmitVote = () => {
    if (voteNumbers.length === 7) {
      setScreen(3);
    } else {
      toast.error('Please vote for exactly seven numbers.');
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        setScreen(1);
        toast.success('Wallet connected successfully!');
      } catch (error) {
        toast.error('Failed to connect wallet.');
      }
    } else {
      toast.error('Please install MetaMask.');
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <Toaster />
      {!walletAddress && (
        <div className='flex justify-center items-center h-screen'>
          <button
            onClick={connectWallet}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
          >
            Connect Wallet
          </button>
        </div>
      )}
      {walletAddress && (
        <div className='relative'>
          <div className='absolute top-4 left-4 bg-gray-100 p-2 rounded text-sm'>
            Wallet:{' '}
            {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
          </div>
          {screen === 1 && (
            <SelectionScreen
              selectedNumbers={selectedNumbers}
              handleNumberClick={number => handleNumberClick(number, true)}
              handleSubmitSelection={handleSubmitSelection}
            />
          )}
          {screen === 2 && (
            <VotingScreen
              selectedNumbers={selectedNumbers}
              voteNumbers={voteNumbers}
              handleNumberClick={number => handleNumberClick(number, false)}
              handleSubmitVote={handleSubmitVote}
            />
          )}
          {screen === 3 && (
            <ResultScreen
              selectedNumbers={selectedNumbers}
              voteNumbers={voteNumbers}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
