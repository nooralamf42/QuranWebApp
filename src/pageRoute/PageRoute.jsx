import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Page from '../pages/Page'
import NotFound from '../pages/NotFound'

export default function PageRoute() {
  return (
    <Routes>
        <Route path='/' Component={Home} />
        <Route path='/read' Component={Page} />
        <Route path='*' Component={NotFound} />
    </Routes>
  )
}
