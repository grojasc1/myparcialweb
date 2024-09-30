import './App.css';
import Banner from './components/Banner';
import Robots from './components/Robots';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import RobotDetail from './components/RobotDetail';


function App() {



  return (
    <div className="App">
      <Banner></Banner>
      <BrowserRouter>
        <div>
          <Routes>

            <Route path="/" element={<SignInForm />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/robots/:id" element={<RobotDetail />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
