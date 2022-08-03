import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router';
import './App.css';
import Appriciate from './components/Appriciate';
import Rate from './components/Rate';

function App() {
  const navigate = useNavigate();
  const ratings = [1,2,3,4,5];
  const [nums, setnums] = useState();
  const submit = () => {
    if (nums) {
      navigate("/appriciate", { replace: true })
    }
    else{
      alert("Rate us on the scale of 1 to 5")
    }
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Rate ratings={ratings} nums={nums} setnums={setnums} submit={submit}/>} />
      <Route path="/appriciate" element={<Appriciate nums={nums} setnums={setnums}/>} />
    </Routes>
      {/* <Rate /> */}
    </>
  );
}

export default App;
