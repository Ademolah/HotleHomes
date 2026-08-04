// import Layout from './components/Layouts';
// import Home from './pages/Home'
// import Portfolio from './pages/Portfolio'

// function App() {
//   return (
//     <Layout>
//       <Home />
//     </Layout>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default homepage route */}
          <Route path="/" element={<Home />} />
          
          {/* Portfolio gallery route */}
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;