// import VIf from './views/vIf';
// import VShow from './views/vShow'
import VFor from './views/vFor';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <VIf/> */}
        {/* <VShow/> */}
        <VFor/>
      </header>
    </div>
  );
}

export default App;
