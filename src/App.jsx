import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menyu from './Components/Menyu.components'
import Residents from './Components/Residents.components'
import Login from './Components/Login.components'
import Users from './Components/Users.components';
import PriceList from './Components/PriceList.Components';
function App() {
  const [residentsVisible, setResidentsVisible] = useState(false);
  const [usersVisible, setUsersVisible] = useState(false);
  const [priceListVisible, setPriceListVisible] = useState(false);
  const toggleResidents = () => {
    setResidentsVisible(!residentsVisible);
  }
  const disabledResidents = () => {
    setResidentsVisible(false)
  }
  const toggleUsers = () => {
    setUsersVisible(!usersVisible);
  }
  const disabledUsers = () => {
    setUsersVisible(false)
  }
  const togglePriceList = () => {
    setPriceListVisible(!priceListVisible);
  }
  const disabledPriceList = () => {
    setPriceListVisible(false)
  }
  return (
    <div className='app'>
        <Routes>
          {/* Default olaraq Login səhifəsinə yönləndirmək */}
          <Route path="#/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <Menyu 
                onResidentsClick={toggleResidents} 
                closeResidentsClick={disabledResidents}
                onUsersClick={toggleUsers} 
                closeUsersClick={disabledUsers} 
                onPriceListClick={togglePriceList}
                closePriceListClick={disabledPriceList}
              />
            } 
          />
        </Routes>
        {/* Şərti render */}
        {residentsVisible && <Residents />}
        {usersVisible && <Users />}
        {priceListVisible && <PriceList />}
    </div>
  )
}

export default App;
