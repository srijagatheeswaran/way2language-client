import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Certificate from './component/certificate/certificate';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
        {/* <Footer /> */}
      </Router>

    </>
  );
}

export default App;
