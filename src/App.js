import './App.css';
import Banner from './components/Banner';
import Robots from './components/Robots';
import { BrowserRouter, Route, useNavigate } from 'react-router-dom';
import SignInForm from './components/SignInForm';

function App() {
  return (
    <div className="App">
    <Banner></Banner>
    <BrowserRouter>
      <div>
        <Route path="/" component={SignInForm} /> 
        <Route path="/robots" component={Robots} />
        <Route path="/robots/:id" component={Robots} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
