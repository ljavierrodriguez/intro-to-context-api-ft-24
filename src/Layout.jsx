import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import Menu from './components/Menu'
import Home from './pages/Home'
import GlobalContextProvider from './context/GlobalContextProvider'
import injectContext from './store/AppContext'

const Layout = () => {
    return (
        <GlobalContextProvider>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/services' element={<Services />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </GlobalContextProvider>
    )
}

export default injectContext(Layout)