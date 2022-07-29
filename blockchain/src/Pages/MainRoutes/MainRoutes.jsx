import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardanoExpert from '../CardanoExpert'
import CartPage from '../CartPage'
import EtheriumDeveloper from '../EtheriumDeveloper'
import Polkadot from '../Polkadot'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/eterium/cart' element={<CartPage/>} />
        <Route path='/cardano/cart' element={<CartPage/>} />
        <Route path='/polkadot/cart' element={<CartPage/>} />
        <Route path='/eterium' element={<EtheriumDeveloper/>} />
        <Route path='/cardano' element={<CardanoExpert/>} />
        <Route path='/polkadot' element={<Polkadot/>} />
       


    </Routes>
  )
}

export default MainRoutes
