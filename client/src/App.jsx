import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Header from './components/Header';

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
      {/* Header will show on every page */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
