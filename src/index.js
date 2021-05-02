import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App/App'
import { history } from './helpers/history'
import './api/axiosInterceptors'


ReactDOM.render(
  <Router history={history}>
      <Provider store={store}>
          <App />
      </Provider>
  </Router>,
  document.getElementById('root')
)
