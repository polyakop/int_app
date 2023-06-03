import React from 'react';
import './App.css';
import { MainPage } from './Comps/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

function App() {
  return (
    <div className="App">
    
      <MainPage/>
    </div>
  );
}

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App/>
  </Provider>
  )
}

export default AppContainer;
