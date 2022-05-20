import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

import store from './components/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
