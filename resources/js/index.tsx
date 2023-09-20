import React from 'react'
import 'dayjs/locale/ru'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import GlobalStyle from './style/global-styles'
import { checkAuthAction } from './store/employees-slice/employees-api-actions'
import dayjs from 'dayjs';

store.dispatch(checkAuthAction());
dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
