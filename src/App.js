import logo from './logo.svg';
import './App.css';

// import VIf from './views/vIf';
// import VShow from './views/vShow'
// import VFor from './views/vFor';
// import Computed from './views/computed';
// import Watch from './views/watch'
// import Provide from './views/provide';
import Slot from './views/slot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <VIf/> */}
        {/* <VShow/> */}
        {/* <VFor/> */}
        {/* <Computed></Computed> */}
        {/* <Watch></Watch> */}
        {/* <Provide></Provide> */}
        <Slot></Slot>
      </header>
    </div>
  );
}

export default App;
