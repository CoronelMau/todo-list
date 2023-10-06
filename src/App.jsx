import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/Sign-UpScreen';
import FindAccountScreen from './components/FindAccountScreen';
import ChangePasswordScreen from './components/ChangePasswordScreen';
import MainPageScreen from './components/MainPageScreen';
import ProfileScreen from './components/ProfileScreen';
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function isAuthenticated() {
  const jwt = localStorage.getItem('token');

  return !!jwt;
}

function ProtectedRoute({ children }) {
  if (isAuthenticated()) return children;

  return <Navigate to='/' replace />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/sign-up' element={<SignUpScreen />} />
        <Route path='/find-account' element={<FindAccountScreen />} />
        <Route path='/change-pwd' element={<ChangePasswordScreen />} />
        <Route
          path='/main'
          element={
            <ProtectedRoute>
              <MainPageScreen />
            </ProtectedRoute>
          }
        />
        <Route path='/profile' element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
