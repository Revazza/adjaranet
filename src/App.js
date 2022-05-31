import './App.css';
import { Route } from "react-router-dom";


import store from './components/store';
import {Provider} from 'react-redux';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Route path='/'>
        <Home />
        <Footer />
      </Route>
      <Route path='/login'>
      </Route>
    </Provider>
  );
}

export default App;
