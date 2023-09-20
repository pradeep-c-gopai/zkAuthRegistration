import Header from './V1/components/Header'
import UseCase from './V1/components/UseCase';
import Prevent from './V1/components/Prevent';
import 'bootstrap/dist/css/bootstrap.css';

import Modal from "react-bootstrap/Modal";

function App() {
  return (
    <div className="App">
      <Header/>
      <UseCase/>
      <Prevent/>
    </div>
  );
}

export default App;
