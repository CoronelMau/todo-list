import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/Sign-UpScreen';
import FindAccountScreen from './components/FindAccountScreen';
import ChangePasswordScreen from './components/ChangePasswordScreen';
import MainPageScreen from './components/MainPageScreen';
import ProfileScreen from './components/ProfileScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/sign-up' element={<SignUpScreen />} />
        <Route path='/find-account' element={<FindAccountScreen />} />
        <Route path='/change-pwd/:id' element={<ChangePasswordScreen />} />
        <Route path='/main/:id' element={<MainPageScreen />} />
        <Route path='/profile/:id' element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
