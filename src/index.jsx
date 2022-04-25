import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
// store
import store from './utils/store'
// CSS
import './index.scss'
// PAges
import Home from './pages/Home'
import CreateEmployee from './pages/CreateEmployee'
// Components
import Header from './components/Header'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/createEmployee"
                        element={<CreateEmployee />}
                    />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
