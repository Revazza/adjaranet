import './App.css';
import { Route } from "react-router-dom";


import store from './components/store';
import {Provider} from 'react-redux';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Authentication from './components/authentication/Authentication';

function App() {
  return (
    <Provider store={store}>
      <Route path="/">
          <Home />
          <div className="Pop_up_window">
            <Authentication />
          </div>
          <Footer />
      </Route>
    </Provider>
  );
}

export default App;
