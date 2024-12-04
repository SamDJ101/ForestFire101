import './App.css';
import SiteNav from './components/common/SiteNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/home/homepage';
import {Route, Routes} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {
  return (
    <div>
      <SiteNav/>
      <Routes>
        <Route path='*' element={<Homepage/>} />
        <Route path='/' exact={true} element={<Homepage/>} />
        <Route path='/login' exact={true} element={<Login/>} />
        <Route path='/signup' exact={true} element={<Signup/>} />

      </Routes>
    </div>
  );
}

export default App;
