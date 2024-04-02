import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './MyRoutes.jsx'
import './assets/index.css'
import GlobalContextProvider from './components/GlobalContext.jsx'
import { Provider } from 'react-redux'
import { mypersistor, mystore } from './components/reducers/mystore.jsx'

import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={mystore}>
    <PersistGate loading={null} persistor={mypersistor}>

      <GlobalContextProvider>
        <MyRoutes />
      </GlobalContextProvider>

    </PersistGate>
  </Provider>
  // </React.StrictMode>,
)
