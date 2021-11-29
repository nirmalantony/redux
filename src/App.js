import logo from './logo.svg';
import './App.css';
import Home from './Home';
//import configureStore from './redux/configureStore';
//import {Provider as ReduxProvider} from 'react-redux';
function App() {
 // const store = configureStore();
 
  return (
    //<ReduxProvider store={store}>
    <div className="App">
      <header className="App-header">
        <Home></Home>
      </header>
    </div>
    //</ReduxProvider>
  );
}

export default App;
