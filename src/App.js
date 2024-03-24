import logo from './logo.svg';
import './App.css';
import Xinchao from './components/Greet';
import class_component from './components/class_component'
import Greet from './components/class_component';
import Welcome from './components/Welcome';
import Counter from './components/counter';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        안녕하세요
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Xinchao name="Khoa" lastName = "2">
        <p>this is khọa</p>
      </Xinchao>
      <Xinchao name="Phat" lastName = "hi"/>
      <Xinchao name="Hao" lastName = "hung"/>
      <Greet/>
      <Welcome/>
      <Counter/>
      <EventBind/> */}
      {/* <ParentComponents/> */}
      {/* <UserGreeting/> */}
      <NameList/>
    </div>
  );
}

export default App;
