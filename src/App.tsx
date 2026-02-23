import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ClientPortal from './pages/clientPortal'
import { Login } from './pages'
import { SignUp } from './pages/Auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<ClientPortal />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App