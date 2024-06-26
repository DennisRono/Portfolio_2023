import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/css/globals.css'
import './styles/output.css'
import App from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './state/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
