import './App.css';
import Banner from './components/Banner';
import Robots from './components/Robots';
import { BrowserRouter, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import RobotDetail from './components/RobotDetail';

function App() {
  return (
    <div className="App">
    <Banner></Banner>
    <BrowserRouter>
      <div>
        <Route path="/" component={SignInForm} /> 
        <Route path="/robots" component={Robots} />
        <Route path="/robots/:id" component={RobotDetail} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
