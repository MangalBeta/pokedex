import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './style/main.css'
import configureStore from './redux/store/configure-store'
import Routes from './Routes'
const store = configureStore()


render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
