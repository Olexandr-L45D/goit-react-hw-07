
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
import App from './components/App/App';
// 1. Імпортуємо провайдер
import { Provider } from 'react-redux'
// 2. Імпортуємо створений раніше стор, який зберігається в файлі redux/store
import { store, persistor } from "../src/redux/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
