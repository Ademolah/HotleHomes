

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import WhoWeAre from './pages/WhoWeAre'
import VisitUs from './pages/VisitUs'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default homepage route */}
          <Route path="/" element={<Home />} />
          
          {/* Portfolio gallery route */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/contact" element={<VisitUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;