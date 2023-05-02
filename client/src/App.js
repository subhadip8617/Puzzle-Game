import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/Registerpage';
import {LeaderboardPage} from './pages/LeaderboardPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/login' element = {<LoginPage/>}/>
          <Route path='/register' element = {<RegisterPage/>}/>
          <Route path='/leaderboard' element = {<LeaderboardPage/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
