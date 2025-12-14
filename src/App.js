import logo from './logo.svg';
import './App.css';
import Tictactoe from './components/tictactoe';
import CallbackMemo from './callbackMemo/callbackMemo';
import Hooks from './components/hooks';
import BlockGame from './components/blockGame';
import TransferList from './components/transferList';
import MemoryGame from './components/memoryGame/memoryGame';
import LeastRecentlyUsed from './components/LRU';
import LeastFrequentlyUsed from './components/LFU';
import TrafficLight from './components/trafficLight';
import MultiInput from './components/duplicateInput';
import OptimizedMultiInput from './components/duplicateInput/optimizedIndex';
import OtpLayout from './components/otpLayout';
import Modal from './components/modal';
import TimerComponent from './components/timerComponent';

function App() {
  return (
    <div className="App">
      
      {/* <Tictactoe/> */}
      {/* <CallbackMemo/> */}
      {/* <Hooks/> */}
      {/* <BlockGame/> */}
      {/* <TransferList/> */}
      {/* <MemoryGame/> */}
      {/* <LeastRecentlyUsed/> */}
      {/* <LeastFrequentlyUsed/> */}
      {/* <TrafficLight/> */}
      {/* <MultiInput/> */}
      {/* <OptimizedMultiInput/> */}
      {/* <OtpLayout/> */}
      {/* <Modal/> */}
      <TimerComponent/>
    </div>
  );
}

export default App;
