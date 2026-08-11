import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // <-- Fixed with curly braces
import Layout from './components/Layouts';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import WhoWeAre from './pages/WhoWeAre';
import VisitUs from './pages/VisitUs';
import Inquire from './pages/Inquire'
import PropertyCard from './pages/Purchase'

function App() {
  return (
    <Router>
      {/* Global Toaster placed outside the visual layout flow */}
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#172554',
            color: '#ffffff',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '9999px',
            padding: '14px 28px',
            fontSize: '14px',
            fontWeight: '300',
            letterSpacing: '0.05em',
            boxShadow: '0 20px 40px -15px rgba(23,37,84,0.3)',
          },
          success: {
            iconTheme: {
              primary: '#fbbf24',
              secondary: '#172554',
            },
          },
          error: {
            style: {
              border: '1px solid rgba(239, 68, 68, 0.3)',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#172554',
            },
          },
        }}
      />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/contact" element={<VisitUs />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/purchase" element={<PropertyCard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;