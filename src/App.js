import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Watch from './Components/Watch';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <div className='menu'>
      <NavLink className='menus' to='/watch'>Saat</NavLink>
      <NavLink className='menus' to='/stopwatch'>Saniyəölçən</NavLink>
      <NavLink className='menus' to='/timer'>Taymer</NavLink>
      </div>

     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/timer' element={<Timer />} />
     </Routes>
    </div>
  )
}

export default App;