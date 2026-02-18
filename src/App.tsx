import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ClientPortal from './pages/clientPortal'



function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ClientPortal />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App