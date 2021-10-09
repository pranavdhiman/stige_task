import './App.css';
import './components/style.css';
import Navbar from './components/Navbar';
import Userbody from './components/Userbody';
import {useState} from 'react';

function App() {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState([]);
  return (
    <>
    <Navbar user={setuser} loading={setloading}/><hr/>
    <Userbody user={user} load={loading}/>
    </>
  );
}

export default App;
