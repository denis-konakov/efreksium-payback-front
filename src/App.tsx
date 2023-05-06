import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './components/loading';
import Login_reg from './components/login-reg';
import { Route, Routes } from "react-router-dom";
import Sign_up from "./components/sign_up";
import Sign_in from './components/sign_in';
import Terms_of_use from './components/terms_of_use';
import Privacy_policy from './components/privacy_policy';
import Password_recovery1 from './components/password_recovery1';
import Password_recovery2 from './components/password_recovery2';
import Password_recovery3 from './components/password_recovery3';
import Profile from './components/profile/profile';

function App() {

  // Заставка загрузки
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])
  // /.Заставка загрузки

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Login_reg />} />

        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/sign_in" element={<Sign_in />}/>

        <Route path="/terms_of_use" element={<Terms_of_use />} />
        <Route path="/privacy_policy" element={<Privacy_policy />} />

        <Route path="/password_recovery1" element={<Password_recovery1 />} />
        <Route path="/password_recovery2" element={<Password_recovery2 />} />
        <Route path="/password_recovery3" element={<Password_recovery3 />} />

        <Route path="/profile/*" element={<Profile/>}/>
      </Routes>
    </div>
  );
}



export default App;
